<template>
    <div id="login" class="login" style="border: red  1px;height:660px;position: fixed;width:100%;">
        <div id="bodyBg" style="width: 100%;height:100%; ">

            <div style="position: fixed;background-color:white;height: 400px;width: 350px;margin-left: 70%;margin-top: 90px;border-radius: 6px;">
                <br>
                <div style="margin-left: 25px">
                <img src="../../assets/jun/5.png" alt="">
                </div>
                <login></login>
                <div style="margin-left: 23%">
                还没有账号？快去<router-link to="/reg/">注册</router-link>吧 <br>
                </div>
            </div>
            <transition enter-class="ss-enter"
                        enter-active-class="ss-enter-active"
                        leave-class="ss-leave"
                        leave-active-class="ss-leave-active">
                <div id="Guodu" v-show="show" onload="showw">
                        <p class="firstline" style="margin-top: 60px">您诚信 · 我普惠</p>
                        <p class="secondeline" style="height: 37px;">
                            招商银行与中国联通共同组建
                        </p>
                    <p class="thirdline">超1亿用户注册的持牌消费金融机构</p>
                </div>
            </transition>
        </div>

    </div>
</template>
<style>
#login{

    background: url("../../assets/jun/2.jpg") no-repeat;
    background-size:auto 660px;
}
.firstline {font-size:82px;line-height:82px;color:#fff;margin-bottom:25px;text-align:center;vertical-align: middle}
.secondeline{padding-left:10px;font-size:24px;color:#fff;border:1px solid #fff;border-radius:28px;text-align:center;width:98%;letter-spacing:17px}
#Guodu {height: 300px;width:600px;position: absolute;margin-left: 20%;margin-top: 8%;}
.thirdline {margin-top:25px;font-size:32px;line-height:32px;color:#fff;width:100%;text-align:center;letter-spacing:2px}
/*进入与离开激活样式 2秒 缓动*/
.ss-enter-active, .ss-leave-active {
    transition: 4s all ease;
}
/*当动画进入激活之后*/
.ss-enter-active {
    /*不透明性*/
    opacity: 1;

}
/*当动画离开激活之后*/
.ss-leave-active {
    /*不透明性*/
    opacity: 0;
}
/*过渡进入和离开时,透明度为0,宽高为都为100px*/
.ss-enter, .ss-leave {
    opacity: 0;
}

</style>

<script>
    import verify from "@/components/jun/verify.vue";
    import login from "@/components/jun/Login.vue";
    export default {
        data() {
            return {
               show:false
            };
        },
        components: {login,verify},
        methods: {
            reg() {
                this.$router.push({name: '/reg', params: {num: '1'}})
            },

        },mounted:function () {
            this.show=true
        }

    }
</script>
