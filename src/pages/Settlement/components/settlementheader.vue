<template>
        <div class="header iconfont">
            <router-link to="/daytripdetail">
    		<div class="headerback">&#xe615;</div>
            </router-link>
   		    <div class="headertitle">订单填写</div>
    		<div class="headerlogin" @click="loginshow">登录</div>
            <div class="alert2" v-show="show"><span class="alert2span" @click="loginshow">+</span>将要进入登录页</div>
        </div>
</template>
<script>
export default {
        data() {
                return {
                    show:false    
                }
        },

        methods:{
            loginshow(){
                this.show=!this.show;
            }
        }

    }
</script>

<style scoped>
 @import "../css/settlementheader.css"; 
@import "../../../assets/font/iconfont.css";
</style>