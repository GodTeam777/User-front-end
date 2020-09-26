<template>
    <div style="width: 100%;height: 100%">
        我的信息
        <hr style="width: 100%;margin-top: 1%">

        <div v-show="!isShow" style="margin-left: 15%;width: 60%;height: 90%;">
            <table border="0" style="width: 100%;height: 80%;text-align: center">
                <tr>
                    <td style="width: 20%;height: 15%;">用户名：</td>
                    <td style="text-align: left">{{form.name}}</td>
                    <td rowspan="2" style="width: 17%">
                        <img src="../../assets/jun/m5wnobiivna.jpg" style="width: 100%;border-radius:7px 7px 7px 7px;"/><br>
                        <router-link to=""></router-link>
                    </td>
                </tr>
                <tr>
                    <td style="height: 15%;">性别：</td>
                    <td style="text-align: left">{{form.radio}}</td>
                </tr>
                <tr>
                    <td style="height: 15%;">生日：</td>
                    <td style="text-align: left">{{form.birthday}}</td>
                </tr>

                <tr>
                    <td style="height: 15%;">联系方式：</td>
                    <td style="text-align: left">{{form.phone}}</td>
                </tr>
                <tr>
                    <td style="height: 15%;">身份证：</td>
                    <td style="text-align: left">{{form.card}}</td>
                </tr>
                <tr>
                    <td colspan="2"><el-button @click="isupdate()">修改信息</el-button></td>
                </tr>
            </table>
        </div>
        <div v-show="isShow" style="margin-left: 15%;width: 60%;height: 90%;">
            <table border="0" style="width: 100%;height: 80%;text-align: center">
                <tr>
                    <td style="width: 20%;height: 15%;">用户名：</td>
                    <td style="text-align: left"><el-input v-model="form1.name" placeholder="请输入内容"></el-input></td>
                    <td rowspan="2" style="width: 17%">
                        <img src="../../assets/jun/m5wnobiivna.jpg" style="width: 100%;border-radius:7px 7px 7px 7px;"/><br>
                        <router-link to=""></router-link>
                    </td>
                </tr>
                <tr>
                    <td style="height: 15%;">性别：</td>
                    <td style="text-align: left">
                        <el-radio v-model="form1.radio" label="1">男</el-radio>
                        <el-radio v-model="form1.radio" label="2">女</el-radio>
                    </td>
                </tr>

                <tr>
                    <td style="height: 15%;">生日：</td>
                    <td style="text-align: left"><el-date-picker
                            v-model="form1.birthday"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker></td>
                </tr>
                <tr>
                    <td style="height: 15%;">联系方式：</td>
                    <td style="text-align: left"><el-input v-model="form1.phone" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td style="height: 15%;">身份证：</td>
                    <td style="text-align: left"><el-input v-model="form1.card" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td colspan="2"><el-button @click="isShow=!isShow">取消</el-button><el-button @click="OnSubmit">保存</el-button></td>
                </tr>
            </table>
        </div>
    <div>

    </div>
    </div>
</template>

<script>
    export default {
        name: "basics",
        data() {
            return {
                url:"",
                fit:"scale-down",
                isShow:false,
                form:{
                    name:this.$store.state.user.username,
                    radio:"男",
                    birthday:"2020-01-01",
                    phone:"14627746248",
                    card:"430481****5649"
                },
                form1:{
                    name:"",
                    radio:"1",
                    birthday:"",
                    phone:"",
                    card:""
                }
            };
        },methods:{
            isupdate(){

                    this.form1.name=this.form.name;
                    this.form1.birthday=this.form.birthday;
                    this.form1.phone=this.form.phone;
                    this.form1.card=this.form.card;
                    if(this.form.radio=="男"){
                    this.form1.radio="1"
                   }else{
                    this.form1.radio="2"
                      }
                    this.isShow=!   this.isShow

            },
            OnSubmit(){
                this.isShow=!this.isShow
            }
        }
    }
</script>

<style scoped>

</style>