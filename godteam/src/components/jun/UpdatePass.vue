<template>
    <div style="width: 100%;height: 100%;">
        修改登录密码
        <hr style="width: 100%;margin-top: 1%">
        修改密码前，请先输入您账号的密码进行身份验证：
        <div style="margin-left: 15%;width: 60%;height: 90%;margin-top: 8%">

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
               <td style="text-align: left"><el-input v-model="NewPassword" placeholder="请输入登录密码"></el-input></td>
           </tr>
           <tr v-show="isShow">
               <td style="height: 15%;">确认密码：</td>
               <td style="text-align: left"><el-input v-model="ConfirmPass" placeholder="请输入登录密码"></el-input></td>
           </tr>
           <tr v-show="isShow">
               <td colspan="2" style="text-align: center"><el-button @click="reset">取消</el-button><el-button @click="OnSubmit">保存</el-button></td>
           </tr>
       </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UpdatePass",
        data(){
            return{
            isShow:false,
            OPassword:"",
            NewPassword:"",
            ConfirmPass:"",
            isPass:false
            }
        },methods:{
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

