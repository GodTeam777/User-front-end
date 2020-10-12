<template>
        <div style="height: 600px;width :48%;margin-top:10px; border:1px solid #bbbbbb; margin-left:30%" >
           <div style="height:100px; width :100%; border:1px solid #bbbbbb; background: #409EFF">
               <img src="../assets/kefu/h.png" style="margin-left:2% ;margin-top: 10px">
                <span class="title1">招联在线客服</span>
               <img src="../assets/kefu/index.png" class="img1">
           </div>

<div class="message">
                <div v-for="(value,key,index) in messageList" :key="index" style="">
                    <el-tag v-if="value.formName==name" type="success" style="float:right">我：{{value.msg}}<br/>{{value.date}}</el-tag>
                    <br />
                    <br />
                    <el-tag v-if="value.formName=='kefu'" style="float:left">客服：{{value.msg}}<br/>{{value.date}}</el-tag>
                    <br />
                    <br />
                </div>
</div>


            <div style="height:79%; width:40%;margin-left:60% ;margin-top: -35%;border-left:1px solid #bbbbbb;float:right;" >
                <p style="font-size: 18px;text-align:center">常见问题</p>
                <el-tabs v-model="activeName" @tab-click="handleClick" ><el-collapse accordion >
                <el-collapse-item >
                    <template slot="title" >
                        <i class="header-icon el-icon-info" >为什么提示“信用额度被冻结”</i>
                    </template>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-question">&nbsp;那些人可以申请额度?</i>
                    </template>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-question">&nbsp;如何申请额度?</i>
                    </template>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-question">&nbsp;使用好期贷款如何收费?</i>
                    </template>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-question">&nbsp;分期消费购物是如何收费的?</i>
                    </template>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-question">&nbsp;为什么我不能借款或消费了?</i>
                    </template>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
            </el-collapse> </el-tabs>
            </div>
            <div><textarea v-model="messageValue" style="position:absolute;margin-top:7%;height:20%; width :28.6%; border:0.5px solid #bbbbbb;" class="submit-msg" placeholder="请简要描述您要咨询的问题"></textarea>
                <div style="position:absolute;margin-left: 21%;margin-top: 13%;"> <el-button type="primary" @click="sendMessage" style="width:100px">发送</el-button></div>
            </div>

            <div style="float: left;width:100%;height: 100px"></div>
            </div>


</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                name: "zhangsan", // 昵称
                messageList: '', // 消息列表
                messageValue: "", // 消息内容
                timer:''//定时器
            };
        },
        methods:{
            //发送
            sendMessage(){
                if(this.messageValue!=null){
                    this.axios({url:"http://localhost:10086/sendmsg_front",method:"post",withCredentials:true,
                        data:{formName:this.name,toName:"kefu",msg:this.messageValue}}).then(res=>{})
                }
                this.messageValue="";
            },
            //获得
            getMessage(){
                var name=this.name.toString();
                this.axios({url:"http://localhost:10086/getmsg",method:"get",withCredentials:true}).then(res=>{
                    this.messageList=res.data;
                    //console.log("获得数据："+res.data);
                    for(let i in res.data){
                        if(i==this.name){
                            this.messageList=res.data[i];
                        }
                    }
                    console.log("获得数据："+this.messageList);
                })

            }
        },
        mounted(){
           this.timer= window.setInterval(this.getMessage,2000)
           this.name=this.$store.state.user.username;
        },
        beforeDestroy() {
            clearTimeout(this.timer);
        }
    }
</script>

<style scoped>
    .div1{
        position:absolute; top:169px;
        position:absolute; right:431px;
        width:300px; height:900px; margin-top:5px;
        border:1px solid #cccccc;
    }
    /*.btn{*/
    /*    position:absolute; top:920px;*/
    /*    position:absolute; left:1020px;*/
    /*    width:120px;*/
    /*}*/
    .img1{
        position:absolute; top:110px;
        position:absolute; right:350px;
        width: 23px;
    }
    .title1{
        position:absolute; top:100px;
        position:absolute; left:680px;
        font-size: 25px;
        color: white;
    }
    .message {
        position: relative;
        overflow:auto;
        top: 30px;
        width: 58%;
        height: 40%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        padding: 5px;
    }

</style>
