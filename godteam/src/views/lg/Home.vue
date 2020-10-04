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
        <ul style="list-style: none;line-height: 50px">
          <li><span style="position: absolute;margin-left: 19%;font-weight: 600;"><i style="color: rgba(213,59,33,0.85);">1</i></span><a href="#" class="smallDai" style="font-size: 15px">招联金融五年=8精进的四条路径</a><br/><hr/></li>
          <li><span style="position: absolute;margin-left: 19%;font-weight: 600"><i style="color: rgba(55,134,213,0.85);">2</i></span><a href="#" class="smallDai" style="font-size: 15px">公司启动第二期“微光计划“</a><br/><hr/></li>
          <li><span style="position: absolute;margin-left: 19%;font-weight: 600"><i style="color: rgba(213,195,28,0.85);">3</i></span><a href="#" class="smallDai" style="font-size: 15px">招联金融向湖北疫区捐款600万元</a><br/><hr/></li>
          <li><span style="position: absolute;margin-left: 19%;"><i>4</i></span><a href="#" class="smallDai" style="font-size: 15px">招联金融首期金融债券成功发行</a><br/><hr/></li>
          <li><span style="position: absolute;margin-left: 19%;"><i>5</i></span><a href="#" class="smallDai" style="font-size: 15px">招联金融三项“硬科技”亮相2019年</a><br/><hr/></li>
          <li><span style="position: absolute;margin-left: 19%;"><i>6</i></span><a href="#" class="smallDai" style="font-size: 15px">贷款市场报价利率问答（Q&A）</a><br/><hr/></li>
          <li><span style="position: absolute;margin-left: 19%;"><i>7</i></span><a href="#" class="smallDai" style="font-size: 15px">识别与防范非法集资必备小知识</a><br/><hr/></li>
        </ul>
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
        <h1 style="color: Window">3,000.00</h1>
        <span style="color:#666666; font-size: 15px">总额度：<span style="color: Window">3,000.00</span></span><br/>
        <span style="color: #666666">每月15日应还：</span>
        <h3 style="color: Window">0.00</h3>
        <div style="margin-left: 26%;margin-top: -17%;text-align: center">
        <el-button size="500px" style="font-size: 40px;color: #409EFF;font-weight: 500;" @click="tosmalldai" round>立即借款</el-button><br/>
        <span style=""><a style="" href="#" class="smallDai" >提前还款</a>&nbsp;|&nbsp;<a style="font-size: 15px" href="#" class="smallDai">我要提额</a></span>
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
            <td rowspan="4"><el-button type="primary" @click="tobigdaiinfo">查看详情</el-button></td>
          </tr>
          <tr><td>放款周期：{{dai.bddate}}个月</td></tr>
          <tr><td>放款金额：{{dai.small_money}}-{{dai.big_money}}万</td></tr>
          <tr><td>利率（年利化率）：<span style="color: red">{{dai.interest}}%</span></td></tr>
        </table>
        <hr style="width:99%;background-color: yellow"/>
      </div>


      <div style="text-align: center;position: absolute;margin-left: 350px;margin-top: 280px">
        <el-pagination
              small
              layout="prev, pager, next"
              page-size="4"
              :total="20">
      </el-pagination><div style="margin-top: -25px;margin-left: -250px"><a href="#" style="color: #409EFF" CLASS="smallDai">查看更多</a></div>
      </div>
    </div>

    <div style="text-align: left;margin-left: 10%;width: 81%;margin-top: 10px;height: 390px;float: left;border: 0px solid blue">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部产品" name="second">

          <div v-for="lc in licai" style="float: left;font-size: 14px;margin-top: 18px;margin-left:2%;margin-bottom:1%;width: 46%;margin-right: 1%;border-radius:7px 7px 7px 7px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
            <table style="width:100%;border-collapse: collapse;">
              <tr>
                <td>
                  <br>
                  <el-image style="width: 100px;height: 100px" :src="lc.url" fit="fill">

                  </el-image>
                </td>

                <td colspan="4" style="width:90%;"><span style="color: red;vertical-align: middle">{{lc.lctitle}}</span><el-button @click="tolicaiinfo" type="primary" style="float: right">去看看</el-button></td>
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
              <td>{{lc.lcperiod}}</td>
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
        <el-tab-pane label="活期产品" name="first">
          <div v-for="lc in licai2" style="float: left;font-size: 14px;margin-top: 18px;margin-left:2%;margin-bottom:1%;width: 46%;margin-right: 1%;border-radius:7px 7px 7px 7px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
            <table style="width:100%;border-collapse: collapse;">
              <tr>
                <td>
                  <br>
                  <el-image style="width: 100px;height: 100px" :src="lc.url" fit="fill">

                  </el-image>
                </td>

                <td colspan="4" style="width:90%;"><span style="color: red;vertical-align: middle">{{lc.lctitle}}</span><el-button @click="tolicaiinfo" type="primary" style="float: right">去看看</el-button></td>
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
                <td>{{lc.lcperiod}}</td>
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
        <el-tab-pane label="定期产品" name="third">
          <div v-for="lc in licai" style="float: left;font-size: 14px;margin-top: 18px;margin-left:2%;margin-bottom:1%;width: 46%;margin-right: 1%;border-radius:7px 7px 7px 7px; box-shadow:#F8F8FF 2px 2px 5px 5px" class="tb1">
            <table style="width:100%;border-collapse: collapse;">
              <tr>
                <td>
                  <br>
                  <el-image style="width: 100px;height: 100px" :src="lc.url" fit="fill">

                  </el-image>
                </td>

                <td colspan="4" style="width:90%;"><span style="color: red;vertical-align: middle">{{lc.lctitle}}</span><el-button @click="tolicaiinfo" type="primary" style="float: right">去看看</el-button></td>
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
                <td>{{lc.lcperiod}}</td>
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
      <hr>


</div>


    <div style="position: fixed;margin-top: 18%;margin-left: 92%"><a href="#"><img src="../../assets/在线客服.png"></a></div>
      </div>
</template>

<script>
// @ is an alias to /src
import Bottom from "@/components/lg/Bottom";

export default {
  name: 'Home',
  created:function(){
    if(this.$store.state.user.isLogin!=0){
      this.PageRefresh();
    }
  }
,
  methods:{
    PageRefresh(){
      this.axios({
        url:"http://localhost:10086/refresh",
        method:"POST",
        withCredentials:true,

      }).then(res=>{
        alert("返回的数据："+res.data)
        this.$store.commit('updateUserName',res.data.uname);
        this.$store.commit('updateUserUid',res.data.usersid);
        alert(this.$store.state.user.uid+":"+this.$store.state.user.username)
        this.$router.push({path: '/', params: {}});
      }).catch()
    }
    ,
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
    tobigdaiinfo(){
      this.$router.push({path: '/bigDai_info', params: {}});
    },
    tolicaiinfo(){
      this.$router.push({path: '/licai_info', params: {}});
    }
  },
  data:function() {
    return {
      activeName: 'second',
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
        {
          bdname:"中行信用贷",
          interest:"0.03",
          bddate:"12",
          small_money:"10",
          big_money:"50",
          url: require("../../assets/中国银行.jpg")
        },
        {
          bdname:"农行信用贷",
          interest:"0.05",
          bddate:"12",
          small_money:"20",
          big_money:"100",
          url: require("../../assets/农业银行.jpg")
        },
        {
          bdname:"农行优惠贷",
          interest:"0.06",
          bddate:"24",
          small_money:"50",
          big_money:"200",
          url: require("../../assets/农业银行.jpg")
        },{
          bdname:"中行石油贷",
          interest:"0.03",
          bddate:"12",
          small_money:"10",
          big_money:"50",
          url: require("../../assets/中国银行.jpg")
        },
      ],
      licai:[
        {
          lcname:"安盈成长",
          lctype:"活期",
          lcperiod:"每天",
          lcrate:"5.16",
          lctitle:"1万元起购 | 1元追加 | 9：00-15：00实时交易",
          url: require("../../assets/中国银行.jpg")
        },
        {
          lcname:"天天盈",
          lctype:"活期",
          lcperiod:"每天",
          lcrate:"2.35",
          lctitle:"高流动性，高收益率，实时申赎！",
          url: require("../../assets/中国银行.jpg")
        }
      ],
      licai2:[
        {
          lcname:"安盈成长",
          lctype:"活期",
          lcperiod:"每天",
          lcrate:"5.16",
          lctitle:"1万元起购 | 1元追加 | 9：00-15：00实时交易",
          url: require("../../assets/农业银行.jpg")
        },
        {
          lcname:"天天盈",
          lctype:"活期",
          lcperiod:"每天",
          lcrate:"2.35",
          lctitle:"高流动性，高收益率，实时申赎！",
          url: require("../../assets/农业银行.jpg")
        }
      ]
    }
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
