<template>
    <div style="width: 100%;height: 100%">
        银行卡信息
        <hr style="width: 100%;margin-top: 1%">
        <div v-show="!isShow" style="margin:0 auto;width: 80%;height: 93%;border: white solid 1px">
            <div v-for="card in cardList" style="height:18%;border:red solid 0px;float: left;font-size: 14px;margin-top: 18px;margin-left:2%;margin-bottom:1%;width: 56%;margin-right: 1%;border-radius:13px 13px 13px 13px; box-shadow:#F8F8FF 3px 3px 6px 6px;border: #F5F5F5 solid 1px;">
               <div style="width:100%;borderRadius:13px 13px 13px 13px">

                   <table border="0" style="width: 100%">
                    <tr>
                        <td>
                            <el-image v-show="card.bid==1" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/农业银行.jpg')" fit="fill"></el-image>
                            <el-image v-show="card.bid==2" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/邮政银行.jpg')" fit="fill"></el-image>
                            <el-image v-show="card.bid==3" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/工商银行.jpg')" fit="fill"></el-image>
                            <el-image v-show="card.bid==21" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/中国银行.jpg')" fit="fill"></el-image>
                            <el-image v-show="card.bid==22" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/交通银行.jpg')" fit="fill"></el-image>
                            <el-image v-show="card.bid==23" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/光大银行.jpg')" fit="fill"></el-image>
                            <el-image v-show="card.bid==24" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/兴业银行.jpg')" fit="fill"></el-image>
                            <el-image v-show="card.bid==25" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/建设银行.jpg')" fit="fill"></el-image>
                            <el-image v-show="card.bid==26" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/民生银行.jpg')" fit="fill"></el-image>
                            <el-image v-show="card.bid==27" style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="require('../../assets/yinhang/中信银行.jpg')" fit="fill"></el-image>
                        </td>
                        <td><span style="color: white;font-weight: 600;color: black">
                            <span v-show="card.bid==1">农业银行储蓄卡</span>
                            <span v-show="card.bid==2">邮政银行储蓄卡</span>
                            <span v-show="card.bid==3">工商银行储蓄卡</span>
                            <span v-show="card.bid==21">中国银行储蓄卡</span>
                            <span v-show="card.bid==22">交通银行储蓄卡</span>
                            <span v-show="card.bid==23">光大银行储蓄卡</span>
                            <span v-show="card.bid==24">兴业银行储蓄卡</span>
                            <span v-show="card.bid==25">建设银行储蓄卡</span>
                            <span v-show="card.bid==26">民生银行储蓄卡</span>
                            <span v-show="card.bid==27">中信银行储蓄卡</span>
                        </span>
                            <br>
                            <span style="font-size: 9%;color: white"> 可转账</span>
                        </td>
                        <td>{{card.bankcard.toString().substr(0,5)}}<span v-if="card.bankcard!=''">****</span></td>
                    </tr>
                </table>

            </div>
            </div>
            <div style="cursor: pointer;position:relative;margin-left:2%;margin-top:55%;border: #CCCCCC solid 1px;width: 56%;height: 18%;border-radius:13px 13px 13px 13px;">
                <table border="0" style="margin: 0 auto">
                    <tr>
                        <td><br><el-button style="margin-top: 10%" @click="isShow=!isShow" plain><span style="color: #CCCCCC;">添加银行卡+</span></el-button></td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-show="isShow" style="margin:0 auto;width: 80%;height: 93%;border: white solid 1px">
            <table style="margin: 0 auto;margin-top: 5%;height: 80%">
                <tr>
                    <td>银行卡号：</td>
                    <td><el-input v-model="inputcard.brankcard" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td>银行：</td>
                    <td><el-select v-model="inputcard.region" placeholder="请选择银行">
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
                    </el-select></td>
                </tr>
                <tr>
                    <td>预留手机号：</td>
                    <td><el-input v-model="inputcard.brankphone" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td><el-button  @click="isShow=!isShow" plain>取消</el-button></td>
                    <td><el-button  @click="OnSubmit" plain>保存</el-button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bankcar",
        data(){
            return{
                isShow:false,
                inputcard:{
                    brankcard:"",
                    region:"",
                    brankphone:""
                },
                cardList:[
                ]
            }
        },
        mounted() {
            this.axios({
                url:"http://localhost:10086/selectBank",
                method:"POST",
                withCredentials: true,
                data:{}
            }).then(res=>{
                this.cardList=res.data
            })
        }
        ,
        methods:{
            OnSubmit(){
                if(this.inputcard.brankcard==""||this.inputcard.region==""||this.inputcard.brankphone==""){
                    this.$message({
                        type:'info',
                        message: '请完成信息录入'
                    });
                }else {
                    this.isShow=!this.isShow
                }
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