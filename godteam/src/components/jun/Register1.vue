<template>
    <div>
        <br>
        <el-steps :active="1"style="width: 95%;margin-left: 2%">
            <el-step title="步骤 1" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
        <div style="width: 97%">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名"
                              prop="petname"
                              :rules="[
      { required: true, message: '用户名不能为空'}
    ]">
                    <el-input v-model="ruleForm.petname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="昵称"
                              prop="uname"
                              :rules="[
      { required: true, message: '昵称不能为空'}
    ]">
                    <el-input v-model="ruleForm.uname" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item  label="密码" prop="pass" :rules="[
      { required: true, message: '密码不能为空'}]">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" :rules="[
      { required: true, message: '确认密码不能为空'}]">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio v-model="ruleForm.radio" label="0">男</el-radio>
                    <el-radio v-model="ruleForm.radio" label="1">女</el-radio>
                </el-form-item>
                <el-form-item label="出生日期"prop="date"
                              :rules="[
      { required: true, message: '出生日期不能为空'}]">
                    <el-col :span="11">
                        <el-date-picker type="date"  placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item
                        label="电话号码"
                        prop="Phone"
                        :rules="[
      { required: true, message: '电话号码不能为空'},
      { type: 'number', message: '电话号码必须为数字值'}
    ]"
                >
                    <el-input type="age" v-model.number="ruleForm.Phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item style="margin-left: 65%;">
                </el-form-item>
            </el-form>
            <div style="margin-left: 64%;width:265px;">
                <el-button type="primary" @click="submitForm('ruleForm')" plain>下一步</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "reg1",
        data() {


            var validatePass = (rule, value, callback) => {

                if (value === '') {

                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {

                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    petname:'',
                    radio:'',
                    date:'',
                    Phone:'',
                    type:'',
                    sex:'',
                    uname:''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],

                }
            };
        },
        computed: {
            value() {
                return this.ruleForm.type=this.$store.state.reguesr.uname;
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                      if(this.ruleForm.radio==2){
                          this.ruleForm.sex="女"
                      }else{
                          this.ruleForm.sex="男"
                      }


                        this.$store.state.reguesr.petname=this.ruleForm.petname
                        this.$store.state.reguesr.uspws=this.ruleForm.pass
                        this.$store.state.reguesr.uname=this.ruleForm.uname
                        this.$store.state.reguesr.sex=this.ruleForm.sex
                        let d=this.ruleForm.date;
                        let year=d.getFullYear()
                        let month=d.getMonth()
                        let day=d.getDate()
                        this.$store.state.reguesr.birthday=year+"-"+parseInt(month+1)+"-"+day
                        this.$store.state.reguesr.phone=this.ruleForm.Phone

                        this.$router.push({name: 'reg2',params:{}})
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style>

</style>