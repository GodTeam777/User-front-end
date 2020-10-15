<template>
    <div style="height: 800px">
        <div style="float: left;width: 60%;height: 350px;border: 0px solid red;margin-left: 15%;margin-top: 20px;">
            <p style="line-height:35px;background-color:rgba(22,98,188,0.7);font-size: 20px;width: 100%;text-align: center;color: Window">
                {{licai.bdname}}</p>
            <div id="myChart" :style="{width: '100%', height: '300px'}">
            </div>
        </div>
        <div style="margin-left: 3%;width: 15%;height: 250px;border: 1px solid rgba(203,157,34,0.76);float: left;margin-top: 20px">
            <p style="line-height:35px;background-color:rgba(203,157,34,0.76);font-size: 20px;width: 100%;text-align: center;color: Window">产品实时购买动态</p>
            <div class="scroll-wrap" >
                <ul class="scroll-content" :style="{ top }">
                    <li style="line-height: 30px;margin-left: 10px;font-size: 13px;color: #8c939d" v-for="item in gund" v-bind:key="item.id"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);font-size: 15px"></span><a>{{item.name}}成功买入</a><a style="color: red">{{item.money}}</a>元</li >
                </ul>
            </div>
        </div>
        <div style="margin-left: 15%;width: 78%;height: 350px;border: 1px solid rgba(203,157,34,0.76);float: left;margin-top: 15px">
            <p style="line-height:35px;background-color:rgba(203,157,34,0.76);font-size: 20px;width: 100%;color: Window">产品详情</p>
            <table width="100%" border="0" style="line-height: 30px">
                <tr>
                    <td></td>
                    <td colspan="2" width="40%" style="color:red; font-size: 14px">{{licai.mpTitle}}</td>
                </tr>
                <tr>
                    <td rowspan="4"  style="width: 20%;text-align: center"> <el-image style="width: 100px;height: 100px" :src="licai.url" fit="fill"></el-image></td>
                    <td width="40%">产品名: <span style="font-weight: 600">{{licai.bdname}}</span></td>
                    <td width="40%">收益产生周期：{{licai.zhouqi}}个月</td>
                </tr>

                <tr>
                    <td width="40%">类型: {{licai.type}}</td>
                    <td width="40%">年化利率：{{licai.lixi}}%</td>
                </tr>
                <tr>
                    <td colspan="2" width="40%">
                        起购金额：{{licai.qigou}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2" width="40%"><h3>产品介绍</h3>
                        <p style="line-height: 30px;margin-left: 20px;font-size: 15px;color: #8c939d">
                            {{licai.mpBody}}
                        </p>
                    </td>
                </tr>
                <tr>

                    <td colspan="3" style="text-align: right"><el-button style="margin-right: 5%;margin-top: 20px" type="primary" @click="tolicaichlden">买入</el-button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Licai_info",
        data(){
          return{
              licai:{
                  mpTitle:'',
                  url:'',
                  bdname:'',
                  lixi:'',
                  zhouqi:'',
                  type:'',
                  mpBody:'',
                  qigou:'',
              },
              gund:[],
              chenjiao:[0,0,0,0,0,0,0],
              size:0,
              activeIndex: 0,
              intnum: undefined
          }
        },
        computed: {
            top() {
                return -this.activeIndex * 30 + 'px';
            }
        },

        created() {
            this.axios({url:'http://localhost:10086/moneypro_info',method:"post",withCredentials:true,data:{mpid:this.$route.query.mpid}}).then(res=>{
                this.licai= {
                    mpTitle:res.data.mpTitle,
                    url:"http://localhost:10086/img/"+res.data.mppath,
                    bdname:res.data.mpname,
                    lixi:res.data.income,
                    zhouqi:res.data.zhouqi,
                    type:res.data.mptype,
                    mpBody:res.data.mpBody,
                    qigou:res.data.minMoney,
                };
            })
            this.ScrollUp();
        },
        mounted(){
            scroll(0,0)
            this.axios({url:'http://localhost:10086/moneypro_gund',method:"post",withCredentials:true,data:{mpid:this.$route.query.mpid}}).then(res=>{
                this.gund=res.data.mygund;
                for (let i = 0; i <res.data.chenjiao.length ; i++) {
                    this.chenjiao[i]=res.data.chenjiao[i];
                    if(res.data.chenjiao[i]==""||res.data.chenjiao[i]==null){
                        this.chenjiao[i]=0
                    }
                }
                //this.chenjiao=res.data.chenjiao;
                    // 基于准备好的dom，初始化echarts实例
                    let myChart = this.$echarts.init(document.getElementById('myChart'))
                    let option={
                        title: {text: '近七天购买量'},
                        xAxis: {
                            type: 'category',
                            data: ['六天前', '五天前', '四天前', '三天前', '二天前', '昨天','今天']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: this.chenjiao,
                            type: 'line',
                            smooth: true
                        }]
                    };
                    //alert(this.chenjiao)
                    myChart.setOption(option);
            })
        },
        methods: {
            tolicaichlden(){
                if(this.$store.state.user.uid>0){
                    this.$router.push({path: '/licai_childen', query: {mpid:this.$route.query.mpid,zhouqi:this.licai.zhouqi,minmoney:this.licai.qigou,bname:this.licai.bdname}});
                }else {
                    this.$alert('请先登录', '提示', {
                        type: 'warning',
                        confirmButtonText: '确定',
                        callback: action => {

                        }
                    });
                }

            },
            ScrollUp() {
                this.intnum=setInterval(_ => {
                    if(this.activeIndex < this.gund.length) {
                        this.gund.push(this.gund[this.activeIndex ])
                        this.activeIndex += 1;

                    } else {
                        this.activeIndex = 0;
                    }
                }, 2000);
            },
            beforeDestroy() {
                clearInterval(this.intnum);
            },
        }
    }
</script>

<style scoped>
    .scroll-wrap {
        height: 150px;
        overflow: hidden;
    }

    .scroll-content {
        position: relative;
        transition: top 0.5s;
    }

    .scroll-content p {
        line-height: 50px;
        text-align: center;
    }
</style>
