<template>
  <div class="home" >

      <div style="text-align: left;margin-left: 10%;width: 20%;height: 600px;float: left;border: 0px solid red">

        <el-carousel height="150px">
          <el-carousel-item v-for="item in imgList" :key="item">
            <h3 class="small"><img :src="item.url" width="100%" alt/></h3>
          </el-carousel-item>
        </el-carousel>
        <br/>

        <font style="color: #409EFF;position: center;font:20px Extra large;">新闻中心</font><br/><hr/>
        <div v-for="my in xinwen">
        <ul style="list-style: none;line-height: 50px">



          <li><span style="position: absolute;margin-left: 19%;font-weight: 600;"><i style="color: rgba(213,59,33,0.85);"></i></span><a href="#" class="smallDai" style="font-size: 15px">{{my.newsTitle}}</a><br/><hr/></li>

        </ul> </div>
        <span style="margin-left: 58%"><a href="#" class="smallDai" style="font-size: 15px">了解更多>>></a></span>
      </div>

    <div style="text-align: left;width: 700px;margin-top:10px;margin-left:5%;float: left;border: 1px  red">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/about' }">当前位置：首页</el-breadcrumb-item>
    </el-breadcrumb>
      <br/>
    </div>

    <div v-show="this.$store.state.user.uid<0" style="border-radius: 8px;background-color: #409EFF;text-align: left;margin-left: 5%;width: 55%;height: 200px;float: left;border: 1px  blue">
      <br/>
      <div style="margin-left: 5%">
      <span style="font-size: 25px;font-weight: 600;color: Window">小额随心贷</span><br/>
      <span style="color: #666666">最高可借额度(元)</span><br>
      <h1 style="color: Window">50,000.00</h1><br>
      <span style="color: #666666">日利率<span style="color: Window">0.02%</span>起&nbsp;&nbsp;最快1分钟放款</span>
      </div>
      <div style="margin-top: -8%">
      <el-button @click="tologin" size="500px" style="font-size: 40px;color: #409EFF;font-weight: 500;margin-top: -100%;margin-left: 55%" round>立即登录</el-button>
      </div>
      </div>

    <div v-show="this.$store.state.user.uid>0" style="border-radius: 8px;background-color: #409EFF;text-align: left;margin-left:5%;width: 55%;height: 200px;float: left;border: 1px  blue">
      <br/>
      <div style="margin-left: 5%">
        <span style="font-size: 25px;font-weight: 600;color: Window">小额随心贷</span><br/>
        <span style="color: #666666">当前可借额度：</span><br>
        <h1 style="color: Window">{{smadaimsg.kejie}}</h1>
        <span style="color:#666666; font-size: 15px">总额度：<span style="color: Window">{{smadaimsg.zonged}}</span></span><br/>
        <span style="color: #666666">每月15日应还：</span>
        <h3 style="color: Window">{{smadaimsg.yinhuan}}</h3>
        <div style="margin-left: 26%;margin-top: -17%;text-align: center">
        <el-button size="500px" style="font-size: 40px;color: #409EFF;font-weight: 500;" @click="tosmalldai" round>立即借款</el-button><br/>
        <span style=""><a style="" href="#" class="smallDai" >提前还款</a>&nbsp;|&nbsp;<a style="font-size: 15px" href="#" class="smallDai" @click="tie">我要提额</a></span>
        </div>
      </div>
    </div>

    <div style="text-align: left;margin-left: 5%;width: 55%;margin-top: 10px;height: 350px;float: left;border: 1px  blue">
      <div style="height: 30px;background-color: #409EFF;color: Window;display: flex;align-items:center"><span style="margin-left: 10px">融资产品</span></div>

      <div v-for="dai in bigdai" style="float: left;font-size: 14px;margin-top: 18px;width: 50%">
        <table width="100%" border="0">
          <tr>
            <td rowspan="4"> <el-image style="width: 100px;height: 100px" :src="dai.url" fit="fill"></el-image></td>
            <td width="80%">产品名: <span style="font-weight: 600">{{dai.bdname}}</span></td>
            <td rowspan="4"><el-button type="primary" @click="tobigdaiinfo(dai.bdid)">查看详情</el-button></td>
          </tr>
          <tr><td>放款周期：{{dai.bddate}}个月</td></tr>
          <tr><td>放款金额：{{dai.small_money}}-{{dai.big_money}}</td></tr>
          <tr><td>利率（年利化率）：<span style="color: red">{{dai.interest}}%</span></td></tr>
        </table>
        <hr style="width:99%;background-color: yellow"/>
      </div>


      <div style="text-align: center;position: absolute;margin-left: 350px;margin-top: 280px">
        <el-pagination
              small
              layout="prev, pager, next"
              @current-change="selectbypage"
              :page-size="4"
              :total="bigdaipage.total">
      </el-pagination><div style="margin-top: -25px;margin-left: -250px"><a href="#" style="color: #409EFF" CLASS="smallDai" @click="tobigdai">查看更多</a></div>
      </div>
    </div>

    <div style="text-align: left;margin-left: 10%;width: 81%;margin-top: 10px;height: 390px;float: left;border: 0px solid blue">
      <el-tabs v-model="activeName" @tab-click="qiehuantype(activeName)">
        <el-tab-pane label="全部产品" name="">

          <div v-for="lc in licai" style="float: left;font-size: 14px;margin-top: 18px;margin-left:2%;margin-bottom:1%;width: 46%;margin-right: 1%;border-radius:7px 7px 7px 7px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
            <table style="width:100%;border-collapse: collapse;">
              <tr>
                <td>
                  <br>
                  <el-image style="width: 100px;height: 100px" :src="lc.url" fit="fill">

                  </el-image>
                </td>

                <td colspan="4" style="width:90%;"><span style="color: red;vertical-align: middle">{{lc.lctitle}}</span><el-button @click="tolicaiinfo(lc.mpid)" type="primary" style="float: right">去看看</el-button></td>
              </tr>

              <tr>
                <td>产品名</td>
                <td>产品类型</td>
                <td>收益产生周期</td>
                <td>利率（年利化率）</td>

                <td></td>
              </tr>
              <tr style="background-color: #FFFAFA;">
              <td><span style="font-weight: 600">{{lc.lcname}}</span></td>
              <td>{{lc.lctype}}</td>
              <td>{{lc.lcperiod}}个月</td>
              <td><span style="color: red">{{lc.lcrate}}%</span></td>
              <td></td>
            </tr>
              <tr>
                <td><br></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>

        </el-tab-pane>
        <el-tab-pane label="活期产品" name="活期">
          <div v-for="lc in licai" style="float: left;font-size: 14px;margin-top: 18px;margin-left:2%;margin-bottom:1%;width: 46%;margin-right: 1%;border-radius:7px 7px 7px 7px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
            <table style="width:100%;border-collapse: collapse;">
              <tr>
                <td>
                  <br>
                  <el-image style="width: 100px;height: 100px" :src="lc.url" fit="fill">

                  </el-image>
                </td>

                <td colspan="4" style="width:90%;"><span style="color: red;vertical-align: middle">{{lc.lctitle}}</span><el-button @click="tolicaiinfo(lc.mpid)" type="primary" style="float: right">去看看</el-button></td>
              </tr>

              <tr>
                <td>产品名</td>
                <td>产品类型</td>
                <td>收益产生周期</td>
                <td>利率（年利化率）</td>

                <td></td>
              </tr>
              <tr style="background-color: #FFFAFA;">
                <td><span style="font-weight: 600">{{lc.lcname}}</span></td>
                <td>{{lc.lctype}}</td>
                <td>{{lc.lcperiod}}个月</td>
                <td><span style="color: red">{{lc.lcrate}}%</span></td>
                <td></td>
              </tr>
              <tr>
                <td><br></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="定期产品" name="定期">
          <div v-for="lc in licai" style="float: left;font-size: 14px;margin-top: 18px;margin-left:2%;margin-bottom:1%;width: 46%;margin-right: 1%;border-radius:7px 7px 7px 7px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
            <table style="width:100%;border-collapse: collapse;">
              <tr>
                <td>
                  <br>
                  <el-image style="width: 100px;height: 100px" :src="lc.url" fit="fill">

                  </el-image>
                </td>

                <td colspan="4" style="width:90%;"><span style="color: red;vertical-align: middle">{{lc.lctitle}}</span><el-button @click="tolicaiinfo(lc.mpid)" type="primary" style="float: right">去看看</el-button></td>
              </tr>

              <tr>
                <td>产品名</td>
                <td>产品类型</td>
                <td>收益产生周期</td>
                <td>利率（年利化率）</td>

                <td></td>
              </tr>
              <tr style="background-color: #FFFAFA;">
                <td><span style="font-weight: 600">{{lc.lcname}}</span></td>
                <td>{{lc.lctype}}</td>
                <td>{{lc.lcperiod}}个月</td>
                <td><span style="color: red">{{lc.lcrate}}%</span></td>
                <td></td>
              </tr>
              <tr>
                <td><br></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
      </el-tabs>
      <br>
      <br>
      <div style="text-align: center;position: absolute;margin-left: 550px;margin-top: -30px">
      <el-pagination
              small
              layout="prev, pager, next"
              @current-change="getallmoneypro"
              :page-size="2"
              :current-page.sync="lcpageno"
              :total="licaipage.total">
      </el-pagination><div style="margin-top: -25px;margin-left: -250px"><a href="#" style="color: #409EFF" CLASS="smallDai" @click="tolicai">查看更多</a></div>
      </div>
      <hr>
</div>


    <div style="position: fixed;margin-top: 18%;margin-left: 92%"><a href="#" @click="tokefu"><img src="../../assets/在线客服.png"></a></div>
      </div>
</template>

<script>
// @ is an alias to /src
import Bottom from "@/components/lg/Bottom";

export default {
  name: 'Home',
  methods:{
<<<<<<< HEAD
      //新闻查看
      show:function(){
          this.axios.get('http://localhost:10086/selectAll').then(res=>{
           this.xinwen=res.data;
          })
      },



=======
    qiehuantype(val){
      this.licaitype=val;
      if(val==0){
        this.licaitype="";
      }
      this.getallmoneypro(1)
      this.lcpageno=1;
    },
    getallmoneypro(val){
      console.log("发起请求获得理财信息：")
      this.axios({url:'http://localhost:10086/moneypro_home',method:"post",withCredentials:true,data:{seach_mptype:this.licaitype,pageNo:val,pageSize:2}}).then(res=>{
        var result=new Array();
        for (var i = 0; i <res.data.data.length ; i++) {
          var chil={
            lcname:res.data.data[i].mpname,
            lctype:res.data.data[i].mptype,
            lcperiod:res.data.data[i].zhouqi,
            lcrate:res.data.data[i].income,
            lctitle:res.data.data[i].mpTitle,
            mpid:res.data.data[i].mpid,
            url: "http://localhost:10086/img/"+res.data.data[i].mppath
          }
          result.push(chil)
        }
        this.licaipage.total=res.data.totalRecords;
        this.licai=result;
      })
    },
>>>>>>> 3e15133550e4636cc6c79ca76f29dc38172b75ef
    selectbypage(val){
      console.log("发起请求获得大额贷款信息：")
      this.axios({url:'http://localhost:10086/bigdaiall_home',method:"post",withCredentials:true,data:{pageNo:val,pageSize:4}}).then(res=>{
        var result=new Array();
        for (var i = 0; i <res.data.data.length ; i++) {
          var chil={
            bdname:res.data.data[i].big.bdname,
            interest:res.data.data[i].big.interest,
            bddate:res.data.data[i].big.bddate,
            small_money:res.data.data[i].big.smallMoney,
            big_money:res.data.data[i].big.bigMoney,
            bdid:res.data.data[i].big.bdid,
            url: "http://localhost:10086/img/"+res.data.data[i].big.bdpath
          }
          result.push(chil)
        }
        this.lcpageno=res.data.pageNo,
        this.bigdaipage.total=res.data.totalRecords;
        this.bigdai=result;
      });
    },
    tie(){
      this.$confirm('完成学历认证，车辆认证，房屋认证后额度会进一步提升，是否前往认证', '提示', {
        confirmButtonText: '前往认证',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$router.push({path: '/attestation_education', query: {}});
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        });
      });
    },
    tologin:function () {
      this.$router.push({path: '/login', params: {}})
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tosmalldai(){
      this.$router.push({path: '/smallDai', params: {}});
    },
    tolicai(){
      this.$router.push({path: '/licai', params: {}});
    },
    tobigdaiinfo(val){
      this.$router.push({path: '/bigDai_info', query: {bdid:val}});
    },
    tolicaiinfo(val){
      this.$router.push({path: '/licai_info', query: {mpid:val}});
    },
    tobigdai(){
      this.$router.push({path: '/bigDai', params: {}});
    },
    tokefu(){
      this.$router.push({path: '/about', params: {}});
    },
    toMoney(num){
    num = num.toLocaleString();
    if(num.toString().indexOf('.')==-1){
      num=num+".00";
    }
    if(num.toString().split('.')[1].length==1){
      num=num+"0";
    }
    return num;//返回的是字符串23,245.12保留2位小数
    },
    smadaiinfo(){
      console.log("发起请求获得小额贷款：")
      this.axios({url:'http://localhost:10086/smalldai_home',method:"post",withCredentials:true}).then(res=>{
        console.log("返回数据："+res.data)
        this.smadaimsg.kejie = this.toMoney(res.data.newedu);
        this.smadaimsg.zonged =this.toMoney(res.data.user.smalldai);
        this.smadaimsg.yinhuan=this.toMoney(res.data.onehuan);
      });
    }
  },

  data:function() {
    return {
      xinwen:[],//存放新闻

      smadaimsg:{
        zonged:'',
        kejie:'',
        yinhuan:''
      },
      bigdaipage:{
        total:'',
      },
      licaipage:{
        total:'',
      },
      activeName: '',
      // 图片地址数组
      imgList: [
        {
          url: require("../../assets/timg.jpg")
        },
        {
          url: require("../../assets/timg (1).jpg")
        },
        {
          url: require("../../assets/timg (2).jpg")
        }
      ],
      bigdai:[
      ],
      lcpageno:1,
      licaitype:'',
      licai:[
      ],
    }
  },

  created(){
    this.smadaiinfo();
    this.selectbypage(1);
<<<<<<< HEAD
    this.PageRefresh();
    this.show();
=======
    this.getallmoneypro(1);
>>>>>>> 3e15133550e4636cc6c79ca76f29dc38172b75ef
  },
  components: {
    Bottom
  }
}
</script>

<style scoped>

  .tb1{
    border: #F5F5F5 solid 1px;
  }
  .smallDai:link{
    text-decoration: none;
  }
  .smallDai:hover{
    text-decoration: underline;
  }
</style>
