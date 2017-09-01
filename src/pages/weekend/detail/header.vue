<template>
    <transition name="fade">
      	<header class="header detail-header" v-if="show">
            <router-link to="/weekend/index">
                <a class="header-back iconfont" href="javascript:;">&#xe615;</a>
            </router-link>
    	    <h1 class="header-title">超值热卖 来自地下三千米的温暖【温都水城两馆周末成人票】</h1>
    	</header>
    </transition>
</template>

<script>
	export default {
	    data () {
	      return {
            scroll: '',
            show: false  
          } 
	    },
        methods: {
           menu() {
            this.scroll = document.documentElement.scrollTop;
            this.scroll = document.body.scrollTop;
            if(this.scroll > 0){
                this.show = true;
            }else{
                this.show = false;
            }
            
           }
          },
          mounted() {
           window.addEventListener('scroll', this.menu);
        }
	}
</script>

<style scoped>
    @import "../../../assets/font/iconfont.css";
    .header {
        position: relative;
        height: .88rem;
        background: #00bcd4;
        z-index: 91;
    }
    .detail-header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
    }
    .header-left, .header-back {
        position: absolute;
        font-size: .36rem;
        color: #fff;
        text-align: center;
    }
    .header-back {
        left: .1rem;
        top: .1rem;
        width: .72rem;
        height: .72rem;
        line-height: .72rem;
        color: #fff;
    }
    .header-title {
        overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity 2s
    }
    .fade-enter, .fade-leave-to{
      opacity: 0
    }
</style>