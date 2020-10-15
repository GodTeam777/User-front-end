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
                <el-form-item label="银行" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择银行">
                        <el-option label="农业" value="1"></el-option>
                        <el-option label="邮政" value="2"></el-option>
                        <el-option label="工商" value="3"></el-option>
                        <el-option label="中国" value="21"></el-option>
                        <el-option label="交通" value="22"></el-option>
                        <el-option label="光大" value="23"></el-option>
                        <el-option label="兴业" value="24"></el-option>
                        <el-option label="建设" value="25"></el-option>
                        <el-option label="民生" value="26"></el-option>
                        <el-option label="中信" value="27"></el-option>


                    </el-select>
                </el-form-item>
                <el-form-item label="支付密码"  prop="bank">
                    <el-input v-model="ruleForm.zfpws" autocomplete="off" maxlength="6"></el-input>
                </el-form-item>
                <el-form-item label="预留手机号"  prop="bank">
                    <el-input v-model="ruleForm.brankphone" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>
                <div style="margin-left: 64%;width:265px;">
                    <el-button type="primary" @click="goback" plain>上一步</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')" plain style="height: 40px">完成</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reg3",
        data() {
            return {
                ruleForm: {
                    zfpws:"",//支付密码
                    bank: '',//银行卡号码
                    brankphone:'',//预留手机
                    region:''//银行名
                },
            };
        },
        methods:
        {
            goback() {
                this.$router.go(-1)
            },
            submitForm(formName) {
                this.isn=this.ruleForm.bank==""
                if(this.ruleForm.bank==""){
                    this.$message({
                        type:'info',
                        message: '请输入银行卡号'
                    });
                }else if(this.ruleForm.zfpws.length!=6){
                    this.$message({
                        type:'info',
                        message: '请设置6位支付密码'
                    });
                }else if(this.ruleForm.brankphone==""){
                    this.$message({
                        type:'info',
                        message: '请输入银行预留手机号'
                    });
                }else {
                    this.$store.state.reguesr.bankcard=this.ruleForm.bank//y银行卡号码
                    this.$store.state.reguesr.bid=this.ruleForm.region//银行
                    this.$store.state.reguesr.zfpws=this.ruleForm.zfpws//支付密码
                    this.$store.state.reguesr.brankphone=this.ruleForm.brankphone//预留手机号
                    this.axios({
                        url:"http://localhost:10086/register",
                        method:"POST",
                        withCredentials: true,
                        data:{
                            petname:this.$store.state.reguesr.petname,
                            uspws:this.$store.state.reguesr.uspws,
                            uname:this.$store.state.reguesr.uname,
                            name:this.$store.state.reguesr.name,
                            sex:this.$store.state.reguesr.sex,
                            birthday:this.$store.state.reguesr.birthday,
                            phone:this.$store.state.reguesr.phone,

                            idcard:this.$store.state.reguesr.idcard,

                            bankcard:this.$store.state.reguesr.bankcard,
                            bid:this.$store.state.reguesr.bid,
                            zfpws:this.$store.state.reguesr.zfpws,
                            brankphone:this.$store.state.reguesr.brankphone
                        }
                    }).then(res=> {
                        // alert(res)
                        // alert(res.data())
                        // alert(res.data().i)

                        if (res.data==1) {

                            const h = this.$createElement;

                            this.$notify({
                                title: '成功',
                                message: h('i', { style: 'color: teal'}, '注册成功！')
                            });
                        setTimeout(() => {
                            this.$router.push({path: '/login', params: {}})
                        }, 1000);
                    }else{
                            const h = this.$createElement;

                            this.$notify({
                                title: '失败',
                                message: h('i', { style: 'color: ret'}, '注册失败！')
                            });
                        }
                    }).catch()

                    }

                },
            resetForm(formName) {
                this.ruleForm.brankphone="";
                this.ruleForm.zfpws="";
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
