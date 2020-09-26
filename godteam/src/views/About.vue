<template>
        <div style="height: 800px;width :48%;margin-top:10px; border:1px solid #bbbbbb; margin-left:30%" >
           <div style="height:100px; width :100%; border:1px solid #bbbbbb; background: #409EFF">
               <img src="../assets/kefu/h.png" style="margin-left:2% ;margin-top: 10px">
                <span class="title1">招联在线客服</span>
               <img src="../assets/kefu/index.png" class="img1">
           </div>

<div><textarea style="position:absolute;;margin-top:37.2%;height:20%; width :28.6%; border:0.5px solid #bbbbbb;" class="submit-msg" placeholder="请简要描述您要咨询的问题"></textarea>
 </div>

            <div style="height:90%; width:40%;margin-left:60% ;border:1px solid #bbbbbb;float:right;" >
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
            </el-collapse> </el-tabs></div>
            <div style="position:absolute;margin-left: 22%;margin-top: 44%;"> <el-button type="primary" style="width:100px">发送</el-button></div>
            </div>

</template>

<script>
    export default {
        name: "About"
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
        position:absolute; right:500px;
        width: 23px;
    }
    .title1{
        position:absolute; top:100px;
        position:absolute; left:680px;
        font-size: 25px;
        color: white;
    }


</style>