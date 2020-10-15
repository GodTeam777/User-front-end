<template>
    <div style="height: 1250px;">
        <div style="width: 70%;height: 350px;border: 0px solid red;margin-left: 15%;margin-top: 20px">
            <p style="background-color:rgba(22,98,188,0.7);font-size: 25px;width: 14%;text-align: center;color: Window">产品分类</p>
            <div style="width: 100%;height: 304px;border-top: 3px solid rgba(22,98,188,0.7);border-left: 1px solid rgba(22,98,188,0.7);border-right: 1px solid rgba(22,98,188,0.7);">
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px">产品类型：</span>
                    <el-radio style="margin-left: 7%" v-model="type" label="" border size="small" @change="getallmoneypro(1)">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="type" label="定期" border size="small" @change="getallmoneypro(1)">定期</el-radio>
                    <el-radio style="margin-left: 0%" v-model="type" label="活期" border size="small" @change="getallmoneypro(1)">活期</el-radio>

                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px;">收益周期：</span>
                    <el-radio style="margin-left: 7%" v-model="big_Date" label="" border size="small" @change="getallmoneypro(1)">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="0" border size="small" @change="getallmoneypro(1)">每天</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="1" border size="small" @change="getallmoneypro(1)">1个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="3" border size="small" @change="getallmoneypro(1)">3个月</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="6" border size="small" @change="getallmoneypro(1)">6个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="12" border size="small" @change="getallmoneypro(1)">12个月以上</el-radio>
                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px">年化利率：</span>
                    <el-radio style="margin-left: 7%" v-model="big_lilv" label="" border size="small" @change="getallmoneypro(1)">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_lilv" label="0-6" border size="small" @change="getallmoneypro(1)">6%以下</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_lilv" label="6-8" border size="small" @change="getallmoneypro(1)">6%-8%</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_lilv" label="8-10" border size="small" @change="getallmoneypro(1)">8%-10%</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_lilv" label="10-12" border size="small" @change="getallmoneypro(1)">10%-12%</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_lilv" label="12-100" border size="small" @change="getallmoneypro(1)">12%以上</el-radio>
                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76); height: 120px">
                    <span style="margin-left: 20px">最低买入：</span>
                    <el-radio style="margin-left: 7%" v-model="big_ed" label="" border size="small" @change="getallmoneypro(1)">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_ed" label="1" border size="small" @change="getallmoneypro(1)">1元以上起购</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="10000" border size="small" @change="getallmoneypro(1)">10000元以上起购</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_ed" label="20000" border size="small" @change="getallmoneypro(1)">20000元以上起购</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="30000" border size="small" @change="getallmoneypro(1)">30000元以上起购</el-radio>
                    <el-radio style="margin-left: 17.5%" v-model="big_ed" label="500000" border size="small" @change="getallmoneypro(1)">50000元以上起购</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="100000" border size="small" @change="getallmoneypro(1)">100000元以上起购</el-radio>
                </p>
            </div>
        </div>

        <div style="width: 70%;border: 0px solid red;margin-left: 15%">
            <p style="background-color:rgba(22,98,188,0.7);font-size: 25px;width: 100%;color: Window;line-height: 40px">
                <span style="margin-left: 2%">理财产品</span>
            </p>
            <div v-for="licai in licais" style="float: left;font-size: 14px;margin-top: 18px;width: 100%;border-radius:10px 10px 10px 10px; box-shadow:#F8F8FF 2px 2px 5px 5px">
                <table width="100%" border="0" style="line-height: 30px">
                    <tr>
                        <td rowspan="4"  style="width: 20%;text-align: center"> <el-image style="width: 100px;height: 100px" :src="licai.url" fit="fill"></el-image></td>
                        <td colspan="2" width="40%" style="color:red; font-size: 14px">{{licai.lctitle}}</td>
                    </tr>
                    <tr>
                        <td width="40%">产品名: <span style="font-weight: 600">{{licai.lcname}}</span></td>
                        <td width="40%">收益产生周期：{{licai.lcperiod}}个月</td>
                    </tr>

                    <tr>
                        <td width="40%">类型: {{licai.lctype}}</td>
                        <td width="40%">年化利率：{{licai.lcrate}}%</td>
                    </tr>
                    <tr>
                        <td>最低买入量：{{licai.samllmoney}}</td>
                        <td colspan="3" style="text-align: right"><el-button style="margin-right: 5%;margin-top: 10px" type="primary" @click="toinfo(licai.mpid)">查看详情</el-button></td>
                    </tr>
                </table>
            </div>
            <div style="width: 100%;float: left;text-align: center;margin-top: 20px">
                <el-pagination
                        @size-change="selectbypageSize"
                        @current-change="getallmoneypro"
                        :current-page.sync="pageNo"
                        :page-sizes="[2, 4, 6, 8]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Licai",
        created(){
            this.getallmoneypro(1)
        },
        methods:{
            getallmoneypro(val){
                console.log("发起请求获得理财信息：")
                this.pageNo=val;
                this.axios({url:'http://localhost:10086/moneypro_home',method:"post",withCredentials:true,
                    data:{
                    seach_mptype:this.type,
                    seach_lilv1:this.big_lilv.split('-')[0],
                    seach_lilv2:this.big_lilv.split('-')[1],
                    seach_money:this.big_ed,
                    seach_zhouqi:this.big_Date,
                    pageNo:this.pageNo,pageSize:this.pageSize}}).then(res=>{
                    var result=new Array();
                    for (var i = 0; i <res.data.data.length ; i++) {
                        var chil={
                            lcname:res.data.data[i].mpname,
                            lctype:res.data.data[i].mptype,
                            lcperiod:res.data.data[i].zhouqi,
                            lcrate:res.data.data[i].income,
                            lctitle:res.data.data[i].mpTitle,
                            mpid:res.data.data[i].mpid,
                            samllmoney:res.data.data[i].minMoney,
                            url: "http://localhost:10086/img/"+res.data.data[i].mppath
                        }
                        result.push(chil)
                    }
                    this.total=res.data.totalRecords;
                    this.licais=result;
                })
            },
            selectbypageSize(val){
                this.pageNo=1;
                this.pageSize=val;
                this.axios({url:'http://localhost:10086/moneypro_home',method:"post",withCredentials:true,
                    data:{
                        seach_mptype:this.type,
                        seach_lilv1:this.big_lilv.split('-')[0],
                        seach_lilv2:this.big_lilv.split('-')[1],
                        seach_money:this.big_ed,
                        seach_zhouqi:this.big_Date,
                        pageNo:this.pageNo,pageSize:this.pageSize}}).then(res=>{
                    var result=new Array();
                    for (var i = 0; i <res.data.data.length ; i++) {
                        var chil={
                            lcname:res.data.data[i].mpname,
                            lctype:res.data.data[i].mptype,
                            lcperiod:res.data.data[i].zhouqi,
                            lcrate:res.data.data[i].income,
                            lctitle:res.data.data[i].mpTitle,
                            mpid:res.data.data[i].mpid,
                            samllmoney:res.data.data[i].minMoney,
                            url: "http://localhost:10086/img/"+res.data.data[i].mppath
                        }
                        result.push(chil)
                    }
                    this.total=res.data.totalRecords;
                    this.licais=result;
                })
            },
            toinfo(val){
                this.$router.push({path: '/licai_info', query: {mpid:val}});
            }
        },
        data(){
            return{
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                pageNo:1,
                pageSize:4,
                total:0,
                type:'',
                big_Date:'',
                big_lilv:'',
                big_ed:'',
                licais:[
                ]
            }
        }
    }
</script>

<style scoped>

</style>
