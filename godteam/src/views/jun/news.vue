<template>
    <div style="height: 700px;width: 100%;border: red solid 0px">
        <div id="newsBack" style="width: 99.8%;height: 30%;border: blue solid 1px">
<div style="border: red solid 0px;text-align:center;margin-top: 5%;color: white;height: 50%"><span style="font-size: 300%">招联头条</span></div>
        </div>
        <div style="">
            <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
                <el-tab-pane label="新闻中心" name="first" >

                 <div  v-for="my in list" style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                            <table border="0" style="width: 100%;">
                                <tr>
                                    <td>
                                        <span style="font-size: 120%"><router-link class="newsA"  :to="{path:'/newsInfo',query: {name: my.nid}}" >{{my.newsTitle}}</router-link></span>
                                    </td>
                                    <td style="text-align: right">
                                        {{my.newsDate}}
                                    </td>
                                </tr>
                            </table>
                    <hr>
                </div>
                </el-tab-pane>
                <el-tab-pane label="重要公告" name="second">
                    <div  v-for="my in listtype"  style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><router-link class="newsA"  :to="{path:'/newsInfo',query: {name: my.nid}}" >{{my.newsTitle}}</router-link></span>
                                </td>
                                <td style="text-align: right">
                                    {{my.newsDate}}
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>


                </el-tab-pane>
                <el-tab-pane label="消费者权益" name="third">
                    <div v-for="my in listmytype" style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><router-link class="newsA"  :to="{path:'/newsInfo',query: {name: my.nid}}" >{{my.newsTitle}}</router-link></span>
                                </td>
                                <td style="text-align: right">
                                    {{my.newsDate}}
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news",

        data(){
            return{
                list:[],//存放新闻1
                listtype:[],//存放新闻2
                listmytype:[],//存放新闻3
                activeName: 'first',
            }
        },
        methods: {
            //新闻查看类型1
            show:function(){
                this.axios.get('http://localhost:10086/selectAll').then(res=>{
                    this.list=res.data;
                    //时间处理
                   this.list.forEach(res=>{
                       let date=new Date(res.newsDate);
                       let y=date.getFullYear();
                       let m=(date.getMonth()+1);
                       let d=date.getDate();
                       if(m<10){
                           m="0"+m;
                       }
                       if(d<10){
                           d="0"+d;
                       }
                       res.newsDate=y+"-"+m+"-"+d;
                   })
                })
            },
            //新闻查看类型2
            select:function(){
                this.axios.get('http://localhost:10086/selectAllType').then(res=>{
                    this.listtype=res.data;
                    this.listtype.forEach(res=>{
                        let date=new Date(res.newsDate);
                        let y=date.getFullYear();
                        let m=(date.getMonth()+1);
                        let d=date.getDate();
                        if(m<10){
                            m="0"+m;
                        }
                        if(d<10){
                            d="0"+d;
                        }
                        res.newsDate=y+"-"+m+"-"+d;
                    })
                })
            },
            //新闻查看类型3
            selectmytype:function(){
                this.axios.get('http://localhost:10086/selectByTypeAll').then(res=>{
                    this.listmytype=res.data;
                    this.listmytype.forEach(res=>{
                        let date=new Date(res.newsDate);
                        let y=date.getFullYear();
                        let m=(date.getMonth()+1);
                        let d=date.getDate();
                        if(m<10){
                            m="0"+m;
                        }
                        if(d<10){
                            d="0"+d;
                        }
                        res.newsDate=y+"-"+m+"-"+d;
                    })
                })
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },

        },
        mounted(){
            this.show();
            this.select();
            this.selectmytype();
        },
    }
</script>

<style scoped>
    .newsA{
        color: #000000;
        text-decoration: none;
    }
    #newsBack{
        background: url("../../assets/jun/news.png") no-repeat;
    }
</style>