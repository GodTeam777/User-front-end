<template>
    <div style="width: 100%;height: 100%">
        银行卡信息
        <hr style="width: 100%;margin-top: 1%">
        <div style="margin:0 auto;width: 80%;height: 93%;border: white solid 1px">
            <div v-for="card in cardList" style="height:18%;border:red solid 0px;float: left;font-size: 14px;margin-top: 18px;margin-left:2%;margin-bottom:1%;width: 56%;margin-right: 1%;border-radius:13px 13px 13px 13px; box-shadow:#F8F8FF 3px 3px 6px 6px;border: #F5F5F5 solid 1px;">
               <div :style="card.backgrund">

                   <table border="0" style="width: 100%">
                    <tr>
                        <td><el-image style="border-radius:50px 50px 50px 50px;width: 100px;height: 100px" :src="card.imageurl" fit="fill"></el-image></td>
                        <td><span style="color: white;font-weight: 600">{{card.name}}</span>
                            <br>
                            <span style="font-size: 9%;color: white"> 可转账</span>
                        </td>
                        <td>{{card.brankcard}}</td>
                    </tr>
                </table>

            </div>
            </div>
            <div style="cursor: pointer;position:relative;margin-left:2%;margin-top:55%;border: #CCCCCC solid 1px;width: 56%;height: 18%;border-radius:13px 13px 13px 13px;">
                <table border="0" style="margin: 0 auto">
                    <tr>
                        <td><br><el-button style="margin-top: 10%"  plain><span style="color: #CCCCCC;">添加银行卡+</span></el-button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bankcar",
        data(){
            return{
                cardList:[
                    {
                    name:"中国农业银行储蓄卡",
                    brankcard:"****4658",
                    imageurl: require("../../assets/农业银行.jpg"),
                    isbran:"1",
                    backgrund:{background:'#33CC99',width:'100%',borderRadius:'13px 13px 13px 13px'}
                    },
                    {
                    name:"中国工商银行储蓄卡",
                    brankcard:"****8501",
                    imageurl: require("../../assets/工商银行.jpg"),
                    isbran:"2",
                    backgrund:{background:'Maroon',width:'100%',borderRadius:'13px 13px 13px 13px'}
                    }
                ]
            }
        },
        methods:{
            open() {
                this.$prompt('请录入银行卡信息', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>