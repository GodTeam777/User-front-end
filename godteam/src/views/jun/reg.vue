<template>


   <div id="reg" style="width:100%;height: 660px;">
       <div style="z-index:0;opacity:0.9;position:absolute;background-color:white;margin-left:24%;width:750px;height: 600px;border-radius:10px;">

       </div>
       <div style="z-index:0;opacity:0.2;position:absolute;background-color:white;margin-left:24%;width:750px;height: 600px;border-radius:10px;">

       </div>
       <div style="z-index:0;opacity:0.9;position:absolute;background-color:white;margin-left:24%;width:750px;height: 81px;border-radius:10px 10px 0px 0px;">

       </div>
       <div style="position:absolute;z-index:1;margin-left:24%;width:750px;height: 600px;border-radius:10px;">

           <router-view></router-view>
       </div>

   </div>
</template>

<script>

    export default {
        name: "reg",
        data:{

        }

    }
</script>
<style>
    #reg{
        background: url("../../assets/jun/2.jpg");
        background-size:auto 660px;
    }
</style>
