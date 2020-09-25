<template>
    <div>
        <br>
        <el-steps :active="3"style="width: 95%;margin-left: 2%">
            <el-step title="步骤 1" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
        <div style="width: 97%">
            <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="银行卡号码"  prop="bank">
                    <el-input v-model="ruleForm.bank" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="银行卡照">
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"  v-loading="loading" style="width: 29%;">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div style="margin-left: 74%;width:165px;">
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')" plain style="height: 40px">下一步</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reg3",
        data() {
            return {
                isn:false,
                loading:false,
                imageUrl: '',
                ruleForm: {
                    bank: ''
                },
            };
        },
        methods:
        {
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
            },
            submitForm(formName) {
                if(this.ruleForm.bank==""){
                    this.$message({
                        type:'info',
                        message: '请输入银行卡号'
                    });
                }
                this.isn=this.ruleForm.bank==""
                if(!this.isn){

                    if(this.imageUrl==""||this.imageUrl==""){

                        this.$message({
                            type:'info',
                            message: '请点击上传正面银行卡照片'
                        });
                    }else{
                        this.$router.push({path: '/login',params:{}})
                    }

                }
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
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