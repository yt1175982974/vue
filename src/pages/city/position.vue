<template>
    <div class="cityarea-group">
        <div class="cityarea-title">您的位置</div>
        <div class="cityarea-content"> 
            <div class="cityitem-light">
                <router-link to="/">
                <span class="cityitem"  @click="handleClickStore">{{$store.state.newCity}}</span>
                </router-link>
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    name: 'position',
    data () {
        return {}
    },
    methods: {
        handleClickStore(e) {
            var newCity = e.target.innerHTML
            localStorage.newCity = newCity
            this.$store.commit("changeCurrentCity",{
                city:newCity
            })
        }
    }
}
</script>

<style scoped>
    .cityarea-title {
        line-height: .54rem;
        padding-left: .3rem;
        color: #616161;
        font-size: .26rem;
        background: #f5f5f5;
    }
    .cityarea-content {
        border-top:.02rem solid #e0e0e0;
        border-bottom: .02rem solid #e0e0e0;
        line-height: .54rem;
        background: #fff;
    }
    .cityitem-light {
        margin:.2rem 0 0 .16rem;
    }
    .cityitem {
        display: inline-block;
        width:28%;
        padding:.02rem 0;
        border:.02rem solid #c9cccd;
        border-radius: .06rem;
        text-align: center;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow: hidden;
        font-size:.28rem;
        color: #212121;
    }
</style>