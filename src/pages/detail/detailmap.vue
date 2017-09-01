<template>
    <div class="detailmap">
        <div class="header">
            <a class="header-left iconfont" @click="handleClose">&#xe615;</a>
            <h1 class="header-title">景点地图</h1>
        </div>
        <div id="map"></div>
        <div class="footer">
            <div class='footer-box'>
                <div class="footer-title">
                    <span class="footer-titleword">长隆水上乐园</span>
                    <span class="footer-titletag">景点</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data()  {
            return {}
        }, 
        mounted(){
            this.load()
        },
        methods:{
            load(){
                var map = new AMap.Map('map', {
                        city:'010',
                        resizeEnable: true,
                        zoom:15,
                        center: [113.324387,23.00167],
                        mapStyle:'amap://style/amap://styles/dark'
                });
                var marker = new AMap.Marker({
                    position: [113.324387,23.00167],
                    map:map
                });
                marker.setMap(map);

            },
            handleClose() {
                this.$emit("handleClickClose")
            } 
        }
    }
</script>
<style scoped>
    @import "../../assets/font/iconfont.css";
    .header {
        position: relative;
        height: .88rem;
        background: #00bcd4;
        z-index: 91;
    }
    .header-left{
        position: absolute;
        font-size: .36rem;
        color: #fff;
        text-align: center;
        left: 0;
        top: 0;
        width: .8rem;
        height: .88rem;
        line-height: .88rem;
    }
    .header-title{
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff
    }
    #map{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height:100%;
    }
  
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        margin-bottom: .06rem;
        z-index:1000;

    }
    .footer-box {
        display: block;
        margin: 0 .1rem;
        padding: .2rem;
        background: #fff;
        border-radius: 6px
    }
    .footer-title{
        display: inline-block;
        padding: .06rem 0;
        line-height: .32rem;
    }
    .footer-titleword{
        font-weight:bold;
        font-size:.32rem;
    }
    .footer-titletag{
        margin-left: .1rem;
        padding: .02rem .1rem;
        background: #00bcd4;
        color: #fff;
        font-size: .24rem;
    }
</style>