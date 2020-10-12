<template>
    <el-form ref="form" :model="user" label-width="80px" size="mini">
        <br>
        <el-form-item label="用户名:" style="width:320px">
           <el-input v-model="user.petname"></el-input>
        </el-form-item>

        <el-form-item label="密码:" style="width:320px">
            <el-input v-model="user.uspws"></el-input>
        </el-form-item>
        <verify style="width: 320px;margin-left:15px;" v-on:childByValue="childByValue"></verify>
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
                    petname: '',
                    uspws:'',
                    huakaui:false
                }
            };
        }
        ,
        methods: {
            childByValue: function (childValue) {
                // childValue就是子组件传过来的值
                this.user.huakaui = childValue
            },
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

                }else if(!this.user.huakaui){

                    this.$message({
                        type:'info',
                        message: '请完成验证'
                    });
                }
                else {
                    this.axios({
                        url:"http://localhost:10086/Login",
                        method:"POST",
                        withCredentials: true,
                        data:{
                            petname:this.user.petname,
                            uspws:this.user.uspws
                        }
                    }).then(res=>{

                      if(res.data.usersid>0){
                          this.$store.commit('updateisLogin',1);
                          this.$store.commit('updateUserName',res.data.uname);
                          this.$store.commit('updateUserUid',res.data.usersid);
                          this.$store.commit('updateUserUid',res.data.usersid);
                          this.$store.state.user.sex=res.data.sex;
                          this.$store.state.user.phone=res.data.phone;
                          this.$store.state.user.smalldai=res.data.smalldai;
                          let h=res.data.cardid;
                          this.$store.state.user.idcard=h.toString().substr(0,6)+"****"+h.toString().substr(10)
                          let d=new Date(res.data.birthday);
                          let year=d.getFullYear()
                          let month=d.getMonth()
                          let day=d.getDate()
                          this.$store.state.user.birthday=year+"-"+parseInt(month+1)+"-"+day
                          // alert("返回的数据："+this.$store.state.user.uid+":"+this.$store.state.user.username)
                          this.$router.push({path: '/', params: {}});
                      }else {
                          const h = this.$createElement;

                          this.$notify({
                              title: '失败',
                              message: h('i', { style: 'color: teal'}, '用户名或密码错误！')
                          });
                      }
                    }).catch()



                }


            }
        },components:{
            verify
        }
    };
</script>

<style scoped>

</style>
