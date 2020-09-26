<template>
    <div style="width: 100%;height: 100%">
        房屋信息认证
        <hr style="width: 100%;margin-top: 1%">
        <div style="margin:0 auto;width: 80%;height: 93%;border: red solid 0px">
            <table style="margin-left: 12%;width: 60%;height: 80%;"border="0">
                <tr>
                    <td style="text-align: right">责任人：</td>
                    <td><el-input v-model="hname" :disabled="isDiabl" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td style="text-align: right">房屋坐落：</td>
                    <td><el-input :disabled="isDiabl" v-model="haddress" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td style="text-align: right">登记时间：</td>
                    <td><el-date-picker :disabled="isDiabl"
                            v-model="hdate "
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker></td>
                </tr>
                <tr>
                    <td style="text-align: right">房屋照：</td>
                    <td><el-upload :disabled="isDiabl" style="width: 49%;"
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" v-loading="loading">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload></td>
                </tr>
                <tr>
                    <td colspan="2"><el-button :disabled="isDiabl" style="margin-left:25%" @click="OnSubmit">提交</el-button></td>
                </tr>
            </table>
            <div v-show="isShow" style="text-align: center;font-size: 9%;color: rgba(180,173,163,0.85);border-radius:7px 7px 7px 7px;width: 10%;height: 10%;margin-left:80%;margin-top: -53%;box-shadow:#F8F8FF 2px 2px 5px 5px;">
                <br> 验证状态:<br> 审核中
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "attestation_house",
        data(){
            return{

                hname:"",
                haddress:"",
                hdate:"",
                imageUrl:"",
                isShow:false,
                loading:false,
                isDiabl:false
            }
        },
        methods:{
            OnSubmit(){
                if(this.hname==""||this.haddress==""||this.hdate==""||this.imageUrl==""){
                    this.$message({
                        type:'info',
                        message: '请完成信息录入'
                    });
                }else{
                    this.isDiabl=true
                    this.isShow=!this.isShow
                }

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