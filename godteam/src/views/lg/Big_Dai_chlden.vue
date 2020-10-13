<template>
    <div style="height: 580px;text-align: center">
        <el-steps :active="1" simple >
            <el-step title="大额贷款" icon="el-icon-bank-card"></el-step>
            <el-step title="填写资料" icon="el-icon-edit"></el-step>
            <el-step title="等待审核" icon="el-icon-star-on"></el-step>
        </el-steps>
        <div style="margin-top: 30px;width: 50%;margin-left: 25%;box-shadow: #F8F8FF 2px 2px 5px 5px;border-radius: 9px;text-align: center">
            <br/>
            <el-form :rules="rules" label-position="right" ref="form" :model="form" label-width="80px" style="margin-top: 20px">
                <el-form-item label="贷款金额" label-width="36%" prop="smalldai">
                    <el-input v-model.number="form.smalldai" style="width: 50%;margin-left: -40%"></el-input>
                </el-form-item>
                <el-form-item label="借款期限" label-width="36%">
                    <el-radio style="margin-left: -40%" v-model="form.dai_date" :label="form.dai_date" border size="small">
                        {{form.dai_date}}个月</el-radio>
                    <span style="position: absolute">每期应还：{{meiri}}</span>
                </el-form-item>

                <el-form-item label="收款卡号" label-width="36%"  prop="value1">
                    <el-select style="width: 50%;margin-left: -40%" v-model="form.brank1" placeholder="请选择">
                        <el-option
                                v-for="item in cities"
                                :key="item.value"
                                :label="item[1]"
                                :value="item[1]"
                        >
                            <span style="float: left">{{ item[1] }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item[0] }}</span>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="还款卡号" label-width="36%" prop="value2">
                    <el-select style="width: 50%;margin-left: -40%" v-model="form.brank2" placeholder="请选择">
                        <el-option
                                v-for="item in cities"
                                :key="item.value"
                                :label="item[1]"
                                :value="item[1]"
                        >
                            <span style="float: left">{{ item[1] }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item[0] }}</span>
                        </el-option>
                    </el-select>

                </el-form-item>
                <br/>
                <el-form-item style="margin-left:-14% ">
                    <el-button type="primary" round plain @click="toafter">返回</el-button>
                    <el-button type="primary" round plain @click="submitForm('form')">提交</el-button>
                </el-form-item>
                <br/><br/>

            </el-form>
        </div>
        <el-dialog
                title="验证"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <div class="main">
                <h3>请输入支付密码验证</h3>

                <div class="pwipt" style="margin-left: 10%">
                    <input type="password" @input="judgePassword" v-model="password" autofocus maxlength='6'>
                    <div class="border-right">
                        <span v-if="show1"></span>
                    </div>
                    <div class="border-right">
                        <span v-if="show2"></span>
                    </div>
                    <div class="border-right">
                        <span v-if="show3"></span>
                    </div>
                    <div class="border-right">
                        <span v-if="show4"></span>
                    </div>
                    <div class="border-right">
                        <span v-if="show5"></span>
                    </div>
                    <div>
                        <span v-if="show6"></span>
                    </div>

                </div>
                <span style="color: red;">{{this.pvidate}}</span>
                <div class="forgetpw">忘记密码？</div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="toreset">取 消</el-button>
                <el-button type="primary" @click="tobefore">确 定</el-button>
  </span>
        </el-dialog>
        <div style="text-align: center">

        </div>
    </div>

</template>

<script>
    export default {
        name: "Big_Dai_chlden",
        methods:{
            tobefore(){
                if (this.password.length==6){
                    //console.log("支付密码"+this.password)
                    this.pvidate='';
                    this.centerDialogVisible=false;
                    console.log("支付密码"+this.password)
                    this.axios({url:'http://localhost:10086/zhifupswp',method:"post",withCredentials:true,data:{zhifupws:this.password}}).then(res=>{
                        console.log("返回支付密码数据"+res.data)
                        if(res.data==1){
                            this.axios({url:'http://localhost:10086/bigdaiimp',method:"post",withCredentials:true,data:{form:this.form}}).then(res=> {
                                if (res.data) {
                                    this.$router.push({path: '/big_Dai_childen2', params: {}});
                                }else{
                                    alert("贷款失败，请联系客服")
                                }
                            })
                            alert("对")
                        }else{
                            this.pvidate="支付密码错误！";
                            this.password='';
                            this.judgePassword();
                            this.centerDialogVisible=true;
                        }
                    })
                }else{
                    this.pvidate="请输入正确支付密码！";
                }
            },
            toreset(){
                this.pvidate='';
                this.password='';
                this.centerDialogVisible=false;
                this.judgePassword();
            },
            toafter(){
                window.history.back(-1);
            },
            submitForm(formName) {
                this.form.isnu=this.form.brank1!=""&&this.form.brank2!="";
                if (this.form.isnu&&this.form.smalldai!=""&&this.form.smalldai<=this.$route.query.big_money&&this.form.smalldai>=this.$route.query.small_money) {
                    this.centerDialogVisible=true;
                }
                this.$refs[formName].validate((valid) => {
                    if (this.form.isnu) {
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //校验密码
            surePassword: function() {
                // 调用密码校验接口

            },
            // 密码输入样式
            judgePassword: function() {
                if(this.password.length == 0) {
                    this.show1 = false;this.show2 = false;this.show3 = false;this.show4 = false;this.show5 = false;this.show6 = false;
                }
                if(this.password.length == 1) {
                    this.show1 = true;this.show2 = false;this.show3 = false;this.show4 = false;this.show5 = false;this.show6 = false;
                }
                if(this.password.length == 2) {
                    this.show1 = true;this.show2 = true;this.show3 = false;this.show4 = false;this.show5 = false;this.show6 = false;
                }
                if(this.password.length == 3) {
                    this.show1 = true;this.show2 = true;this.show3 = true;this.show4 = false;this.show5 = false;this.show6 = false;
                }
                if(this.password.length == 4) {
                    this.show1 = true;this.show2 = true;this.show3 = true;this.show4 = true;this.show5 = false;this.show6 = false;
                }
                if(this.password.length == 5) {
                    this.show1 = true;this.show2 = true;this.show3 = true;this.show4 = true;this.show5 = true;this.show6 = false;
                }
                if(this.password.length == 6) {
                    this.show1 = true;this.show2 = true;this.show3 = true;this.show4 = true;this.show5 = true;this.show6 = true;
                    // 接口校验密码
                    this.surePassword();
                }
            },
            getbank(){
                this.axios({url:'http://localhost:10086/mybankcard',method:"post",withCredentials:true}).then(res=>{
                    var opda=new Array();
                    for (var i=0;i<res.data.length;i++){
                        var item=new Array();
                        item[0]=res.data[i][0].bname;
                        item[1]=res.data[i][1].bankcard;
                        opda[i]= item;
                    }
                    this.cities=opda;
                    console.log("数据"+opda);
                })
            }
        },
        data() {
            var validatesmadai = (rule, value, callback) => {
                if (value > this.$route.query.big_money) {
                    callback(new Error('额度不足，可借额度为'+this.$route.query.big_money));
                }
                if (value < this.$route.query.small_money) {
                    callback(new Error('最低贷款额度为：'+this.$route.query.small_money));
                }
                else {
                    callback();
                }
            };
            var checkbrank1 = (rule, value, callback) => {

                if (this.form.brank1=="") {
                    return callback(new Error('请选择银行卡'));
                }
            };
            var checkbrank2 = (rule, value, callback) => {

                if (this.form.brank2=="") {
                    return callback(new Error('请选择银行卡'));
                }
            };
            return {
                centerDialogVisible: false,
                password: '',
                pvidate:'',
                autofocus: true,
                show1: false,
                show2: false,
                show3: false,
                show4: false,
                show5: false,
                show6: false,
                form: {
                    isnu:false,
                    bdid:this.$route.query.bid,
                    smalldai: '',
                    dai_date:this.$route.query.bddate,
                    meiri:'0',
                    brank1: '',
                    brank2: ''
                },
                rules: {
                    smalldai: [
                        { required: true, message: '金额不能为空'},
                        { type: 'number', message: '金额必须为数字值'},
                        { validator: validatesmadai, trigger: 'blur' }
                    ],
                    value1: [
                        { validator: checkbrank1, trigger: 'change' }
                    ],
                    value2: [
                        { validator: checkbrank2, trigger: 'change' }
                    ]
                },
                cities: []
            }
        },
        computed:{
            meiri:function () {
                var num= (this.form.smalldai*this.$route.query.interest/100/365)+(this.form.smalldai/this.form.dai_date);
                num=num.toFixed(2);
                this.form.meiri=num;
                return num;
            }
        },
        created() {
            this.getbank(),
                this.form.dai_date=this.$route.query.bddate;
        }
    }
</script>

<style scoped>
    .main {
        padding: 40px 30px;
        font-size: 12px;
        text-align: center;
    }
    .main h3 {
        font-size: 18px;
        line-height: 2em;
        font-weight: 700;
    }
    .main .tip {
        color: #EE4A4A;
        margin-bottom: 10px;
    }
    .main .pwipt {
        font-size: 0;
        height: 45px;
        line-height: 45px;
        width: 220px;
        border: 1px solid #ccc;
    }
    .main .pwipt div {
        display: inline-block;
        width: 16.2%;
        height: 45px;
        position: relative;
    }
    .main .pwipt .border-right {
        border-right: 1px solid #ccc;
    }
    .main .pwipt div>span {
        position: absolute;
        width: 10px;
        height: 10px;
        background: #000;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        margin-top: -5px;
        margin-left: -5px;
    }
    .main .pwipt input {
        outline: none;
        border: 0;
        background: none;
        width: 900px;
        height: 0;
        padding: 22px 0;
        text-align: center;
        position: absolute;
        left: -500px;
        right: 0;
        z-index: 1000;
        color:transparent;
        text-indent: -999em;
    }
    .close_btn {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 14px;
        height: 14px;
        z-index: 1000;
    }
    .forgetpw {
        font-size: 14px;
        color: #008AFF;
        margin-top: 10px;
        text-align: right;
    }
</style>
