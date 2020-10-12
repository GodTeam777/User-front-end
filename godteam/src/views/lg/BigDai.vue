<template>
    <div style="height: 1000px;">
        <div style="width: 70%;height: 350px;border: 0px solid red;margin-left: 15%;margin-top: 20px">
            <p style="background-color:rgba(22,98,188,0.7);font-size: 25px;width: 14%;text-align: center;color: Window">产品分类</p>
            <div style="width: 100%;height: 304px;border-top: 3px solid rgba(22,98,188,0.7);border-left: 1px solid rgba(22,98,188,0.7);border-right: 1px solid rgba(22,98,188,0.7);">
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px">产品类型：</span>
                    <el-radio style="margin-left: 7%" v-model="type" label="0" border size="small">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="type" label="信用贷" border size="small">信用贷</el-radio>
                    <el-radio style="margin-left: 0%" v-model="type" label="抵押贷" border size="small">抵押贷</el-radio>
                    <el-radio style="margin-left: -0%" v-model="type" label="质押贷" border size="small">质押贷</el-radio>
                    <el-radio style="margin-left: 0%" v-model="type" label="担保贷" border size="small">担保贷</el-radio>
                    <el-radio style="margin-left: 0%" v-model="type" label="票据贴现" border size="small">票据贴现</el-radio>
                    {{this.type}}
                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px">贷款周期：</span>
                    <el-radio style="margin-left: 7%" v-model="big_Date" label="0" border size="small">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="1" border size="small">1个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="3" border size="small">3个月</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="6" border size="small">6个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="12" border size="small">12个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="24" border size="small">24个月</el-radio>
                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px">年化利率：</span>
                    <el-radio style="margin-left: 7%" v-model="big_lilv" label="0" border size="small">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_lilv" label="0-6" border size="small">6%以下</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_lilv" label="6-8" border size="small">6%-8%</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_lilv" label="8-10" border size="small">8%-10%</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_lilv" label="10-12" border size="small">10%-12%</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_lilv" label="12" border size="small">12%以上</el-radio>
                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76); height: 120px">
                    <span style="margin-left: 20px">贷款规模：</span>
                    <el-radio style="margin-left: 7%" v-model="big_ed" label="0" border size="small">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_ed" label="0-100" border size="small">100万以下</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="100-200" border size="small">100万-200万</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_ed" label="200-300" border size="small">200万-300万</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="300-500" border size="small">300万-500万</el-radio>
                    <el-radio style="margin-left: 17.5%" v-model="big_ed" label="500-1000" border size="small">500万-1000万</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="1000" border size="small">1000万以上</el-radio>
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
                            <td rowspan="4"><el-button type="primary" @click="toinfo">查看详情</el-button></td>
                        </tr>
                        <tr><td>放款金额：{{dai.small_money}}-{{dai.big_money}}万</td>
                            <td>利率（年利化率）：<span style="color: red">{{dai.interest}}%</span></td></tr>
                        <tr>
                            <td colspan="2">
                                产品描述:
                                <p style="color: #8c939d">金融信贷服务品牌,即现度金融旗下产品,运工智能和大数据风控技术,资金安全保障高,操作流程简单</p>
                            </td>
                        </tr>
                    </table>
                    <hr style="width:99%;background-color: yellow"/>
                </div>
                <div style="width: 100%;float: left;text-align: center;margin-top: 20px">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "BigDai",
        methods:{
            toinfo(){
                this.$router.push({path: '/bigDai_info', params: {}});
            }
        },
        data(){
            return{
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                type:'0',
                big_Date:'0',
                big_lilv:'0',
                big_ed:'0',
                bigdai:[
                    {
                        bdname:"中行信用贷",
                        interest:"0.03",
                        bddate:"12",
                        small_money:"10",
                        big_money:"50",
                        url: require("../../assets/yinhang/中国银行.jpg")
                    },
                    {
                        bdname:"农行信用贷",
                        interest:"0.05",
                        bddate:"12",
                        small_money:"20",
                        big_money:"100",
                        url: require("../../assets/yinhang/农业银行.jpg")
                    },
                    {
                        bdname:"农行优惠贷",
                        interest:"0.06",
                        bddate:"24",
                        small_money:"50",
                        big_money:"200",
                        url: require("../../assets/yinhang/农业银行.jpg")
                    },{
                        bdname:"中行石油贷",
                        interest:"0.03",
                        bddate:"12",
                        small_money:"10",
                        big_money:"50",
                        url: require("../../assets/yinhang/中国银行.jpg")
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
