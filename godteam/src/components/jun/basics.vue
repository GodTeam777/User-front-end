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
                        <el-image
                                style="width: 100px; height: 100px;border-radius:7px 7px 7px 7px;"
                                :src="this.$store.state.user.touxiang"
                                :fit="fit"></el-image><br>
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
                    <td style="width: 20%;height: 15%;">姓名：</td>
                    <td style="text-align: left"><el-input v-model="form1.name" placeholder="请输入内容"></el-input></td>
                    <td rowspan="2" style="width: 17%">
                        <el-upload  style="width: 101px; height: 101px;"
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"

                                    ref="upload"
                                    :on-change="handleAvatarSuccess"
                                    :http-request="uploadFile"

                                    v-loading="loading">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 100px; height: 100px;">
                            <i v-else class="el-icon-plus avatar-uploader-icon" style="width: 101px; height: 101px;"></i>
                        </el-upload>
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
                    <td style="text-align: left">点击头像修改</td>
                </tr>
                <tr>
                    <td style="height: 15%;">联系方式：</td>
                    <td style="text-align: left"><el-input v-model="form1.phone" placeholder="请输入内容"></el-input></td>
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

                formDate:'',
                fit:"none",
                imageUrl:"",
                loading:false,
                url:"",
                fit:"scale-down",
                isShow:false,
                form:{
                    imageUrl:'',
                    name:this.$store.state.user.username,
                    radio:this.$store.state.user.sex,
                    birthday:this.$store.state.user.birthday,
                    phone:this.$store.state.user.phone,
                    card:this.$store.state.user.idcard
                },
                isimg:false,
                form1:{
                    imageUrl:"",
                    name:"",
                    radio:"",
                    birthday:"",
                    phone:"",
                    card:"",
                    sex:''
                }
            };
        },
       methods:{
            uploadFile(file){
                this.formDate.append('file', file.file);
                this.isimg=true;
            },
            OnSubmit(){

                if(this.form1.radio==2){
                    this.form1.sex='女';
                }else{
                    this.form1.sex='男';
                }

                this.formDate = new FormData()
                this.$refs.upload.submit();
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }

                if(this.isimg){
                this.axios.post("http://localhost:10086/upload",this.formDate, config).then(res => {
                        // alert("图片上传完成1")
                    this.axios({
                        url:"http://localhost:10086/UpdateUserinfo",
                        method:"POST",
                        withCredentials: true,
                        data:{
                            name:this.form1.name,
                            radio:this.form1.sex,
                            birthday:this.form1.birthday,
                            phone:this.form1.phone,
                        }
                    }).then(res=>{
                        if(res.data==1){
                            const h = this.$createElement;

                            this.$notify({
                                title: '成功',
                                message: h('i', { style: 'color: teal'}, '修改成功！')
                            });
                            setTimeout(() => {
                                location. reload()
                            }, 1000);
                            this.isShow=!this.isShow


                        }else{
                            const h = this.$createElement;

                            this.$notify({
                                title: '失败',
                                message: h('i', { style: 'color: red'}, '修改失败！')
                            });
                        }
                    })
                }).catch(res => {
                    console.log(res);
                })
                }else {
                    alert(this.form1.birthday)
                    this.axios({
                        url:"http://localhost:10086/UpdateUserinfo",
                        method:"POST",
                        withCredentials: true,
                        data:{
                            name:this.form1.name,
                            radio:this.form1.sex,
                            birthday:this.form1.birthday,
                            phone:this.form1.phone,
                        }
                    }).then(res=>{
                        if(res.data==1){
                            const h = this.$createElement;

                            this.$notify({
                                title: '成功',
                                message: h('i', { style: 'color: teal'}, '修改成功！')
                            });
                            setTimeout(() => {
                                location. reload()
                            }, 1000);
                            this.isShow=!this.isShow
                        }else{
                            const h = this.$createElement;

                            this.$notify({
                                title: '失败',
                                message: h('i', { style: 'color: red'}, '修改失败！')
                            });
                        }
                    })
                }



                setTimeout(() => {
                    location. reload()
                }, 500);
            },
            isupdate(){
                    this.imageUrl="";
                    this.form1.name=this.form.name;
                    this.form1.birthday=this.form.birthday;
                    this.form1.phone=this.form.phone;
                    this.form1.card=this.form.card;
                    if(this.form.radio=="女"){
                        this.form1.radio="2"
                   }else{
                        this.form1.radio="1"
                      }
                    this.isShow=!   this.isShow

            },

        handleAvatarSuccess(file) {

            this.loading=true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
            this.imageUrl = URL.createObjectURL(file.raw);
        },PageRefresh(){
                this.axios({
                    url:"http://localhost:10086/refresh",
                    method:"POST",
                    withCredentials:true
                }).then(res=>{

                    this.$store.commit('updateisLogin',1);
                    this.$store.commit('updateUserName',res.data.uname);
                    this.$store.commit('updateUserUid',res.data.usersid);
                    this.$store.commit('updateUserUid',res.data.usersid);
                    this.$store.state.user.touxiang=res.data.petname;
                    this.$store.state.user.sex=res.data.sex;
                    this.$store.state.user.phone=res.data.phone;
                    this.$store.state.user.smalldai=res.data.smalldai;
                    let h=res.data.cardid;
                    this.$store.state.user.idcard=h.toString().substr(0,6)+"****"+h.toString().substr(10)
                    let d=new Date(res.data.birthday);
                    let year=d.getFullYear()
                    let month=d.getMonth()
                    let day=d.getDate()
                    this.$store.state.user.birthday=year+"-"+parseInt(month+1)+"-"+day

                        this.form.name=this.$store.state.user.username,
                        this.form.radio=this.$store.state.user.sex,
                        this.form.birthday=this.$store.state.user.birthday,
                        this.form.phone=this.$store.state.user.phone,
                        this.form.card=this.$store.state.user.idcard

                }).catch(res=>{
                    this.$router.push({path: '/', params: {}});
                })
            }
        },created(){
            this.PageRefresh();
        }
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>