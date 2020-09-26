<template>
    <div style="height: 700px">
        <div style="width: 60%;height: 350px;border: 0px solid red;margin-left: 15%;margin-top: 20px;float: left">
            <p style="line-height:35px;background-color:rgba(22,98,188,0.7);font-size: 20px;width: 15%;text-align: center;color: Window">产品详情</p>
            <div style="width: 100%;height: 304px;border:1px solid rgba(203,157,34,0.76);">
                <h3 style="margin-left: 20px"><span style="font-size: 30px"></span>产品描述</h3>
                <p style="line-height: 30px;margin-left: 20px">
                    金融信贷服务品牌,即现度金融旗下产品,运工智能和大数据风控技术,资金安全保障高,操作流程简单
                </p>
                <h3 style="margin-left: 20px">产品描述</h3>
                <p style="line-height: 30px;margin-left: 20px">
                    大额贷款是超过一致限额的贷款。其标准由联邦国民抵押贷款协会（房利美）和联邦住宅抵押贷款公司（房地美）设定。对于贷款提供者而言，大额贷款风险较高，因此其利率也较高。这些贷款有贷款余额限制。一户至四户家庭的住宅的最高贷款金额每年根据联邦住房金融局公布的平均住房价格（包括新建和原有住房）变化率而变动。这些贷款限额被称为一致限额。
                </p>
            </div>
        </div>
        <div style="margin-left: 3%;width: 15%;height: 250px;border: 1px solid rgba(203,157,34,0.76);float: left;margin-top: 55px">
            <p style="line-height:35px;background-color:rgba(203,157,34,0.76);font-size: 20px;width: 100%;text-align: center;color: Window">产品成功申请(<span style="color: red">3</span>)人</p>
            <p style="line-height: 40px;margin-left: 10px"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);"></span>张三成功申请<span style="color: red">50</span>万元</p>
            <p style="line-height: 40px;margin-left: 10px"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);"></span>王五成功申请<span style="color: red">150</span>万元</p>
            <p style="line-height: 40px;margin-left: 10px"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);"></span>马六成功申请<span style="color: red">100</span>万元</p>
        </div>

        <div style="margin-left: 15%;width: 60%;height: 250px;border: 1px solid rgba(203,157,34,0.76);float: left;margin-top: 15px">
            <p style="line-height:35px;background-color:rgba(203,157,34,0.76);font-size: 20px;width: 100%;text-align: center;color: Window">立即申请</p>
            <table width="100%" border="0" style="line-height: 30px">
                <tr>
                    <td rowspan="4"  style="width: 20%;text-align: center"> <el-image style="width: 100px;height: 100px" :src="bigdai.url" fit="fill"></el-image></td>
                    <td width="40%">产品名: <span style="font-weight: 600">{{bigdai.bdname}}</span></td>
                    <td width="40%">放款周期：{{bigdai.bddate}}个月</td>
                </tr>
                <tr><td>放款金额：{{bigdai.small_money}}-{{bigdai.big_money}}万</td>
                    <td>利率（年利化率）：<span style="color: red">{{bigdai.interest}}%</span></td></tr>
                <tr>
                    <td colspan="2">
                        产品描述:
                        <p style="color: #8c939d">金融信贷服务品牌,即现度金融旗下产品,运工智能和大数据风控技术,资金安全保障高,操作流程简单</p>
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
        methods:{
            tobigdaichlden(){
                this.$router.push({path: '/big_Dai_chlden', params: {}});
            }
        },
        data(){
            return{
                bigdai:
                    {
                        bdname:"中行信用贷",
                        interest:"0.03",
                        bddate:"12",
                        small_money:"10",
                        big_money:"50",
                        url: require("../../assets/中国银行.jpg")
                    }
            }
        }
    }
</script>

<style scoped>

</style>
