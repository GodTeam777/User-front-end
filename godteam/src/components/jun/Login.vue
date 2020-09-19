<template>
    <el-form ref="form" :model="user" label-width="80px" size="mini">
        <br>
        <el-form-item label="用户名:" style="width:320px">
           <el-input v-model="user.username"></el-input>
        </el-form-item>

        <el-form-item label="密码:" style="width:320px">
            <el-input v-model="user.userpsw"></el-input>
        </el-form-item>
        <verify style="width: 320px;margin-left:15px;"></verify>
        <br>
        <el-form-item size="large">
            <el-button style="margin-left: 18%" type="primary" @click="onSubmit">立即登录</el-button>
        </el-form-item>
    </el-form>

</template>

<script>
    import verify from "@/components/jun/verify";
    export default {
        data() {
            return {
                user: {
                    uid:1,
                    username: '',
                    userpsw: '',
                    huakaui:''
                }
            };
        },
        methods: {
            onSubmit() {
                if(this.user.username==""){
                    this.$message({
                                type:'info',
                                message: '请输入用户名'
                            });


                }else  if(this.user.userpsw==""){
                    this.$message({
                        type:'info',
                        message: '请输入密码'
                    });

                }else {
                    this.$store.commit('updateUser',this.user);
                    this.$router.push({path: '/', params: {}});

                }

                console.log('submit!');
            }
        },components:{
            verify
        }
    };
</script>

<style scoped>

</style>
