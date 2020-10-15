<template>
<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal"
         @select="handleSelect"
         background-color="#409EFF"
         text-color="#fff"
         active-text-color="#ffd04b" router>
    <el-menu-item><img width="150" src="../../assets/招联金融.png"></el-menu-item>
    <el-menu-item index="/" class="el-icon-house">首页</el-menu-item>
    <el-submenu index="2" >
        <template slot="title"><span class="el-icon-bank-card"></span>贷款</template>
        <el-menu-item index="#" @click="tosmalldai">小额贷款</el-menu-item>
        <el-menu-item index="/bigDai">大额贷款</el-menu-item>
    </el-submenu>
    <el-menu-item index="/licai"><span class="el-icon-s-data"></span>理财</el-menu-item>


    <el-menu-item index="/about"><span class="el-icon-phone"></span>联系客服</el-menu-item>
    <el-menu-item index="/news"><span class="el-icon-document"></span>每日新闻</el-menu-item>


    <el-submenu index="6" style="margin-left: 30%">
        <template slot="title"><span class="el-icon-user"></span>个人中心</template>

        <el-menu-item index="/login" v-show="this.$store.state.user.uid<0"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="30"></el-avatar>&nbsp;&nbsp;登录/注册</el-menu-item>

        <el-menu-item index="/personal" v-show="this.$store.state.user.uid>0"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="30"></el-avatar>&nbsp;&nbsp;用户名：{{this.$store.state.user.username}}</el-menu-item>


        <el-menu-item index="attestation_education" v-show="this.$store.state.user.uid>0">学历信息</el-menu-item>
        <el-menu-item index="/attestation_car" v-show="this.$store.state.user.uid>0">车辆信息</el-menu-item>
        <el-menu-item index="attestation_house" v-show="this.$store.state.user.uid>0">房屋信息</el-menu-item>

        <el-menu-item index="/login" v-show="this.$store.state.user.uid<0">学历信息</el-menu-item>
        <el-menu-item index="/login" v-show="this.$store.state.user.uid<0">车辆信息</el-menu-item>
        <el-menu-item index="/login" v-show="this.$store.state.user.uid<0">房屋信息</el-menu-item>
        <el-menu-item @click="destory" index="/" v-show="this.$store.state.user.uid>0">注销</el-menu-item>
    </el-submenu>
</el-menu>
</template>
<script>
    export default {
        name:'NavMenu',
        data() {
            return {
                activeIndex: '1',
                user:{
                    uid:1,
                    username:"张三"
                }
            };
        },
        methods: {
            tosmalldai(){
                if(this.$store.state.user.uid<0){
                    this.$alert('请先登录', '提示', {
                        type: 'warning',
                        confirmButtonText: '确定',
                        callback: action => {
                        }
                    });
                }else {
                    this.$router.push({path: '/smallDai', query: {}});
                }
            },
            handleSelect(key, keyPath) {
            },
            destory(){
                this.axios.post("http://localhost:10086/logout").then(res=>{

                })
                location.reload();
            }
        }
    }
</script>
