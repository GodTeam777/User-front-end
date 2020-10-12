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
               <el-form-item label="真实姓名"
                             prop="name">
                   <el-input v-model="numberValidateForm.name" autocomplete="off"></el-input>
               </el-form-item>
               <el-form-item label="身份证照片" prop="card">
                   <div style="width: 100%;">
                       <div style="width:30%;float: right">
                   <el-upload style="width: 95.8%;height:180px;"
                           class="avatar-uploader"
                           action="https://jsonplaceholder.typicode.com/posts/"
                           :show-file-list="false"
                              :auto-upload="false"

                              ref="upload2"
                              :on-change="handleAvatarSuccess2"
                              :http-request="uploadFile2"

                              accept=".jpg,.jpeg,.png,.JPG,.JPEG"
                             v-loading="loading2">
                       <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                       <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                   </el-upload>


                       </div>
                       <div style="float: right;margin-right: 13%">（正反各一张）</div>
                       <div style="width:30%">


                   <el-upload style="width: 95.2%;height:180px;"
                           class="avatar-uploader"
                           action="https://jsonplaceholder.typicode.com/posts/"
                           :show-file-list="false"

                              ref="upload1"
                              :on-change="handleAvatarSuccess1"
                              :http-request="uploadFile1"

                            v-loading="loading1">
                       <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                       <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                   </el-upload>
                       </div>
                   </div>
               </el-form-item>
           </el-form>

       </div>
            <div style="margin-left: 64%;width:265px;">
                <el-button type="primary" @click="goback" plain>上一步</el-button>
                <el-button type="primary" @click="submitForm('numberValidateForm')" plain style="height: 40px">下一步</el-button>

                <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            var checkCard = (rule, value, callback) => {


               if(value.toString().length!=16){
                   this.numberValidateForm.showif=false;
               }else{
                   this.numberValidateForm.showif=true;
               }
            };
            return {
                loading1: false,
                loading2: false,
                imageUrl1: '',
                imageUrl2: '',
                formDate1:"",
                formDate2:"",
                numberValidateForm: {
                    name:'',
                    islength:false,
                    cardnum1:0,
                    cardnum2:16,
                    card: '',
                    cardinfo: '',
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

            uploadFile1(file){
                this.formDate1.append('file', file.file);
            },
            uploadFile2(file){
                this.formDate2.append('file', file.file);
            },
            goback() {
                this.$router.go(-1)
            },
            handleAvatarSuccess2(file, fileList) {
                this.loading2=true;
                setTimeout(() => {
                    this.loading2 = false;
                }, 1000);
                this.imageUrl2 = URL.createObjectURL(file.raw);


            },
            handleAvatarSuccess1(file) {

                this.loading1=true;
                setTimeout(() => {
                    this.loading1 = false;
                }, 1000);
                this.imageUrl1 = URL.createObjectURL(file.raw);
            },
            resetForm(numberValidateForm) {
                this.$refs[numberValidateForm].resetFields();
                this.imageUrl1="";
                this.imageUrl2="";
            },
            submitForm(numberValidateForm) {

               this.numberValidateForm.cardnum1=this.numberValidateForm.card.toString().length;
                this.numberValidateForm.islength=this.numberValidateForm.cardnum1==this.numberValidateForm.cardnum2;
                if(! this.numberValidateForm.islength){
                    this.$message({
                        type:'info',
                        message: '请输入正确的身份证号码'
                    });
                }
               if(this.numberValidateForm.showif){

                   if(this.numberValidateForm.name==""){
                       this.$message({
                           type:'info',
                           message: '请输入真实姓名'
                       });
                   }else
                   if(this.imageUrl1==""||this.imageUrl2==""){
                       this.$message({
                           type:'info',
                           message: '请点击上传身份证照'
                       });
                   }else{
                       this.formDate1 = new FormData()
                       this.$refs.upload1.submit();
                       let config = {
                           headers: {
                               'Content-Type': 'multipart/form-data'
                           }
                       }
                       this.axios.post("http://localhost:10086/upload",this.formDate1, config).then(res => {
                           // alert("图片上传完成1")
                           this.formDate2 = new FormData()
                           this.$refs.upload2.submit();

                           this.axios.post("http://localhost:10086/upload",this.formDate2, config).then(res => {
                               // alert("图片上传完成2")
                               this.$store.state.reguesr.name=this.numberValidateForm.name
                               this.$store.state.reguesr.idcard=this.numberValidateForm.card
                               this.$router.push({name: 'reg3',params:{}})
                           }).catch(res => {
                               console.log(res);
                           })
                       }).catch(res => {
                           console.log(res);
                       })


                   }

               }
            }
        }
    }
</script>

<style>
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
