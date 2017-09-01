<template>
    <div>
        <div class="footerleft iconfont" id="footerleft">
            <div class="money">产品价格￥</div>
            <div class="howmuch" id="howmuch">{{this.price*this.num}}</div>
            <span id="more" @click="block" v-show="show">&#xe615;</span>
            <span id="more2" v-show="close">&#xe615;</span>
            <div id="occlusion" @click="block2" v-show="close"></div>
        </div>
        <div id="mask" @click="block3" v-show="close"></div>
        <div id="details" v-show="close">
            <p id="detailsp"></p><br/>
            <span>￥</span>
            <span>{{this.price}}</span>
            <span>X</span>
            <span>{{this.num}}</span>
        </div>

    </div>
</template>
<script>
export default {

    data() {
        return {
            show: true,
            close: false,
            price: "",
        }
    },

    props: ["num"],

    created() {
        let data = localStorage.info;
        data = JSON.parse(data);
        if (data) {
            this.price = data.price;
        }
    },

    methods: {

        block() {
            let detailsp = document.getElementById("detailsp");
            detailsp.innerHTML = JSON.parse(window.localStorage.info).intro;
            this.show = !this.show;
            this.close = !this.close;
        },
        block2() {
            this.show = !this.show;
            this.close = !this.close;
        },
        block3() {
            this.show = !this.show;
            this.close = !this.close;
        }
    }

}
</script>

<style scoped>
@import "../css/footerleft.css";
@import "../../../assets/font/iconfont.css";
</style>