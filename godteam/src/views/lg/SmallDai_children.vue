<template>
        <div style="height: 580px;text-align: center">
            <el-steps :active="1" simple >
                <el-step title="小额贷款" icon="el-icon-bank-card"></el-step>
                <el-step title="填写资料" icon="el-icon-edit"></el-step>
                <el-step title="急速放款" icon="el-icon-star-on"></el-step>
            </el-steps>
            <div style="margin-top: 30px;width: 50%;margin-left: 25%;box-shadow: #F8F8FF 2px 2px 5px 5px;border-radius: 9px;text-align: center">
                <br/>
                <el-form :rules="rules" label-position="right" ref="form" :model="form" label-width="80px" style="margin-top: 20px">
                    <el-form-item label="贷款金额" label-width="36%" prop="smalldai">
                        <el-input v-model.number="form.smalldai" style="width: 50%;margin-left: -40%"></el-input>
                    </el-form-item>
                    <el-form-item label="借款期限" label-width="36%">
                        <el-radio style="margin-left: -40%" v-model="form.dai_date" label="1" border size="small">1个月</el-radio>
                        <el-radio style="margin-left: 0%" v-model="form.dai_date" label="3" border size="small">3个月</el-radio><br/>
                        <el-radio style="margin-left: -38%" v-model="form.dai_date" label="6" border size="small">6个月</el-radio>
                        <el-radio style="margin-left: 0%" v-model="form.dai_date" label="12" border size="small">12个月</el-radio>
                        <span style="position: absolute">每期应还：{{meiri}}</span>
                    </el-form-item>

                    <el-form-item label="收款卡号" label-width="36%"  prop="value1">
                        <el-select style="width: 50%;margin-left: -40%" v-model="form.brank1" placeholder="请选择">
                            <el-option
                                    v-for="item in cities"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                <span style="float: left">{{ item.label }}</span>
                                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="还款卡号" label-width="36%" prop="value2">
                        <el-select style="width: 50%;margin-left: -40%" v-model="form.brank2" placeholder="请选择">
                            <el-option
                                    v-for="item in cities"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                <span style="float: left">{{ item.label }}</span>
                                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
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
        name: "SmallDai_children",
        methods:{
            tobefore(){
                if (this.password.length===6){
                    this.pvidate='';
                    this.centerDialogVisible=false;
                    this.$router.push({path: '/SmallDai_children2', params: {}});
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
                this.$router.push({path: '/smallDai', params: {}});
            },
            submitForm(formName) {
                this.form.isnu=this.form.brank1!=""&&this.form.brank2!="";
                if (this.form.isnu&&this.form.smalldai!="") {
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
        },
        data() {
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
                    smalldai: 3000,
                    dai_date:'3',
                    meiri:'0',
                    brank1: '',
                    brank2: ''
                },
                rules: {
                    smalldai: [
                        { required: true, message: '金额不能为空'},
                        { type: 'number', message: '年龄必须为数字值'}
                    ],
                    value1: [
                        { validator: checkbrank1, trigger: 'change' }
                    ],
                    value2: [
                        { validator: checkbrank2, trigger: 'change' }
                    ]
                },
                cities: [{
                    value: '邮政',
                    label: '6222******3901'
                },{
                    value: '建设',
                    label: '6221******0012'
                }]
            }
        },
        computed:{
            meiri:function () {
               var num= (this.form.smalldai*0.00097*30)+(this.form.smalldai/this.form.dai_date);
               num=num.toFixed(2);
                return num;
            }
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
