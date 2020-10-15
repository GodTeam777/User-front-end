<template>
    <div style="width: 100%;height: 100%">
        产品购买记录
        <hr style="width: 100%;margin-top: 1%">
        <div style="margin:0 auto;width: 90%;height: 93%;border: white solid 1px">
            <div v-for="(petty,i) in pettyloan" style="float: left;font-size: 14px;height: 80px;margin-top: 18px;margin-bottom:1%;width: 100%;margin-right: 1%;border-radius:8px 8px 8px 8px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
                <table style="margin-left:3%;width:90%;height:80px;border-collapse: collapse;">
                    <tr>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px">产品名</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px">买入</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px">购买时间</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px">支付方式</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px">截止时间</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px ;width: 90px">状态</td>
                    </tr>
                    <tr>
                        <td>{{petty.mpname}}</td>
                        <td>{{petty.money}}</td>
                        <td>{{petty.licaiDate}}</td>
                        <td>{{petty.zhifutype}}</td>
                        <td>{{petty.shouDate}}</td>
                        <td>
                            <el-tag v-if="petty.status==0" type="success">收益产生中</el-tag>
                            <el-tag v-else>已提现</el-tag>
                        </td>
                    </tr>
                </table>
                <el-collapse v-model="activeNames" @change="handleChange" style="position: absolute;width:90% ">
                    <el-collapse-item :name="i">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div style="border:red solid 0px;width: 100%;margin-top: 430px;text-align: center">
                <div class="block">
                    <el-pagination
                            background

                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="pageno"
                            layout="prev, pager, next"
                            :total="total">>
                    </el-pagination>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "proOrder",
        data(){
         return{
             activeNames: ['1'],
             pageno:1,//页数
             pagesize:4,//页大小
             total:0,//总数

             pettyloan:[],//理财订单
         }
        },
        mounted() {
            this.axios({
                url: "http://localhost:10086/selectproOrder",
                method: "POST",
                withCredentials: true,
                data: {
                    pageno: this.pageno,
                    pagesize: this.pagesize
                }
            }).then(res => {
                this.pageno = res.data.pageNo//页数
                this.pagesize = res.data.pageSize//页大小
                this.total = res.data.totalRecords//总数
                res.data.data.forEach(ele => {

                    let date1 = new Date(ele.licaiDate);
                    let y1 = date1.getFullYear();
                    let M1 = (date1.getMonth() + 1);
                    let d1 = date1.getDate();

                    let date2 = new Date(ele.shouDate);
                    let y2 = date2.getFullYear();
                    let M2 = (date2.getMonth() + 1);
                    let d2 = date2.getDate();
                    this.pettyloan.push({
                        "poid": ele.poid,
                        "mpname": ele.mpname,
                        "money": ele.money,
                        "licaiDate": y1 + "-" + M1 + "-" + d1,
                        "zhifutype": ele.zhifutype,
                        "shouDate": y2 + "-" + M2 + "-" + d2,
                        "status": ele.status
                    });

                })
            })
        },
        methods:{
            handleChange(val) {
                console.log(val);
            },
            handleSizeChange(val) {
                alert(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.pageno=val;
                this.axios({
                    url:"http://localhost:10086/selectproOrder",
                    method:"POST",
                    withCredentials: true,
                    data:{
                        pageno:this.pageno,
                        pagesize:this.pagesize
                    }
                }).then(res=>{
                    this.pageno=res.data.pageNo//页数
                    this.pagesize=res.data.pageSize//页大小
                    this.total=res.data.totalRecords//总数
                    res.data.data.forEach(ele => {

                        let date=new Date(ele.daiDate);
                        let y=date.getFullYear();
                        let M=(date.getMonth()+1);
                        let d=date.getDate();
                        this.pettyloan.push({"sdoid":ele.sdoid,"daimoney":ele.daimoney,"mou":ele.mou,"daiDate":y+"-"+M+"-"+d,"yihuan":ele.yihuan,"onemoney":ele.onemoney});

                    })
                })
            }
        }
        }
</script>

<style scoped>

</style>