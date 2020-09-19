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
               <el-form-item label="确认密码" prop="card">
                   <el-input type="card" v-model="numberValidateForm.card" autocomplete="off"></el-input>
               </el-form-item>

           </el-form>
       </div>
        <div style="margin-left: 74%;width:165px;">
            v-model.number="numberValidateForm.card"
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
            resetForm(numberValidateForm) {
                this.$refs[numberValidateForm].resetFields();
            },
            submitForm(numberValidateForm) {
                alert(this.numberValidateForm.showif)
               if(this.numberValidateForm.showif){
                   this.$router.push({name: 'reg3',params:{}})
               }
            }
        }
    }
</script>

<style>

</style>
