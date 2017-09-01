<template>
<div>
    <div class="ticket-group" v-for="(group, index) in groups" :groupId="index+'0'">
        <h3 class="ticket-group-title">
            <span class="title-icon"></span>
            {{group.title}} 
        </h3>
        <div class="ticket-type-list" v-for="(list,index) in group.list" :infoId="index+'0'">
            <div class="ticket-type-info" @click="handleInfoClick" >
                <h5 class="ticket-type-name">{{list.name}}</h5>
                <div class="ticket-type-price">
                    ￥<em class="price-num">{{list.price}}</em>
                    <span class="price-numword">起</span>
                </div>
                <div class="ticket-type-extend iconfont">&#xe62d;</div>
            </div>          
            <defaults :list="list.defaultInfo"></defaults>
        </div>
        <div class="ticket-refresh"  @click="handleRefresh">
            查看剩余产品<span class="ticket-refresh-icon iconfont">&#xe62d;</span>
        </div>
    </div>   
</div>

</template>

<script>
    import Defaults from './default'
    export default {
        props:["groups"],
        data () {
            return {
                isShow: false,
                isActive: false,
                isMore: true
            }
        },
        mounted() {
            
        },
        components: {
            "defaults" : Defaults,
        },
        methods:{
            handleInfoClick:function(e) {
                var target = e.currentTarget,
                    defaultsElem = target.nextElementSibling.firstElementChild;

                    if(this.isShow == false){
                        defaultsElem.style.display="flex"
                    }else{
                        defaultsElem.style.display="none"
                    } 
                    this.isShow = !this.isShow;            
            },
            handleRefresh:function(e) {
                var target = e.currentTarget;
                
                if(this.isMore == false){
                    target.style.display = "block"
                }else{
                    target.style.display = "none"
                }    
            }
        }

    }
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .ticket-group{
        margin-top: .2rem;
        background: #fff;
        position: relative;
    }
    .ticket-group-title{
        overflow: hidden;
        position: relative;
        z-index: 4;
        margin-bottom: -.02rem;
        padding: 0 .2rem;
        height: .88rem;
        background: #fff;
        color: #333;
        font-size: .32rem;
        line-height: .88rem;
        text-indent: .4rem;
        border-bottom: 1px solid #efefef;
    }
    .title-icon{
        display: inline-block;
        position: absolute;
        width: .36rem;
        height: .36rem;
        top: .26rem;
        left: .2rem;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    }
    .ticket-type-list{
        overflow: hidden;
        position: relative;
    }
    .ticket-type-info{
        overflow: hidden;
        position: relative;
        z-index: 2;
        margin-bottom: -.02rem;
        padding: .24rem .2rem;
        border-top: 1px solid #efefef;
    }
    .ticket-type-name{
        margin-right: 1.8rem;
        color: #333;
        font-size: .3rem;
        line-height: .48rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .ticket-type-price{ 
        overflow: hidden;
        position: absolute;
        top: 50%;
        height: .4rem;
        line-height: .4rem;
        right: .46rem;
        margin-top: -.28rem;
        color: #ff9800;
        font-size: .24rem;
    }
    .price-num{
        margin-left: .04rem;
        font-size: .36rem;
    }
    .price-numword{
        display: inline-block;
        color: #9e9e9e;
        font-size: .24rem;
        transform: scale(.8);         
    } 
    .ticket-type-extend{
        right: .2rem;
        margin-top: -.22rem;
        color: #bbb;
        font-size: .24rem;
        overflow: hidden;
        position: absolute;
        top: 50%;
        height: .4rem;
        line-height: .4rem;        
    }
    .ticket-refresh{
        position: relative;
        margin-top: -.02rem;
        height: .8rem;
        background: #fff;
        color: #616161;
        line-height: .8rem;
        text-align: center;
        z-index: 2;
        border-top: 1px solid #efefef;
    }
    .ticket-refresh-icon{
        margin-top: -.20rem;
        color: #bbb;
        font-size: .24rem;
        overflow: hidden;
        position: absolute;
        top: 50%;
        height: .4rem;
        line-height: .4rem; 
    }
</style>
