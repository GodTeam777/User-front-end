<template>
    <div style="width: 100%;height: 100%">
        产品购买记录
        <hr style="width: 100%;margin-top: 1%">
        <div style="margin:0 auto;width: 90%;height: 93%;border: white solid 1px">
            <div v-for="(petty,i) in pettyloan" style="float: left;font-size: 14px;height: 80px;margin-top: 48px;margin-bottom:1%;width: 100%;margin-right: 1%;border-radius:8px 8px 8px 8px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
                <table style="margin-left:1%;width:98%;height:80px;border-collapse: collapse;" border="0">
                    <tr>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 90px">产品名</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 90px">年利率</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 90px">买入</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 90px">购买时间</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 90px">产品类型</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 90px">截止时间</td>
                        <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px ;width: 80px">状态</td>
                        <td style="width: 80px;text-align: right" rowspan="2">
                            <el-button v-if="petty.mptype=='活期'&&petty.status==0" @click="tixian(petty.poid)" type="success" plain>提现</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>{{petty.mpname}}</td>
                        <td>{{petty.lilv}}%</td>
                        <td>{{petty.money}}</td>
                        <td>{{petty.licaiDate}}</td>
                        <td>{{petty.mptype}}</td>
                        <td>{{petty.shouDate}}</td>
                        <td>
                            <el-tag v-if="petty.status==0" type="success">收益产生中</el-tag>
                            <el-tag v-else>已提现</el-tag>
                        </td>
                    </tr>
                </table>
                <el-collapse v-model="activeNames"  @change="handleChange" style="position: absolute;width:90%">
                    <el-collapse-item :name="i" >
                        <template slot="title" >
                            <span style="margin-left: 90%">详情<i class="header-icon el-icon-info"></i></span>
                        </template>
                        <div>
                            <table border="0" style="height: 80px;width:70%;margin: 0 auto">
                                <tr>
                                    <td style="width: 13%;border-bottom: rgba(180,173,163,0.85) dashed 1px">总资产(元)</td>
                                    <td style="width: 50%;border-bottom: rgba(180,173,163,0.85) dashed 1px">￥{{petty.amount}}</td>
                                    <td style="width: 10%;border-bottom: rgba(180,173,163,0.85) dashed 1px">昨日收益</td>
                                    <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px">{{petty.yesterday}}</td>
                                </tr>
                                <tr>
                                    <td>当前收益</td>
                                    <td>￥{{petty.runningyield}}</td>
                                    <td>截止日期收益</td>
                                    <td>{{petty.Expected}}</td>
                                </tr>
                            </table>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div style="border:red solid 0px;width: 100%;margin-top: 580px;text-align: center">
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
             pagesize:3,//页大小
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

                    // data.put("amount",amount);//总资产
                    // data.put("yesterday",yesterday);//昨日收益
                    // data.put("Expected",yujisum);//预计到截止日期的收益
                    // data.put("runningyield",sum);//当前收益
                    // data.put("mptype",moneypro.getMptype());//产品类型
                    this.pettyloan.push({
                        "lilv":ele.lilv,
                        "amount":ele.amount.toFixed(2),//总资产
                        "yesterday":ele.yesterday.toFixed(2),//昨日收益
                        "Expected":ele.Expected.toFixed(2),//预计到截止日期的收益
                        "runningyield":ele.runningyield.toFixed(2),//当前收益
                        "mptype":ele.mptype,//产品类型

                        "poid": ele.poid,//订单编号
                        "mpname": ele.mpname,//产品名
                        "money": ele.money.toFixed(2),//买入金额
                        "licaiDate": y1 + "-" + M1 + "-" + d1,//购买时间
                        "zhifutype": ele.zhifutype,//支付方式
                        "shouDate": y2 + "-" + M2 + "-" + d2,//截至时间
                        "status": ele.status//状态
                    });

                })
            })
        },
        methods:{
            tixian(id){


                this.$confirm('是否提现', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'info '
                }).then(() => {
                    this.axios({
                        url:"http://localhost:10086/updateproOrder",
                        method:"POST",
                        withCredentials: true,
                        data:{
                            id:id
                        }
                    }).then(res=>{
                        if(res.data==1){
                            const h = this.$createElement;

                            this.$notify({
                                title: '成功',
                                message: h('i', { style: 'color: teal'}, '提现成功！')
                            });
                            setTimeout(() => {
                                location. reload()
                            }, 1000);
                        }else{
                            const h = this.$createElement;
                            this.$notify({
                                title: '失败',
                                message: h('i', { style: 'color: red'}, '提现失败！')
                            });
                        }
                    })
                }).catch(() => {
                    const h = this.$createElement;

                    this.$notify({
                        title: '提示',
                        message: h('i', { style: 'color: #909399'}, '取消提现！')
                    });
                });






            }
            ,
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
    .collapse-title {
        flex: 1 0 90%;
        order: 1;
    }

    .el-collapse-item__header {
        flex: 1 0 auto;
        order: -1;
    }
</style>