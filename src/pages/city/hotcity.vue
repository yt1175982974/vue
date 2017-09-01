<template>

    <div class="hotcity">
        <h1 class="hotcity-title">热门城市</h1> 
        <div class="hot-city-total">
            <router-link to="/">
                <span class="hot-city-list-each"
                  v-for="(citylist,index) in switchCityLists" 
                  :class="{'active':ind===index}"
                  @click="handleClickStore">
                    {{citylist.address}}
                </span>
            </router-link>           
        </div>           
    </div>
  
</template>

<script>
    export default {
        name: 'hotcity',
        data () {
            return {
             
                ind:'',
                citylists:[
                    {"address":"北京"},
                    {"address":"西安"},
                    {"address":"丽江"},
                    {"address":"三亚"},
                    {"address":"桂林"},
                    {"address":"成都"},
                    {"address":"上海"},
                    {"address":"西双版纳"},
                    {"address":"大理"},
                    {"address":"厦门"},
                    {"address":"长沙"},
                    {"address":"苏州"},
                    {"address":"昆明"},
                    {"address":"广州"},
                    {"address":"杭州"},
                    {"address":"重庆"}
                ],
                citylistsabord:[
                    {"address":"普吉岛"},
                    {"address":"清迈"},
                    {"address":"香港"},
                    {"address":"东京"},
                    {"address":"台北"},
                    {"address":"澳门"},
                    {"address":"巴厘岛"},
                    {"address":"曼谷"},
                    {"address":"芭提雅"},
                    {"address":"凯恩斯"},
                    {"address":"首尔"},
                    {"address":"新加坡"},
                    {"address":"济州岛"},
                    {"address":"迪拜"},
                    {"address":"沙巴"},
                    {"address":"苏梅岛"}
                ]
        
            }
        },
        methods:{
            handleClickStore(e) {
                var newCity = e.target.innerHTML
                localStorage.newCity = newCity
                this.$store.commit("changeCurrentCity",{
                    city:newCity
                })
            }
        },
        computed:{
            switchCityLists:function() {
                return this.$store.state.flag ?this.citylistsabord  :this.citylists
            }
        },
    }
</script>
<style scoped>
    .hotcity-title{
        height: .5rem;
        padding-left: .28rem;
        line-height: .5rem;
        font-weight: normal;
        font-size: .26rem;
        color: #626262;
        background: #f5f5f5;
    }
    .hotcity{
      overflow: hidden;
    }
    .hotcity .active{
        border: 1px solid #00aec7;
        color: #00aec7;
    }
    .hot-city-total{
        width: 100%;
        height: 5.08rem;
        padding-right: .5rem;
        border-top: 1px solid #c9cccd;
        border-bottom: 1px solid #c9cccd;
        background: #fff;
    }
    .hot-city-list-each{
        display: block;  
        width: 28%;
        float: left;
        margin-top: .23rem;
        margin-left: .16rem;
        line-height: .54rem;
        text-align: center;
        border: 1px solid #d4d4d4;
        border-radius: .06rem;
        font-size:.28rem ;
        color: #212121;
    }
</style>