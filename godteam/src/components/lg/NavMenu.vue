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
        <el-menu-item index="2-1">小额贷款</el-menu-item>
        <el-menu-item index="2-2">大额贷款</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
        <template slot="title"><span class="el-icon-s-data"></span>理财</template>
        <el-menu-item index="3-1">活期</el-menu-item>
        <el-menu-item index="3-2">定期</el-menu-item>
    </el-submenu>
    <el-menu-item index="/about"><span class="el-icon-phone"></span>联系客服</el-menu-item>
    <el-menu-item index="5"><span class="el-icon-document"></span>每日新闻</el-menu-item>
    <el-submenu index="6" style="margin-left: 30%">
        <template slot="title"><span class="el-icon-user"></span>个人中心</template>
        <el-menu-item index="/login" v-show="this.$store.state.user.uid<0"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="30"></el-avatar>&nbsp;&nbsp;登录/注册</el-menu-item>

        <el-menu-item index="6-1" v-show="this.$store.state.user.uid>0"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="30"></el-avatar>&nbsp;&nbsp;用户名：{{this.$store.state.user.username}}</el-menu-item>
        <el-menu-item index="6-2" v-show="this.$store.state.user.uid>0">
            消息
            <el-badge :value="200" :max="99" style="margin-top: -5px;margin-left:5px"></el-badge>
        </el-menu-item>

        <el-menu-item index="6-3">学历信息</el-menu-item>
        <el-menu-item index="6-4">车辆信息</el-menu-item>
        <el-menu-item index="6-5">房屋信息</el-menu-item>
        <el-menu-item index="6-6" v-show="this.$store.state.user.uid>0">注销</el-menu-item>
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
            handleSelect(key, keyPath) {
            }
        }
    }
</script>
