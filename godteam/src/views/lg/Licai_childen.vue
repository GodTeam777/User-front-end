<template>
    <div style="height: 580px;text-align: center">
        <el-steps :active="1" simple >
            <el-step title="理财产品" icon="el-icon-bank-card"></el-step>
            <el-step title="填写资料" icon="el-icon-edit"></el-step>
            <el-step title="购买成功" icon="el-icon-star-on"></el-step>
        </el-steps>

    <div style="margin-top: 30px;width: 50%;margin-left: 25%;box-shadow: #F8F8FF 2px 2px 5px 5px;border-radius: 9px;text-align: center">
        <br/>
        产品名：<span style="font-weight: 600">{{bname}}</span>
        <el-form :rules="rules" label-position="right" ref="form" :model="form" label-width="80px" style="margin-top: 20px">
            <el-form-item label="购买金额" label-width="36%" prop="licaiv">
                <el-input v-model.number="form.money" style="width: 50%;margin-left: -40%"></el-input>
            </el-form-item>
            <el-form-item label="支付方式" label-width="36%">

                <el-radio style="margin-left: -7%" v-model="form.zfdate" label="银行卡" border>银行卡</el-radio> <el-image style="width: 40px;position: absolute;margin-left: -40%;margin-top: 1%" :src="require('../../assets/lg/银联.jpg')"></el-image>
                <el-radio style="margin-left: 7%" v-model="form.zfdate" label="支付宝" border>支付宝</el-radio><el-image style="width: 40px;position: absolute;position: absolute;margin-left: -35%;margin-top: 0%" :src="require('../../assets/lg/支付宝.jpg')"></el-image>
            </el-form-item>
            <el-form-item style="margin-left:-14% ">
                <el-button type="primary" round plain @click="">返回</el-button>
                <el-button type="primary" round plain @click="tolicaichilden2">提交</el-button>
            </el-form-item>
            <br/><br/>

        </el-form>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Licai_childen",
        data(){
            var validatesmadai = (rule, value, callback) => {
                if (this.form.money < this.$route.query.minmoney) {
                    callback(new Error('最低起购金额为：'+this.$route.query.minmoney));
                }
                else {
                    callback();
                }
            };
            return {

                form: {
                    isnu:false,
                    money: '',
                    zfdate:'银行卡',
                    zhouqi:this.$route.query.zhouqi,
                    usersid:this.$store.state.user.uid,
                    mpid:this.$route.query.mpid
                },
                bname:this.$route.query.bname,
                rules:{
                    licaiv:[
                        { type: 'number', message: '金额必须为数字值'},
                        { validator: validatesmadai, trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            tolicaichilden2(){
                if(this.form.money>=this.$route.query.minmoney){
                    this.axios({url:'http://localhost:10086/addmoneypro',method:"post",withCredentials:true,data:{form:this.form}}).then(res=> {
                        if (res.data) {
                            this.$router.push({path: '/licai_childen2', params: {}});
                        }else{
                            alert("贷款失败，请联系客服")
                        }
                    })
                }

            }
        }
    }
</script>

<style scoped>

</style>
