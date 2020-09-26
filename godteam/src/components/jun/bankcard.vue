<template>
    <div style="width: 100%;height: 100%">
        银行卡信息
        <hr style="width: 100%;margin-top: 1%">
        <div v-show="!isShow" style="margin:0 auto;width: 80%;height: 93%;border: white solid 1px">
            <div v-for="card in cardList" style="height:18%;border:red solid 0px;float: left;font-size: 14px;margin-top: 18px;margin-left:2%;margin-bottom:1%;width: 56%;margin-right: 1%;border-radius:13px 13px 13px 13px; box-shadow:#F8F8FF 3px 3px 6px 6px;border: #F5F5F5 solid 1px;">
               <div :style="card.backgrund">

                   <table border="0" style="width: 100%">
                    <tr>
                        <td><el-image style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="card.imageurl" fit="fill"></el-image></td>
                        <td><span style="color: white;font-weight: 600">{{card.name}}</span>
                            <br>
                            <span style="font-size: 9%;color: white"> 可转账</span>
                        </td>
                        <td>{{card.brankcard}}</td>
                    </tr>
                </table>

            </div>
            </div>
            <div style="cursor: pointer;position:relative;margin-left:2%;margin-top:55%;border: #CCCCCC solid 1px;width: 56%;height: 18%;border-radius:13px 13px 13px 13px;">
                <table border="0" style="margin: 0 auto">
                    <tr>
                        <td><br><el-button style="margin-top: 10%" @click="isShow=!isShow" plain><span style="color: #CCCCCC;">添加银行卡+</span></el-button></td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-show="isShow" style="margin:0 auto;width: 80%;height: 93%;border: white solid 1px">
            <table style="margin: 0 auto;margin-top: 5%;height: 80%">
                <tr>
                    <td>银行卡号：</td>
                    <td><el-input v-model="inputcard.brankcard" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td>银行卡照：</td>
                    <td><el-upload style="width: 49%;"
                                   class="avatar-uploader"
                                   action="https://jsonplaceholder.typicode.com/posts/"
                                   :show-file-list="false"
                                   :on-success="handleAvatarSuccess"
                                   :before-upload="beforeAvatarUpload">
                        <img v-if="inputcard.cardimage" :src="inputcard.cardimage" class="avatar" v-loading="loading">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload></td>
                </tr>
                <tr>
                    <td><el-button  @click="isShow=!isShow" plain>取消</el-button></td>
                    <td><el-button  @click="OnSubmit" plain>保存</el-button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bankcar",
        data(){
            return{
                isShow:false,
                loading:false,
                inputcard:{
                    brankcard:"",
                    cardimage:""
                },
                cardList:[
                    {
                    name:"中国农业银行储蓄卡",
                    brankcard:"****4658",
                    imageurl: require("../../assets/农业银行.jpg"),
                    isbran:"1",
                    backgrund:{background:'#33CC99',width:'100%',borderRadius:'13px 13px 13px 13px'}
                    },
                    {
                    name:"中国工商银行储蓄卡",
                    brankcard:"****8501",
                    imageurl: require("../../assets/工商银行.jpg"),
                    isbran:"2",
                    backgrund:{background:'Maroon',width:'100%',borderRadius:'13px 13px 13px 13px'}
                    }
                ]
            }
        },
        methods:{
            OnSubmit(){
                if(this.inputcard.brankcard==""||this.inputcard.cardimage==""){
                    this.$message({
                        type:'info',
                        message: '请完成信息录入'
                    });
                }else {
                    this.isShow=!this.isShow
                }
            },
            handleAvatarSuccess(res, file) {
                this.loading=true;
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
                this.inputcard.cardimage = URL.createObjectURL(file.raw);
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