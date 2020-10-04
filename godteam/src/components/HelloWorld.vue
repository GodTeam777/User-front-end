<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button round type="success" @click="sendRequest">打开跨域请求</el-button>
    <p>返回：{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      msg : ""
    }
  },
  methods: {
    sendRequest:function(page,pageSize){
      console.log("发起新的请求：")
      this.axios.post('http://localhost:10086/goto_test').then(res=>{
        console.log("返回数据："+res.data)
        this.msg = res.data
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
