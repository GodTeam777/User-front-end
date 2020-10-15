<template>
    <div style="height: 1000px;">
        <div style="width: 70%;height: 350px;border: 0px solid red;margin-left: 15%;margin-top: 20px">
            <p style="background-color:rgba(22,98,188,0.7);font-size: 25px;width: 14%;text-align: center;color: Window">产品分类</p>
            <div style="width: 100%;height: 304px;border-top: 3px solid rgba(22,98,188,0.7);border-left: 1px solid rgba(22,98,188,0.7);border-right: 1px solid rgba(22,98,188,0.7);">
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px">产品类型：</span>
                    <el-radio style="margin-left: 7%" v-model="type" label="" border size="small" @change="selectbypage(1)">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="type" label="信用贷" border size="small" @change="selectbypage(1)">信用贷</el-radio>
                    <el-radio style="margin-left: 0%" v-model="type" label="抵押贷" border size="small" @change="selectbypage(1)">抵押贷</el-radio>
                    <el-radio style="margin-left: -0%" v-model="type" label="质押贷" border size="small" @change="selectbypage(1)">质押贷</el-radio>
                    <el-radio style="margin-left: 0%" v-model="type" label="担保贷" border size="small" @change="selectbypage(1)">担保贷</el-radio>
                    <el-radio style="margin-left: 0%" v-model="type" label="票据贴现" border size="small" @change="selectbypage(1)">票据贴现</el-radio>
                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px">贷款周期：</span>
                    <el-radio style="margin-left: 7%" v-model="big_Date" label="" border size="small" @change="selectbypage(1)">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="1" border size="small" @change="selectbypage(1)">1个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="3" border size="small" @change="selectbypage(1)">3个月</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="6" border size="small" @change="selectbypage(1)">6个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="12" border size="small" @change="selectbypage(1)">12个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="24" border size="small" @change="selectbypage(1)">24个月</el-radio>
                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px">年化利率：</span>
                    <el-radio style="margin-left: 7%" v-model="big_lilv" label="" border size="small" @change="selectbypage(1)">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_lilv" label="0.1-6" border size="small" @change="selectbypage(1)">6%以下</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_lilv" label="6-8" border size="small" @change="selectbypage(1)">6%-8%</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_lilv" label="8-10" border size="small" @change="selectbypage(1)">8%-10%</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_lilv" label="10-12" border size="small" @change="selectbypage(1)">10%-12%</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_lilv" label="12-100" border size="small" @change="selectbypage(1)">12%以上</el-radio>
                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76); height: 120px">
                    <span style="margin-left: 20px">贷款规模：</span>
                    <el-radio style="margin-left: 7%" v-model="big_ed" label="" border size="small" @change="selectbypage(1)">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_ed" label="1-1000000" border size="small" @change="selectbypage(1)">100万以下</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="1000000-2000000" border size="small" @change="selectbypage(1)">100万-200万</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_ed" label="2000000-3000000" border size="small" @change="selectbypage(1)">200万-300万</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="3000000-5000000" border size="small" @change="selectbypage(1)">300万-500万</el-radio>
                    <el-radio style="margin-left: 17.5%" v-model="big_ed" label="5000000-10000000" border size="small" @change="selectbypage(1)">500万-1000万</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="10000000-100000000" border size="small" @change="selectbypage(1)">1000万以上</el-radio>
                 </p>
            </div>
        </div>

        <div style="width: 70%;border: 0px solid red;margin-left: 15%">
            <p style="background-color:rgba(22,98,188,0.7);font-size: 25px;width: 100%;color: Window;line-height: 40px">
                <span style="margin-left: 2%">融资产品</span>
            </p>
                <div v-for="dai in bigdai" style="float: left;font-size: 14px;margin-top: 18px;width: 100%">
                    <table width="100%" border="0">
                        <tr>
                            <td rowspan="4"  style="width: 20%;text-align: center"> <el-image style="width: 100px;height: 100px" :src="dai.url" fit="fill"></el-image></td>
                            <td width="40%">产品名: <span style="font-weight: 600">{{dai.bdname}}</span></td>
                            <td width="40%">放款周期：{{dai.bddate}}个月</td>
                            <td rowspan="4"><el-button type="primary" @click="toinfo(dai.bdid)">查看详情</el-button></td>
                        </tr>
                        <tr><td>放款金额：{{dai.small_money}}-{{dai.big_money}}</td>
                            <td>利率（年利化率）：<span style="color: red">{{dai.interest}}%</span></td></tr>
                        <tr>
                            <td colspan="2">
                                贷款条件：
                                <el-tag v-if="dai.bigvlidateidcard==1" size="mini" style="margin-left: 5px">身份认证</el-tag>
                                <el-tag v-if="dai.bigvlidatexueli==1" size="mini" style="margin-left: 5px">学历认证</el-tag>
                                <el-tag v-if="dai.bigvlidatecheliang==1" size="mini" style="margin-left: 5px">车辆认证</el-tag>
                                <el-tag v-if="dai.bigvlidatehome==1" size="mini" style="margin-left: 5px">房屋认证</el-tag>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                产品描述:
                                <p style="color: #8c939d">{{dai.bigdaiTitle}}</p>
                            </td>
                        </tr>
                    </table>
                    <hr style="width:99%;background-color: yellow"/>
                </div>
                <div style="width: 100%;float: left;text-align: center;margin-top: 20px">
                    <el-pagination
                            @size-change="selectbypageSize"
                            @current-change="selectbypage"
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
        name: "BigDai",
        created(){
          this.selectbypage(1);
        },
        methods:{
            toinfo(val){
                this.$router.push({path: '/bigDai_info', query: {bdid:val}});
            },
            selectbypage(val){
                console.log("发起请求获得大额贷款信息：")
                this.pageNo=val;
                this.axios({url:'http://localhost:10086/bigdaiall_home',method:"post",
                    withCredentials:true,
                    data:{
                    pageNo:this.pageNo,
                    pageSize:this.pageSize,
                    seach_type:this.type,
                    seach_date:this.big_Date,
                    seach_lilv1:this.big_lilv.split('-')[0],
                    seach_lilv2:this.big_lilv.split('-')[1],
                    seach_money1:this.big_ed.split('-')[0],
                    seach_money2:this.big_ed.split('-')[1]}
                    }).then(res=>{
                    var result=new Array();
                    for (var i = 0; i <res.data.data.length ; i++) {
                        var chil={
                            bdname:res.data.data[i].big.bdname,
                            interest:res.data.data[i].big.interest,
                            bddate:res.data.data[i].big.bddate,
                            small_money:res.data.data[i].big.smallMoney,
                            big_money:res.data.data[i].big.bigMoney,
                            bigdaiTitle:res.data.data[i].big.bigdaiTitle,
                            bigvlidateidcard:res.data.data[i].vlidate.idcard,
                            bigvlidatexueli:res.data.data[i].vlidate.xueli,
                            bigvlidatecheliang:res.data.data[i].vlidate.cheliang,
                            bigvlidatehome:res.data.data[i].vlidate.home,
                            bdid:res.data.data[i].big.bdid,
                            url: "http://localhost:10086/img/"+res.data.data[i].big.bdpath
                        }
                        result.push(chil)
                    }
                    this.total=res.data.totalRecords
                    this.bigdai=result;
                });
            },
            selectbypageSize(val){
                this.pageNo=1;
                this.pageSize=val;
                console.log("发起请求获得大额贷款信息：")
                this.axios({url:'http://localhost:10086/bigdaiall_home',method:"post",
                    withCredentials:true,
                    data:{
                        pageNo:this.pageNo,
                        pageSize:this.pageSize,
                        seach_type:this.type,
                        seach_date:this.big_Date,
                        seach_lilv1:this.big_lilv.split('-')[0],
                        seach_lilv2:this.big_lilv.split('-')[1],
                        seach_money1:this.big_ed.split('-')[0],
                        seach_money2:this.big_ed.split('-')[1]}
                }).then(res=>{
                    var result=new Array();
                    for (var i = 0; i <res.data.data.length ; i++) {
                        var chil={
                            bdname:res.data.data[i].big.bdname,
                            interest:res.data.data[i].big.interest,
                            bddate:res.data.data[i].big.bddate,
                            small_money:res.data.data[i].big.smallMoney,
                            big_money:res.data.data[i].big.bigMoney,
                            bigdaiTitle:res.data.data[i].big.bigdaiTitle,
                            bigvlidateidcard:res.data.data[i].vlidate.idcard,
                            bigvlidatexueli:res.data.data[i].vlidate.xueli,
                            bigvlidatecheliang:res.data.data[i].vlidate.cheliang,
                            bigvlidatehome:res.data.data[i].vlidate.home,
                            bdid:res.data.data[i].big.bdid,
                            url: "http://localhost:10086/img/"+res.data.data[i].big.bdpath
                        }
                        result.push(chil)
                    }
                    this.total=res.data.totalRecords
                    this.bigdai=result;
                });
            },
        },
        data(){
            return{
                pageNo:1,
                pageSize:4,
                total:0,
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                type:'',
                big_Date:'',
                big_lilv:'',
                big_ed:'',
                bigdai:[
                ]
            }
        }
    }
</script>

<style scoped>

</style>
