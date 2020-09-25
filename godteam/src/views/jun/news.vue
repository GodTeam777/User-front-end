<template>
    <div style="height: 700px;width: 100%;border: red solid 0px">
        <div id="newsBack" style="width: 99.8%;height: 30%;border: blue solid 1px">
<div style="border: red solid 0px;text-align:center;margin-top: 5%;color: white;height: 50%"><span style="font-size: 300%">招联头条</span></div>
        </div>
        <div style="">
            <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
                <el-tab-pane label="新闻中心" name="first" >

                 <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                            <table border="0" style="width: 100%;">
                                <tr>
                                    <td>
                                        <span style="font-size: 120%"><router-link class="newsA" to="/newsInfo">以科技助普惠 招联金融五年精进的四条路径</router-link></span>
                                    </td>
                                    <td style="text-align: right">
                                        2020-0101
                                    </td>
                                </tr>
                            </table>
                    <hr>
                </div>

                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">"招联微光计划"重磅启动：为500万复工大军提供百亿额度助力</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>

                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">
                                        公司启动第二期“微光计划”，助力千万用户生活重建</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>

                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">
                                        招联金融向湖北疫区捐款600万元</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>

                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">
                                        招联金融首期金融债券成功发行</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>

                </el-tab-pane>
                <el-tab-pane label="重要公告" name="second">
                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">以科技助普惠 招联金融五年精进的四条路径</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>

                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">"招联微光计划"重磅启动：为500万复工大军提供百亿额度助力</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>

                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">
                                        公司启动第二期“微光计划”，助力千万用户生活重建</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>

                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">
                                        招联金融向湖北疫区捐款600万元</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="消费者权益" name="third">
                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">以科技助普惠 招联金融五年精进的四条路径</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>

                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">"招联微光计划"重磅启动：为500万复工大军提供百亿额度助力</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
                                </td>
                            </tr>
                        </table>
                        <hr>
                    </div>

                    <div style="line-height: 60px;border: red solid 0px;width:80%;margin: 0 auto">
                        <table border="0" style="width: 100%;">
                            <tr>
                                <td>
                                    <span style="font-size: 120%"><a class="newsA" href="#">
                                        公司启动第二期“微光计划”，助力千万用户生活重建</a></span>
                                </td>
                                <td style="text-align: right">
                                    2020-0101
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
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
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