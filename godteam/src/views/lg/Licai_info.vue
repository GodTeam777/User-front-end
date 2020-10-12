<template>
    <div style="height: 800px">
        <div style="float: left;width: 60%;height: 350px;border: 0px solid red;margin-left: 15%;margin-top: 20px;">
            <p style="line-height:35px;background-color:rgba(22,98,188,0.7);font-size: 20px;width: 100%;text-align: center;color: Window">天天盈</p>
            <div id="myChart" :style="{width: '100%', height: '300px'}">
            </div>
        </div>
        <div style="margin-left: 3%;width: 15%;height: 250px;border: 1px solid rgba(203,157,34,0.76);float: left;margin-top: 20px">
            <p style="line-height:35px;background-color:rgba(203,157,34,0.76);font-size: 20px;width: 100%;text-align: center;color: Window">产品实时购买动态</p>
            <p style="line-height: 30px;margin-left: 10px;font-size: 13px;color: #8c939d"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);font-size: 15px"></span>张三成功买入<span style="color: red">10000</span>元</p>
            <p style="line-height: 30px;margin-left: 10px;font-size: 13px;color: #8c939d"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);font-size: 15px"></span>王五成功买入<span style="color: red">20000</span>元</p>
            <p style="line-height: 30px;margin-left: 10px;font-size: 13px;color: #8c939d"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);font-size: 15px"></span>马六成功买入<span style="color: red">30000</span>元</p>
            <p style="line-height: 30px;margin-left: 10px;font-size: 13px;color: #8c939d"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);font-size: 15px"></span>马六成功买入<span style="color: red">30000</span>元</p>
            <p style="line-height: 30px;margin-left: 10px;font-size: 13px;color: #8c939d"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);font-size: 15px"></span>马六成功买入<span style="color: red">30000</span>元</p>
            <p style="line-height: 30px;margin-left: 10px;font-size: 13px;color: #8c939d"><span class="el-icon-caret-right" style="color: rgba(251,138,13,0.89);font-size: 15px"></span>马六成功买入<span style="color: red">30000</span>元</p>
        </div>
        <div style="margin-left: 15%;width: 78%;height: 350px;border: 1px solid rgba(203,157,34,0.76);float: left;margin-top: 15px">
            <p style="line-height:35px;background-color:rgba(203,157,34,0.76);font-size: 20px;width: 100%;color: Window">产品详情</p>
            <table width="100%" border="0" style="line-height: 30px">
                <tr>
                    <td></td>
                    <td colspan="2" width="40%" style="color:red; font-size: 14px">1万元起购 | 1元追加 | 9：00-15：00实时交易</td>
                </tr>
                <tr>
                    <td rowspan="4"  style="width: 20%;text-align: center"> <el-image style="width: 100px;height: 100px" :src="licai.url" fit="fill"></el-image></td>
                    <td width="40%">产品名: <span style="font-weight: 600">{{licai.bdname}}</span></td>
                    <td width="40%">收益产生周期：每天</td>
                </tr>

                <tr>
                    <td width="40%">类型: 活期</td>
                    <td width="40%">年化利率：{{licai.lixi}}%</td>
                </tr>
                <tr>
                    <td colspan="2" width="40%"><h3>产品介绍</h3>
                        <p style="line-height: 30px;margin-left: 20px;font-size: 15px;color: #8c939d">
                            大额贷款是超过一致限额的贷款。其标准由联邦国民抵押贷款协会（房利美）和联邦住宅抵押贷款公司（房地美）设定。对于贷款提供者而言，大额贷款风险较高，因此其利率也较高。这些贷款有贷款余额限制。一户至四户家庭的住宅的最高贷款金额每年根据联邦住房金融局公布的平均住房价格（包括新建和原有住房）变化率而变动。这些贷款限额被称为一致限额。
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
              licai:
                  {
                      bdname:"天天盈",
                      lixi:"3",
                      bddate:"12",
                      small_money:"10",
                      big_money:"50",
                      url: require("../../assets/yinhang/中国银行.jpg")
                  }
          }
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            tolicaichlden(){
                this.$router.push({path: '/licai_childen', params: {}});
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: {text: '近七天购买量'},
                    xAxis: {
                        type: 'category',
                        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }]
                });
            }
        }
    }
</script>

<style scoped>

</style>
