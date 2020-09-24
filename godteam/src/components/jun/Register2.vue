<template>
    <div>
        <br>

        <el-steps :active="2"style="width: 95%;margin-left: 2%">
            <el-step title="步骤 1" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>

       <div style="width: 97%">
           <el-form :model="numberValidateForm" :rules="rules" ref="numberValidateForm"  label-width="100px" class="demo-ruleForm">
               <el-form-item label="身份证号码" prop="card">
                   <el-input type="card" v-model="numberValidateForm.card" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item label="身份证照片" prop="card">
                   <div style="width: 100%;">
                       <div style="width:30%;float: right">
                   <el-upload
                           class="avatar-uploader"
                           action="https://jsonplaceholder.typicode.com/posts/"
                           :show-file-list="false"
                           :on-success="handleAvatarSuccess1"
                           :before-upload="beforeAvatarUpload"  v-loading="loading1">
                       <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                       <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                   </el-upload>
                       </div>
                       <div style="float: right;margin-right: 13%">（正反各一张）</div>
                       <div style="width:30%">
                   <el-upload
                           class="avatar-uploader"
                           action="https://jsonplaceholder.typicode.com/posts/"
                           :show-file-list="false"
                           :on-success="handleAvatarSuccess2"
                           :before-upload="beforeAvatarUpload" v-loading="loading2">
                       <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                       <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                   </el-upload>
                       </div>
                   </div>
               </el-form-item>
           </el-form>

       </div>
        <div style="margin-left: 74%;width:165px;">

            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                <el-button type="primary" @click="submitForm('numberValidateForm')" plain style="height: 40px">下一步</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            var checkCard = (rule, value, callback) => {
               if(value.toString().length!=16){
                   callback(new Error('请输入正确的身份证号码'))
               }else{
                   this.numberValidateForm.showif=true;
               }
            };
            return {
                loading1: false,
                loading2: false,
                imageUrl1: '',
                imageUrl2: '',
                numberValidateForm: {
                    card: '',
                    showif:false
                },
                rules: {
                    card: [
                        { validator: checkCard, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            thisclose(numm){
               if(numm==1){
                   this.loading1=false;
               }else{
                   this.loading2=false;
               }
            },
            handleAvatarSuccess1(res, file) {

                this.loading1=true;
                this.imageUrl1 = URL.createObjectURL(file.raw);
                setTimeout(this.thisclose(1), 2000);

            },handleAvatarSuccess2(res, file) {
                this.loading2=true;
                this.imageUrl2 = URL.createObjectURL(file.raw);
                setTimeout(this.thisclose(2), 2000);

            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传的图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传的图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            resetForm(numberValidateForm) {
                this.$refs[numberValidateForm].resetFields();
            },
            submitForm(numberValidateForm) {

               if(this.numberValidateForm.showif){
                   if(this.imageUrl1==""||this.imageUrl2==""){

                       this.$message({
                           type:'info',
                           message: '请点击上传身份证照'
                       });
                   }else{
                       this.$router.push({name: 'reg3',params:{}})
                   }

               }
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
    }
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
