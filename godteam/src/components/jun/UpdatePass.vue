<template>
    <div style="width: 100%;height: 100%;">
        修改登录密码
        <hr style="width: 100%;margin-top: 1%">
        修改密码前，请先输入您的原密码进行身份验证：
        <div style="margin-left: 15%;width: 60%;height: 90%;margin-top: 8%">

            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="登录密码" name="first">
                    <table style="width: 100%;height: 80%;text-align: center">
                        <tr v-show="!isShow">
                            <td style="height: 15%;">原密码：</td>
                            <td style="text-align: left"><el-input v-model="OPassword" placeholder="请输入登录密码"></el-input></td>
                        </tr>
                        <tr v-show="!isShow">
                            <td colspan="2" style="text-align: center"><el-button @click="OnSubmit1">下一步</el-button></td>
                        </tr>
                        <tr v-show="isShow">
                            <td style="height: 15%;">新密码：</td>
                            <td style="text-align: left"><el-input v-model="NewPassword" placeholder="请输入新的登录密码"></el-input></td>
                        </tr>
                        <tr v-show="isShow">
                            <td style="height: 15%;">确认密码：</td>
                            <td style="text-align: left"><el-input v-model="ConfirmPass" placeholder="请再次输入新的登录密码"></el-input></td>
                        </tr>
                        <tr v-show="isShow">
                            <td colspan="2" style="text-align: center"><el-button @click="reset">取消</el-button><el-button @click="OnSubmit">保存</el-button></td>
                        </tr>
                    </table>
                </el-tab-pane>
                <el-tab-pane label="支付密码" name="second">
                    <table style="width: 100%;height: 80%;text-align: center">
                        <tr v-show="!isShow">
                            <td style="height: 15%;">原密码：</td>
                            <td style="text-align: left"><el-input v-model="Ozfpws" placeholder="请输入支付密码"></el-input></td>
                        </tr>
                        <tr v-show="!isShow">
                            <td colspan="2" style="text-align: center"><el-button @click="OnSubmit2">下一步</el-button></td>
                        </tr>
                        <tr v-show="isShow">
                            <td style="height: 15%;">新密码：</td>
                            <td style="text-align: left"><el-input v-model="Newzfpwsd" placeholder="请输入新的支付密码"></el-input></td>
                        </tr>
                        <tr v-show="isShow">
                            <td style="height: 15%;">确认密码：</td>
                            <td style="text-align: left"><el-input v-model="Confirmzfpws" placeholder="请再次输入新的支付密码"></el-input></td>
                        </tr>
                        <tr v-show="isShow">
                            <td colspan="2" style="text-align: center"><el-button @click="reset">取消</el-button><el-button @click="OnSubmitzfpws">保存</el-button></td>
                        </tr>
                    </table>
                </el-tab-pane>
            </el-tabs>





        </div>
    </div>
</template>

<script>
    export default {
        name: "UpdatePass",
        data(){
            return{
            isShow:false,
            activeName: 'first',
            OPassword:"",//登录密码：原密码
            NewPassword:"",//登录密码：新密码
            ConfirmPass:"",//登录密码：确认密码
            isPass:false,//登录密码：判断是否符合验证

            Ozfpws:"",//支付密码：原密码
            Newzfpwsd:"",//支付密码：新密码
            Confirmzfpws:"",//支付密码：确认密码
            iszfpws:false,//支付密码：判断是否符合验证
            }
        },methods:{
            handleClick(tab, event) {
                this.isShow=false,
                    this.OPassword="";
                    this.NewPassword="";
                    this.ConfirmPass="";
                    this.isPass=false;

                    this.Ozfpws="";
                    this.Newzfpwsd="";
                    this.Confirmzfpws="";
                    this.iszfpws=false;
            },
            OnSubmitzfpws(){
                this.iszfpws=this.Newzfpwsd==this.Confirmzfpws
                if(this.Newzfpwsd==""||this.Confirmzfpws==""){
                    this.$message({
                        type:'info',
                        message: '新密码不能为空'
                    });
                }else if(!this.iszfpws){
                    this.$message({
                        type:'info',
                        message: '两次输入的密码不一致，请重新输入'
                    });
                }else{
                    this.$message({
                        type:'info',
                        message: '通过'
                    });
                }
            },
            OnSubmit2(){
                if(this.Ozfpws==""){
                    this.$message({
                        type:'info',
                        message: '原密码不能为空'
                    });
                }else{
                    this.isShow=!this.isShow
                }
            },

            OnSubmit1(){
                if(this.OPassword==""){
                    this.$message({
                        type:'info',
                        message: '原密码不能为空'
                    });
                }else{
                this.isShow=!this.isShow
                }
            },
            OnSubmit(){
                this.isPass=this.NewPassword==this.ConfirmPass
                if(this.NewPassword==""||this.ConfirmPass==""){
                    this.$message({
                        type:'info',
                        message: '新密码不能为空'
                    });
                }else if(!this.isPass){
                    this.$message({
                        type:'info',
                        message: '两次输入的密码不一致，请重新输入'
                    });
                }else{
                    this.$message({
                        type:'info',
                        message: '通过'
                    });
                }
            },

            reset(){
                this.NewPassword=""
                this.ConfirmPass=""
                this.OPassword=""
                this.isShow=!this.isShow
            }
        }
    }
</script>

<style scoped>

</style>

