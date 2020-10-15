<template>
  <div id="app">
    <div id="nav">
      <NavMenu></NavMenu>
      <router-view></router-view>

    </div>

    <Bottom ></Bottom>

  </div>
</template>

<style lang="stylus">
  *{ padding:0; margin:0;}
  body {margin:0; padding:0;}
</style>
<script>
  import Home from "@/views/lg/Home";
  import NavMenu from "@/components/lg/NavMenu";
  import Bottom from "@/components/lg/Bottom";
  export default {
    created(){
      this.PageRefresh();
    },
    components: {NavMenu, Home,Bottom},
    methods:{
      PageRefresh(){
        this.axios({
          url:"http://localhost:10086/refresh",
          method:"POST",
          withCredentials:true
        }).then(res=>{
          // alert("返回的数据："+res.data)
          this.$store.commit('updateisLogin',1);
          this.$store.commit('updateUserName',res.data.uname);
          this.$store.commit('updateUserUid',res.data.usersid);
          this.$store.commit('updateUserUid',res.data.usersid);
          this.$store.state.user.touxiang=res.data.petname;
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
        }).catch()
      }
    }
  }
</script>
