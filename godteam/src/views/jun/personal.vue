<template>
    <div style="height: 690px;">
        <div style="width: 20%;height: 80%;margin-left: 4%;margin-top: 0.7%;">
        <div style="margin-left:16%;border: #F5F5F5 solid 1px;box-shadow:#F8F8FF 2px 2px 5px 5px;width: 80%;height: 20%;border-radius:9px 9px 9px 9px;">
            <table style="width: 100%;height: 100%;">
                <tr>
                    <td style="width: 32%;text-align:center">
                        <img src="../../assets/jun/m5wnobiivna.jpg" style="width: 100%;border-radius:7px 7px 7px 7px;"/>
                    </td>
                    <td>
                        <span style="font-size: 130%;color:black">{{this.$store.state.user.username}}</span><br>
                        <span style="font-size: 9%;color: rgba(180,173,163,0.85)">可借额度:3000.00</span><br>
                        <span style="font-size: 9%;color: rgba(180,173,163,0.85)">15日代还:0.00</span>

                    </td>
                </tr>
            </table>
        </div>
            <div style="margin-left:12%;width: 85%;;margin-top:2%;border: red solid 0px">
                <el-row class="tac">
                    <el-col :span="12" style="width: 90%">
                        <el-menu
                                :default-active="$route.path"
                                class="el-menu-vertical-demo"
                                @open=""
                                @close="" router>
                            <el-menu-item index="/basics">
                                <i class="el-icon-s-custom"></i>
                                <span slot="title">基本信息</span>
                            </el-menu-item>
                            <el-menu-item index="/UpdatePass" >
                                <i class="el-icon-key"></i>
                                <span slot="title">修改密码</span>
                            </el-menu-item>
                            <el-menu-item index="/bankcard" >
                                <i class="el-icon-bank-card"></i>
                                <span slot="title">银行卡</span>
                            </el-menu-item>
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-s-order"></i>
                                    <span>贷款记录</span>
                                </template>
                                <el-menu-item-group >
                                    <el-menu-item index="/pettyloanOrder"> <i class="el-icon-document-remove"></i>小额贷款记录</el-menu-item>
                                    <el-menu-item index="/wholesaleOrder"> <i class="el-icon-document"></i>大额贷款记录</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                                <el-submenu index="2">
                                    <template slot="title">
                                        <i class="el-icon-medal"></i>
                                        <span>认证</span>
                                    </template>
                                    <el-menu-item-group >
                                        <el-menu-item index="/attestation_education"> <i class="el-icon-reading"></i>学历认证</el-menu-item>
                                        <el-menu-item index="/attestation_house"> <i class="el-icon-school"></i>房屋认证</el-menu-item>
                                        <el-menu-item index="/attestation_car"> <i class="el-icon-bicycle"></i>车辆认证</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>

                        </el-menu>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div style="width: 70%;float: right;margin-top:-36.4%;left:25%;height: 620px;position: absolute">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personal",
        data() {
            return {
                tabPosition: 'left'
            };
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>