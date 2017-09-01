<template>
        <div class="footerright iconfont">
    		<div class="submit" @click="submit">提交订单</div>
    		<div class="alert1" v-show="show"><span class="alertspan" @click="submit">+</span>提交成功</div>          
        </div>
</template>
<script>
export default {
        data() {
                return {
                        show: false
                }
        },
        methods: {
                submit() {
                        this.show = !this.show;
                }
        }
}
</script>

<style scoped>
@import "../css/footerright.css";
@import "../../../assets/font/iconfont.css";
</style>