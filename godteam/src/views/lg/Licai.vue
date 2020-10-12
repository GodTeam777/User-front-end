<template>
    <div style="height: 1000px;">
        <div style="width: 70%;height: 350px;border: 0px solid red;margin-left: 15%;margin-top: 20px">
            <p style="background-color:rgba(22,98,188,0.7);font-size: 25px;width: 14%;text-align: center;color: Window">产品分类</p>
            <div style="width: 100%;height: 304px;border-top: 3px solid rgba(22,98,188,0.7);border-left: 1px solid rgba(22,98,188,0.7);border-right: 1px solid rgba(22,98,188,0.7);">
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px">产品类型：</span>
                    <el-radio style="margin-left: 7%" v-model="type" label="0" border size="small">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="type" label="定期" border size="small">定期</el-radio>
                    <el-radio style="margin-left: 0%" v-model="type" label="活期" border size="small">活期</el-radio>

                </p>
                <p style="line-height: 60px;border-bottom: 1px solid rgba(203,157,34,0.76);">
                    <span style="margin-left: 20px;">收益周期：</span>
                    <el-radio style="margin-left: 7%" v-model="big_Date" label="0" border size="small">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="-1" border size="small">每天</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="1" border size="small">1个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="3" border size="small">3个月</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_Date" label="6" border size="small">6个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="12" border size="small">12个月</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_Date" label="24" border size="small">1年以上</el-radio>
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
                    <span style="margin-left: 20px">最低买入：</span>
                    <el-radio style="margin-left: 7%" v-model="big_ed" label="0" border size="small">全部</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_ed" label="0-100" border size="small">0-10000元</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="100-200" border size="small">10000-20000</el-radio>
                    <el-radio style="margin-left: -0%" v-model="big_ed" label="200-300" border size="small">20000-30000</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="300-500" border size="small">30000-50000</el-radio>
                    <el-radio style="margin-left: 17.5%" v-model="big_ed" label="500-1000" border size="small">50000-100000</el-radio>
                    <el-radio style="margin-left: 0%" v-model="big_ed" label="1000" border size="small">100000以上</el-radio>
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
                        <td width="40%">收益产生周期：{{licai.lcperiod}}</td>
                    </tr>

                    <tr>
                        <td width="40%">类型: {{licai.lctype}}</td>
                        <td width="40%">年化利率：{{licai.lcrate}}%</td>
                    </tr>
                    <tr>

                        <td colspan="3" style="text-align: right"><el-button style="margin-right: 5%;margin-top: 10px" type="primary" @click="toinfo">查看详情</el-button></td>
                    </tr>
                </table>
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
        name: "Licai",
        methods:{
            toinfo(){
                this.$router.push({path: '/licai_info', params: {}});
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
                licais:[
                    {
                        lcname:"安盈成长",
                        lctype:"活期",
                        lcperiod:"每天",
                        lcrate:"5.16",
                        lctitle:"1万元起购 | 1元追加 | 9：00-15：00实时交易",
                        url: require("../../assets/yinhang/中国银行.jpg")
                    },
                    {
                        lcname:"天天盈",
                        lctype:"活期",
                        lcperiod:"每天",
                        lcrate:"2.35",
                        lctitle:"高流动性，高收益率，实时申赎！",
                        url: require("../../assets/yinhang/中国银行.jpg")
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
