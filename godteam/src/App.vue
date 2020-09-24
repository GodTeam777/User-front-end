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
    components: {NavMenu, Home,Bottom}
  }
</script>
