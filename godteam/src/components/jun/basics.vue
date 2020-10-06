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
                                :src="form.imageUrl"
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
                    <td style="width: 20%;height: 15%;">用户名：</td>
                    <td style="text-align: left"><el-input v-model="form1.name" placeholder="请输入内容"></el-input></td>
                    <td rowspan="2" style="width: 17%">
                        <el-upload  style="width: 101px; height: 101px;"
                                   class="avatar-uploader"
                                   action="https://jsonplaceholder.typicode.com/posts/"
                                   :show-file-list="false"
                                   :on-success="handleAvatarSuccess"
                                   :before-upload="beforeAvatarUpload" v-loading="loading">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 100px; height: 100px;">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
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
                fit:"none",
                imageUrl:"",
                loading:false,
                url:"",
                fit:"scale-down",
                isShow:false,
                form:{
                    imageUrl:require("../../assets/jun/m5wnobiivna.jpg"),
                    name:this.$store.state.user.username,
                    radio:"男",
                    birthday:"2020-01-01",
                    phone:"14627746248",
                    card:"430481****5649"
                },
                form1:{
                    imageUrl:"",
                    name:"",
                    radio:"1",
                    birthday:"",
                    phone:"",
                    card:""
                }
            };
        },methods:{
            isupdate(){
                    this.imageUrl=this.form.imageUrl;
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
            },
        handleAvatarSuccess(res, file) {
            this.loading=true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
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