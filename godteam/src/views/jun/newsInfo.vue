<template>
    <div style="height: 1300px;width: 100%;border: red solid 0px">
        <div style="width:100%;height:78px;border: red solid 0px;background:#F8F8FF;">
            <el-breadcrumb separator="/"style="height: 100%;">
                <br><br>
                <el-breadcrumb-item :to="{ path: '/Home' }" style="height: 100%;font-size: 170%">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/news' }" style="height: 100%;font-size: 170%">每日新闻</el-breadcrumb-item>
                <el-breadcrumb-item style="height: 100%;font-size: 170%" >新闻详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="width: 80%;margin: 0 auto;border: red solid 0px">

            <span style="font-size: 200%;font-weight: 800">{{Mylist.newsTitle}}</span>
            <br>
            {{Mylist.newsDate}} <span style="margin-left: 30px"> {{Mylist.chubanshe}}</span>
            <hr>
            <div style="line-height: 32px">
                {{Mylist.newsBody}}
            </div>
            <br><br><br>
            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newsInfo",
        data(){
            return{
                Mylist:[]
            }
        },

                //根据id查询详细信息
            created(){
                    this.axios.get
                        // eslint-disable-next-line no-unexpected-multiline
                        ("http://localhost:10086/queryById?id=" + this.$route.query.name)
                        .then(result => {
                                // 成功了
                                this.Mylist = result.data;
                            //时间格式化
                            let date=new Date(this.Mylist.newsDate);
                            let d;
                            if(date.getDate()>10){
                                d=date.getDate()
                            }else{
                                d="0"+date.getDate()
                            }
                            let m;
                            if((date.getMonth()+1)>10){
                                m=(date.getMonth()+1)
                            }else{
                                m="0"+(date.getMonth()+1)
                            }
                            this.Mylist.newsDate=date.getFullYear()+"-"+m+"-"+d;
                        });
                }





    }
</script>

<style scoped>

</style>