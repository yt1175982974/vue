<template>
  	<div class="tagfilter-container" >
  		<h3 class="tagfilter-title" ref="title" >
  			游玩景点
  			<span class="tagfilter-subtitle">(可多选)</span>
  		</h3>
  		<div class="tagfilter-list" :class="{'listActive':isActive }" id="wrapper" ref="wrapper">            
  			<ul :class="{ 'lists': true, 'scroller':true, 'listsActive':itemActive[0] } " class="tagfilter-inner" ref="lists">
 	    		<li :class="{'list': true, itemActive: itemActive[index]}" class="tagfilter-item" v-for="(item, index) in scenicSpots" @click="choice(index)" :key="item.id" ref="list"> 
                    <span :class="{'txtActive': itemActive[index] }" class="tagfilter-name" >{{item.bourn}}</span>
                </li>
  			</ul>
  		</div>
  		<div class="tagfilter-expand mpf-border-left" ref="transfer" @click="handleclick">
  			<span class="iconfont">&#xe62d;</span>
  		</div>
  	</div>
</template>

<script>
import "../../../../assets/js/iscroll-lite.js";
  	export default {
    	data () {
      		return {
                isActive: false,
                itemActiveCount:0,
                itemActive:[],
                ListWidth:0
            }
    	},
        props: ["scenicSpots", "datas"],
        updated(){
            if(ListWidth) return;
            let ListWidth = 0;
            if(this.$refs.list){
                this.$refs.list.forEach(item => {
                    ListWidth += item.offsetWidth
                })
                this.ListWidth = ListWidth + 40 + "px";
                this.$refs.lists.style.width = this.ListWidth;
            };
            this.$refs.wrapper.height = window.innerHeight - 80 + "px";
            this.setNewScroll(scrollX = true, scrollY = false);
        },
        methods: {
            handleclick() {
                let boxHeight = this.$refs.wrapper.style.height;
                if(boxHeight < 30){
                    this.$refs.transfer.style.transform = 'rotate(180deg)';
                    boxHeight = window.innerHeight -60 +'px';
                    this.$refs.lists.style.width = window.innerWidth - 15 + 'px';
                    this.$refs.lists.style.border = "1px solid #ccc";
                    this.$refs.wrapper.style.height = boxHeight;
                    this.$refs.title.style.display = 'block';
                    this.$refs.wrapper.style.position = "absolute";
                    this.$refs.wrapper.style.width = window.innerWidth + 'px';
                    this.setNewScroll();
                }else{
                    this.$refs.lists.style.width = this.ListWidth;
                    this.$refs.wrapper.style.height = '';
                    this.$refs.transfer.style.transform = 'rotate(360deg)';
                    this.$refs.title.style.display = 'none';
                    this.$refs.lists.style.border = "none";
                    this.$refs.wrapper.style.position = "static";
                    this.setNewScroll(scrollX = true, scrollY = false);
                }
                this.isActive 
            },
            choice(index) {
                if( this.itemActive[ index ]){
                    // let checkedItem = this.scenicSpots.splice( index ,1)[0];
                    // this.scenicSpots.push(checkedItem);
                    this.itemActive[ -- this.itemActiveCount ] = false;
                }else{
                    // let checkedItem = this.scenicSpots.splice( index ,1)[0];
                    // this.scenicSpots.unshift(checkedItem);
                    this.itemActive[ this.itemActiveCount ++ ] = true;
                }
            },
            setNewScroll( scrollX = false, scrollY = true){
                if( this.scroll){
                    this.scroll.destroy();
                    this.scroll = null;
                }
                this.scroll = new IScroll('#wrapper', {  scrollX ,scrollY });
                setTimeout( () => this.scroll.refresh(), 500)
            }
        }
  	}
</script>

<style scoped>
.tagfilter-outer {
    height: .8rem;
    overflow: hidden;
}
.tagfilter-container {
    position: relative;
    z-index: 2;
    background: #e5e7e8;
}
.tagfilter-title {
    display: none;
    position: relative;
    z-index: 3;
    color: #212121;
    font-size: .28rem;
    line-height: .8rem;
    text-indent: .2rem;
}
.tagfilter-list {
    overflow: hidden;
    margin-right: .6rem;
    width: 100%;
    height: .68rem;
    max-height: 6rem;
    padding: .08rem .12rem;
    background:#e5e7e8;
}
.scroller{
	float: left;
}
.tagfilter-inner {
	list-style: none;
    overflow:hidden;
}
.tagfilter-item {
    float: left;
    position: relative;
    padding: .04rem .08rem;
    margin: .06rem 0;
}
.tagfilter-name {
    display: block;
    min-width: .26rem;
    padding: 0 .22rem;
    background: #fff;
    color: #212121;
    font-size: .26rem;
    line-height: .56rem;
    border-radius: .04rem;
}
.tagfilter-expand {
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    width: .8rem;
    line-height: .78rem;
    text-align: center;
    background: #e5e7e8;
}
.scroll-view {
    touch-action: none;
    overflow: hidden;
    height:308px;
}
.tagfilter-subtitle{
    font-size: 12px;
}
#wrapper{
    width: 82%;
    touch-action: none;
    overflow: hidden;
}
.itemActive{
    background: #00bcd4;
}
</style>
