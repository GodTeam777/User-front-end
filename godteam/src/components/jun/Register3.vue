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
                <el-form-item label="银行卡号码"  prop="bank"
                              :rules="[
      { required: true, message: '银行卡号不能为空'}
    ]">
                    <el-input v-model="ruleForm.bank" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item style="margin-left: 65%;">
                </el-form-item>
            </el-form>
            <div style="margin-left: 74%;width:165px;">
                <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reg1",
        data() {
            return {
                ruleForm: {
                    bank: ''
                },
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push({name: 'reg3',params:{}})
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

<style scoped>

</style>