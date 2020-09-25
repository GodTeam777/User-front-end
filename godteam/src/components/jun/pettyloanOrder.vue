<template>
    <div style="width: 100%;height: 100%">
        小额贷款订单信息
        <hr style="width: 100%;margin-top: 1%">
        <div style="margin:0 auto;width: 80%;height: 93%;border: red solid 0px">
            <div v-for="petty in pettyloan" style="float: left;font-size: 14px;margin-top: 18px;margin-bottom:1%;width: 100%;margin-right: 1%;border-radius:7px 7px 7px 7px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
                <table style="width:100%;border-collapse: collapse;">
                   <tr>
                       <td>贷款金额</td>
                       <td>分几期还款</td>
                       <td>贷款时间</td>
                       <td>已还几期</td>
                       <td>每期应还金额</td>
                   </tr>
                    <tr>
                        <td>{{petty.daimoney}}</td>
                        <td>{{petty.mou}}</td>
                        <td>{{petty.dai_date}}</td>
                        <td>{{petty.yihuan}}</td>
                        <td>{{petty.onemoney}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pettyloanOrder",
        data(){
            return{
                pettyloan:[
                    {
                daimoney:"6000",
                shou_card:"****6260",
                huan_card:"****9267",
                mou:"6",
                dai_date:"2020-01-01",
                yihuan:"6",
                onemoney:"1067"
                    },{
                        daimoney:"6000",
                        shou_card:"****6260",
                        huan_card:"****9267",
                        mou:"6",
                        dai_date:"2020-01-01",
                        yihuan:"6",
                        onemoney:"1067"
                    }
        ]
            }
        }
    }
</script>

<style scoped>

</style>

