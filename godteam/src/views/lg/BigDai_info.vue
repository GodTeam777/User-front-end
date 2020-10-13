<template>
    <div style="height: 700px">
        <div style="width: 60%;height: 350px;border: 0px solid red;margin-left: 15%;margin-top: 20px;float: left">
            <p style="line-height:35px;background-color:rgba(22,98,188,0.7);font-size: 20px;width: 15%;text-align: center;color: Window">产品详情</p>
            <div style="width: 100%;height: 304px;border:1px solid rgba(203,157,34,0.76);">
                <h3 style="margin-left: 20px"><span style="font-size: 30px"></span>产品描述</h3>
                <p style="line-height: 30px;margin-left: 20px">
                    {{bigdai.bigdaiTitle}}
                </p>
                <h3 style="margin-left: 20px">产品详情</h3>
                <p style="line-height: 30px;margin-left: 20px">
                    {{bigdai.bigdaiBody}}
                </p>
            </div>
        </div>
        <div  style="margin-left: 3%;width: 15%;height: 250px;border: 1px solid rgba(203,157,34,0.76);float: left;margin-top: 55px">
            <p style="line-height:35px;background-color:rgba(203,157,34,0.76);font-size: 20px;width: 100%;text-align: center;color: Window">产品成功申请(<span style="color: red">{{size}}</span>)条</p>
            <div class="scroll-wrap" >
                <ul class="scroll-content" :style="{ top }">
                    <li style="line-height: 30px;margin-left: 10px;font-size: 13px;color: #8c939d" v-for="item in prizeList" v-bind:key="item.id"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);font-size: 15px"></span><a>{{item.name}}成功贷款</a><i style="color: red">{{item.money}}</i>元</li >
                </ul>

            </div>
        </div>
        <div style="margin-left: 15%;width: 60%;height: 250px;border: 1px solid rgba(203,157,34,0.76);float: left;margin-top: 15px">
            <p style="line-height:35px;background-color:rgba(203,157,34,0.76);font-size: 20px;width: 100%;text-align: center;color: Window">立即申请</p>
            <table width="100%" border="0" style="line-height: 30px">
                <tr>
                    <td rowspan="4"  style="width: 20%;text-align: center"> <el-image style="width: 100px;height: 100px" :src="bigdai.url" fit="fill"></el-image></td>
                    <td width="40%">产品名: <span style="font-weight: 600">{{bigdai.bdname}}</span></td>
                    <td width="40%">放款周期：{{bigdai.bddate}}个月</td>
                </tr>
                <tr><td>放款金额：{{bigdai.small_money}}-{{bigdai.big_money}}</td>
                    <td>利率（年利化率）：<span style="color: red">{{bigdai.interest}}%</span></td></tr>
                <tr>
                    <td colspan="2">
                        贷款条件：
                        <el-tag v-if="bigdai.bigvlidateidcard==1" size="mini" style="margin-left: 5px">身份认证</el-tag>
                        <el-tag v-if="bigdai.bigvlidatexueli==1" size="mini" style="margin-left: 5px">学历认证</el-tag>
                        <el-tag v-if="bigdai.bigvlidatecheliang==1" size="mini" style="margin-left: 5px">车辆认证</el-tag>
                        <el-tag v-if="bigdai.bigvlidatehome==1" size="mini" style="margin-left: 5px">房屋认证</el-tag>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        产品描述:
                        <p style="color: #8c939d">{{bigdai.bigdaiTitle}}</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: right"><el-button type="primary" @click="tobigdaichlden">申请</el-button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>


    export default {

        name: "BigDai_info",
        muonted(){

        },
        created(){
            this.bigdaiinfo();
            this.ScrollUp();
            this.gundong();
        },
        computed: {
            top() {
                return -this.activeIndex * 30 + 'px';
            }
        },
        methods:{
            tobigdaichlden(){
                var is='';
                if(this.bigdai.bigvlidateidcard==1){
                    is=true;
                }
                this.axios({url:'http://localhost:10086/user_Renzhen',method:"get",
                        withCredentials:true}).then(res=>{
                    if (this.bigdai.bigvlidatexueli==1){
                        if(is)
                        if(res.data.edu!=null&&res.data.edu.status==2){
                            //alert("xueli")
                            is=true;
                        }else{
                            //alert("meitongg")
                            is=false;
                        }
                    }
                    if(this.bigdai.bigvlidatecheliang==1){
                        if(is)
                        if(res.data.car!=null&&res.data.car.status==2){
                            //alert("che")
                            is=true;
                        }else{
                            //alert("meitongg")
                            is=false;
                            //alert(is)
                        }
                    }
                    if(this.bigdai.bigvlidatehome==1){
                        if(is)
                        if(res.data.home!=null&&res.data.home.status==2){
                            //alert("home")
                            is=true;
                        }else{
                            is=false;//alert("home"+"no")
                        }
                    }
                    //alert(is)
                    if(is) {
                        this.$router.push({path: '/big_Dai_chlden', query: {interest:this.bigdai.interest,bddate:this.bigdai.bddate,bid:this.$route.query.bdid,small_money:this.bigdai.small_money,big_money:this.bigdai.big_money}});
                    }else{
                        //("信息未满足条件，请前往认证")
                        this.$confirm('个人信息未满足条件，请前往认证, 是否继续?', '提示', {
                            confirmButtonText: '前往认证',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$router.push({path: '/attestation_education', query: {}});
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '取消操作'
                            });
                        });

                    }
                }).catch(res=>{
                    this.$alert('请先登录', '提示', {
                        type: 'warning',
                        confirmButtonText: '确定',
                        callback: action => {

                        }
                    });
                })

            },
            gundong(){
                this.axios({url:'http://localhost:10086/gundong_big',method:"post",
                    withCredentials:true,
                    data:{
                        bid:this.$route.query.bdid
                    }}).then(res=>{
                        this.size=res.data.length;
                    this.prizeList=res.data;
                })
            },
            bigdaiinfo(){
                this.axios({url:'http://localhost:10086/bigdaiall_info',method:"post",
                    withCredentials:true,
                    data:{
                        bid:this.$route.query.bdid
                    }}).then(res=>{
                    this.bigdai={
                        bdname:res.data.big.bdname,
                        interest:res.data.big.interest,
                        bddate:res.data.big.bddate,
                        small_money:res.data.big.smallMoney,
                        big_money:res.data.big.bigMoney,
                        bigdaiTitle:res.data.big.bigdaiTitle,
                        bigvlidateidcard:res.data.vlidate.idcard,
                        bigvlidatexueli:res.data.vlidate.xueli,
                        bigvlidatecheliang:res.data.vlidate.cheliang,
                        bigvlidatehome:res.data.vlidate.home,
                        bdid:res.data.big.bdid,
                        url: "http://localhost:10086/img/"+res.data.big.bdpath,
                        bigdaiTitle:res.data.big.bigdaiTitle,
                        bigdaiBody:res.data.big.bigdaiBody
                    }
                });
                },
            ScrollUp() {
                setInterval(_ => {
                    if(this.activeIndex < this.prizeList.length) {
                        this.prizeList.push(this.prizeList[this.activeIndex ])
                        this.activeIndex += 1;

                    } else {
                        this.activeIndex = 0;
                    }
                }, 2000);
            },
            beforeDestroy() {
                clearInterval(this.intnum);
            },
                },
        data(){
            return{
                bigdai:
                    {
                        bdname:'',
                        interest:'',
                        bddate:'',
                        small_money:'',
                        big_money:'',
                        bigdaiTitle:'',
                        bigvlidateidcard:'',
                        bigvlidatexueli:'',
                        bigvlidatecheliang:'',
                        bigvlidatehome:'',
                        bdid:'',
                        url: '',
                        bigdaiTitle:'',
                        bigdaiBody:'',
                    },
                size:0,
                prizeList: [
                ],
                activeIndex: 0,
                intnum: undefined
            }
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
