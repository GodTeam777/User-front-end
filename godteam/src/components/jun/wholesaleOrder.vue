<template>

    <div style="width: 100%;height: 100%">


        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="贷款订单" name="first">
                大额贷款订单信息
                <hr style="width: 100%;margin-top: 1%">
                <div style="margin:0 auto;width: 100%;height: 93%;border: red solid 0px">
                    <div v-for="petty in pettyloan" style="float: left;font-size: 14px;height: 90px;margin-top: 18px;margin-bottom:1%;width: 100%;margin-right: 1%;border-radius:8px 8px 8px 8px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
                        <table style="margin-left:3%;width:100%;height:90px;border-collapse: collapse;" border="0">
                            <tr>
                                <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 10%;">订单编号</td>
                                <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 13%;">产品名</td>
                                <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 10%;">贷款金额</td>
                                <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 10%;">分几期还款</td>
                                <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 12%;">贷款时间</td>
                                <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 10%;">已还几期</td>
                                <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px ;width: 12%;">每期应还金额</td>
                                <td style="border-bottom: rgba(180,173,163,0.85) dashed 1px;width: 10%;">申请状态</td>
                                <td rowspan="2" style="text-align: center">
                                         <span v-show="petty.mou!=petty.yihuan&&petty.status==1">
                                        <el-tag type="warning">
                                        还款中
                                    </el-tag><br/><el-link type="primary" @click="selectinfo(petty.boid,petty.daimoney,petty.mou,petty.onemoney,)">提前还款</el-link>
                                    </span>
                                    <span v-show="petty.mou==petty.yihuan&&petty.status==1">
                                        <el-tag type="success">
                                        已还完
                                    </el-tag>
                                    </span>
                                </td>
                                <!--                 <el-button icon="el-icon-search" @click="selectinfo(petty.sdoid)" round>查看</el-button></td>-->
                            </tr>
                            <tr>
                                <td>{{petty.boid}}</td>
                                <td>{{petty.bdname}}</td>
                                <td>{{petty.daimoney}}</td>
                                <td>{{petty.mou}}</td>
                                <td>{{petty.daiDate}}</td>
                                <td>{{petty.yihuan}}</td>
                                <td>{{petty.onemoney}}</td>
                                <td>
                                    <span v-show="petty.status==0">
                                        <el-tag type="info">
                                       审核中
                                        </el-tag>
                                    </span>
                                    <span v-show="petty.status==1">
                                        <el-tag type="success">
                                       已通过
                                        </el-tag>
                                    </span>
                                    <span v-show="petty.status==2">
                                        <el-tag type="danger">
                                       不通过
                                        </el-tag>
                                    </span>
                                </td>

                            </tr>
                        </table>
                    </div>

                    <div class="block">
                        <el-pagination
                                background

                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage4"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="100"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="400">>
                        </el-pagination>
                    </div>

                </div>

            </el-tab-pane>
            <el-tab-pane label="历史订单" name="second">
                历史订单
                <hr style="width: 100%;margin-top: 1%">
                <div style="margin:0 auto;width: 80%;height: 93%;border: red solid 0px">
                    <div v-for="order in smallhuankuan" style="height: 50px;float: left;font-size: 14px;margin-top: 18px;margin-bottom:1%;width: 100%;margin-right: 1%;border-radius:7px 7px 7px 7px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
                        <table style="height: 100%;margin-left:5%;width:89%;border-collapse: collapse;" border="0">
                            <tr style="border-bottom: rgba(180,173,163,0.85) dashed 1px">
                                <td width="30%">流水号</td>
                                <td>所属订单</td>
                                <td>支付方式</td>
                                <td>支付金额</td>
                                <td>支付时间</td>
                            </tr>
                            <tr>
                                <td>{{order.liushui}}</td>
                                <td>{{order.boid}}</td>
                                <td>{{order.zhifutype}}</td>
                                <td>{{order.money}}</td>
                                <td>{{order.huanDate}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>

        <el-dialog title="提前还款" :visible.sync="outerVisible" @close="close">
            <el-dialog
                    width="30%"
                    title="付款"
                    :visible.sync="innerVisible"
                    append-to-body >
                <el-dialog
                        width="30%"
                        title="内层 Dialog"
                        :visible.sync="nei"
                        append-to-body>

                </el-dialog>
                <div>
                    <table border="0" style="margin: 0 auto;width: 100%;height: 150px;">
                        <tr>
                            <td>
                                <el-image style="width: 30px;margin-top: 5%;" :src="require('../../assets/lg/支付宝.jpg')"></el-image>
                            </td>
                            <td>
                                <el-radio v-model="zftype" label="支付宝" border></el-radio>
                            </td>
                            <td>
                                <el-image style="width: 30px;" :src="require('../../assets/lg/银联.jpg')"></el-image>
                            </td>
                            <td>
                                <el-radio v-model="zftype" label="银行卡" border>银行卡</el-radio>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: right" colspan="2">
                                <el-button @click="innerVisible = false">取 消</el-button>
                            </td>
                            <td style="text-align: left" colspan="2">
                                <el-button type="primary" @click="fukuan">提 交</el-button>
                            </td>
                        </tr>
                    </table>
                </div>
            </el-dialog>
            <div>
                <table style="width:100%;height:60px" border="0">
                    <tr style="height: 25px;">
                        <td>
                            应付:<font color="#409EFF">￥{{sum}}</font>
                        </td>
                        <td rowspan="2" width="10%">
                            <el-button v-if="sum!='0.00'" type="primary" @click="innerVisible = true">还款</el-button>
                            <el-button else v-else type="info">还款</el-button>
                        </td>
                    </tr>
                    <tr style="height: 25px;" v-if="leaveout!=''">
                        <td>
                            提前还款累计节省:<font>￥{{leaveout}}</font>
                        </td>

                    </tr>
                </table>


                <table v-for=" (yh,i) in yinhuan" style=";width: 100%;height: 50px;border-bottom: #666666 solid 1px" border="0">
                    <tr>
                        <td width="50%">

                            <div v-if="yh.yinhuan=='已还'">
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox :label="i" disabled>{{yh.yinhuan}}&nbsp;{{i+1}}/{{daimou}}期</el-checkbox>
                                </el-checkbox-group>

                            </div>
                            <div v-if="yh.yinhuan!='已还'">
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox :label="i" @change="qiuhe">{{yh.yinhuan}}&nbsp;{{i+1}}/{{daimou}}期</el-checkbox>
                                </el-checkbox-group>
                            </div>

                        </td>

                        <td v-if="yh.yinhuan=='已还'" style="text-align: right">
                            <el-tag style="width: 40%" type="info">{{yh.yinhuanDate}}&nbsp;已还</el-tag>
                        </td>


                        <td v-else style="text-align: right">
                            <el-tag style="width: 40%" type="info">{{yh.yinhuanDate}}&nbsp;待还</el-tag>
                        </td>

                    </tr>
                </table>

            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "pettyloanOrder",
        data(){
            return{

                zftype:'支付宝',//还款方式


                sum:'0.00',//应付总额

                leaveout:'',//节省金额

                id:0,//订单编号
                daimou:0,//贷款期数
                dai:0,//利率前单应还总额
                daililv:0,//利率后单期应还
                yihuannum:0,//选择还款期数

                nei:false,//最内层对话框
                outerVisible: false,//外层对话框
                innerVisible: false,//内层对话框

                activeName: 'first',//标签页

                smallhuankuan:[],//历史全部订单

                pettyloan:[],//小额贷款订单

                yinhuan:[],//贷款期数信息

                checkList:[]//期数勾选复选框
            }
        },
        mounted() {
            this.axios({
                url:"http://localhost:10086/selectBigdaiOrder",
                method:"POST",
                withCredentials: true,
                data:{}
            }).then(res=>{

                res.data.forEach(ele => {

                    let date=new Date(ele.daiDate);
                    let y=date.getFullYear();
                    let M=(date.getMonth()+1);
                    let d=date.getDate();
                    this.pettyloan.push({"boid":ele.boid,"bdname":ele.bdname,"daimoney":ele.daimoney,"mou":ele.mou,
                        "yihuan":ele.yihuan,"daiDate":y+"-"+M+"-"+d,"onemoney":ele.onemoney,"status":ele.status});
                })
            })

            this.axios({
                url:"http://localhost:10086/selectbighuankuan",
                method:"POST",
                withCredentials: true,
                data:{}
            }).then(res=>{
                res.data.forEach(ele=>{
                    let date=new Date(ele.huanDate);
                    let y=date.getFullYear();
                    let M=(date.getMonth()+1);
                    let d=date.getDate();
                    this.smallhuankuan.push({"hid":ele.hid,"boid":ele.boid,"liushui":ele.liushui,"zhifutype":ele.zhifutype,"money":ele.money,"huanDate":y+"-"+M+"-"+d})
                })
            })
        },
        methods:{
            handleSizeChange(val) {
                alert(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                alert(`当前页: ${val}`);
            }
            ,
            //选择付款方式后付款
            fukuan(){
                alert(this.id)
                alert(this.zftype)
                alert(this.sum)
                alert(this.yihuannum)

                this.axios({
                    url:"http://localhost:10086/addbigrepayment",
                    method:"POST",
                    withCredentials: true,
                    data:{
                        id:this.id,
                        zftype:this.zftype,
                        sum:this.sum,
                        yihuannum:this.yihuannum,
                    }
                }).then(res=>{
                    const h = this.$createElement;

                    this.$notify({
                        title: '成功',
                        message: h('i', { style: 'color: teal'}, '还款成功！')
                    });
                    setTimeout(() => {
                        location. reload()
                    }, 1000);
                    this.isShow=!this.isShow
                }).catch(res=>{
                    const h = this.$createElement;

                    this.$notify({
                        title: '失败',
                        message: h('i', { style: 'color: teal'}, '还款失败！')
                    });
                })

            },
            //关闭对话框时清空数据
            close(){
                this.sum='0.00';

                this.leaveout='';

                this.daimou=0;
                this.dai=0;
                this.daililv=0;
                this.checkList=[];
            },
            //勾选期数计算应还总额和节省金额
            qiuhe(){
                let i=this.checkList.length;
                let o=0;
                let num=0;
                if (i>1){

                    o=this.daililv;
                    num=(this.dai/this.daimou)
                    this.sum=(num*(i-1))+o;
                    this.sum=this.sum.toFixed(2);
                    this.leaveout=((i*this.daililv)-this.sum);
                    this.leaveout=this.leaveout.toFixed(2);
                    this.yihuannum=i;
                }else if(i==1){
                    this.sum=this.daililv;
                    this.leaveout=''
                    this.sum=this.sum.toFixed(2);
                    this.yihuannum=i;
                }else{
                    this.sum='0.00';
                    this.leaveout=''
                    this.yihuannum=0;
                }

            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            //点击订单查到订单信息并循环显示期数
            selectinfo(id,dai,daimou,daililv){
                this.id=id;
                this.dai=dai;
                this.daimou=daimou;
                this.daililv=daililv
                this.outerVisible = true;
                this.axios({
                    url:"http://localhost:10086/selectBigdaiOrderByid",
                    method:"POST",
                    withCredentials: true,
                    data:{
                        id:id
                    }
                }).then(res=>{
                    this.yinhuan=res.data
                })
            }
        }
    }
</script>

<style scoped>

</style>