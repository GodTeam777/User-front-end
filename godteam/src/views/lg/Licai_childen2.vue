<template>
    <div style="height: 600px;text-align: center">
        <el-steps :active="2" simple>
            <el-step title="理财产品" icon="el-icon-bank-card"></el-step>
            <el-step title="填写资料" icon="el-icon-edit"></el-step>
            <el-step title="购买成功" icon="el-icon-star-on"></el-step>
        </el-steps>
        <div style="margin-top: 30px;width: 50%;height: 250px;margin-left: 25%;box-shadow: #F8F8FF 2px 2px 5px 5px;border-radius: 9px;text-align: center">
            <br/>
            <table border="0" style="margin-left: 28%;">
                <tr>
                    <td rowspan="2"><span style="color: #7AC23C;font-size: 70px" class="el-icon-success"></span></td>
                    <td><span style="color:black;font-size: 25px">购买成功</span></td>
                </tr>
                <tr>
                    <td><span style="font-size: 13px;color: #8c939d">请前往--个人中心--理财产品查看收益<br/>如有问题，请点击<el-link style="margin-top: -2px" type="primary">联系客服</el-link></span></td>
                </tr>
                <br/>
                <tr>
                    <td colspan="2">
                        <el-button style="width: 80%;margin-top: 10px" type="primary"
                                   round
                                   @click="tohome"
                        >返回首页</el-button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Licai_childen2",
        methods:{
            tohome(){
                this.$router.push({path: '/', params: {}});
            }
        }
    }
</script>

<style scoped>

</style>
