<template>
	<div class="main">
		<!--<div class="main-filter" @scroll="handleScroll"  ref="mainFilter">
			<div :class="{'filter-sort':isA, 'filter-sorts':!isA}" style="border-right: 1px solid #e7e7e7;" @click="handleClick">
				<span class="sort-select" ref="up">全部分类</span>
				<div class="">
					
				</div>
			</div>
			<div :class="{'filter-right':isB, 'filter-rights':!isB}" @click="handleClicks" >
				<span class="sort-select">推荐排序</span>
			</div>
		</div>-->
		<div class="classify">
			<div class="nav" ref="nav" :class='{"primary-position":primaryStyle}'>    
		        <div class="filter">
		            <div class="all-categories select" ref="all" @click="searchclick">
		                <span class="select-caption">全部分类</span>
		            </div>
		            <div class="recommended-sort select"  ref="sort" @click="menuclick">
		                 <span class="select-caption">推荐排序</span>
		            </div>
		        </div> 
		        <div class="mask" ref="mask" @click="clickmask"></div>
		        <div class="menu" ref="menu">
		            <div class="sort checked" >推荐排序</div>
		            <div class="sort" >离我最近</div>
		            <div class="sort" >人气最高</div>
		        </div>
		        <div class="menu-inner-left" ref="left">
		            <iscroll-view class="scroll-view" id="iscrollB"> 
		                <div class="menu-inner">
		                    <div class="menu-item menu-item-bottom" ref="itemcolor":class='{ "checked":check[index]}' @click="handleclick(index)"  v-for="(item, index) in this.categories">
		                            <img :src="item.imgURL" class="menu-item-icon">
		                                                    {{item.name}}
		                            <span class="menu-item-num">{{item.number}}</span>
		                    </div>
		                </div>
		            </iscroll-view>
		        </div>
		          
		        <div class="menu-inner-right" ref="right">
		            <iscroll-view class="scroll-view" id="iscrollA"> 
		                <div class="menu-inner">
		                    <div class="menu-item" v-for="item in this.detail">
		                         {{item.name}}
		                        <span class="menu-item-num">{{item.number}}</span>
		                    </div>
		                </div> 
		            </iscroll-view>
		        </div>
			</div>
		</div>
		

		<main-view :contInfo="contentInfo"></main-view>
		<!--往子组件里传数据-->
	</div>

</template>

<script>
	import mainview from "./view.vue"
	import Vue from 'vue'
	import IScrollView from 'vue-iscroll-view'
	import IScroll from 'iscroll'
	
	Vue.use(IScrollView, IScroll)
	
	export default {
	    name: 'index',
	   		data () {
		    	return {
		      		contentInfo: [],
//		      		isA: true,
//		      		isB: trueflag:false,
		            Flag:false,
		            categories:[],
		            detail:[],
		            check:[true],
		            primaryStyle:false,
		    	};
		    },
		     updated(){
		        new IScroll('#iscrollA', {  scrollY: true, mouseWheel: false });
		        new IScroll('#iscrollB', {  scrollY: true, mouseWheel: false });
		    },
		  	created() {
				this.$http.get('/static/view'+this.$store.state.number+'.json').then(response => {
					var data = response.body.data;
					this.contentInfo = data.contentInfo;
				}, response => {});
	//			window.addEventListener('scroll', this.handleScroll);
				
				this.$http.get('./static/categories.json').then(response => {
		                 this.categories = response.body.data.categories;
		                 this.detail= response.body.data.categories[0].detail          
		            })
		        var h = 44;
		        window.onscroll = function(){
		            var Top = document.body.scrollTop || document.documentElement.scrollTop;
		            if( Top > h ){
		                this.primaryStyle = true;
		                this.$refs.nav.style.zIndex = "10";
		            }else{
		                this.primaryStyle = false;
		                this.$refs.nav.style.zIndex = "5";
		            }
		        }.bind(this)
			},
//			beforeDestroy() {
//				window.removeEventListener("scroll", this.handleScroll)
//			},
		    components: {
		    	"main-view": mainview		    	
		   	},
		   	watch:{
		   		'$route'(from,to){
		   			this.$http.get('/static/view'+this.$store.state.number+'.json').then(response => {
						var data = response.body.data;
						this.contentInfo = data.contentInfo;
					}, response => {});
		   		}
		   	},
		   	methods: {
//		   		handleScroll() {
//		   			let scrollTop = document.body.scrollTop,		   			 
//		   				mainDom = this.$refs.mainFilter,
//						offsetHeight = mainDom.offsetHeight?mainDom.offsetHeight:60;
//		   			if (scrollTop>=offsetHeight) {
//		   				mainDom.className = "main-filter-scroll"
//		   			}else {
//		   				mainDom.className = "main-filter"
//		   			}				
//		   		},
//		   		handleClick() {
//		   			this.isA = !this.isA;
//		   			document.styleSheets[0].addRule('.sort-select::before','transform: rotate(180deg)');
//					document.styleSheets[0].insertRule('.sort-select::before { transform: rotate(180deg)}', 0);
//		   		},
//		   		handleClicks() {
//		   			this.isB = !this.isB;
//		   		}
		   		handleclick(index){
		            this.check = [];
		            this.check[index] = true;
		            this.i = index;
		            this.$http.get('./static/categories.json').then(response => {
		                this.categories = response.body.data.categories;
		                this.detail= response.body.data.categories[this.i].detail;
		            })
		        },
		        clickmask() {
		            this.$refs.mask.style.display ="none";
		            this.$refs.left.style.display ="none"; 
		            this.$refs.right.style.display ="none";
		            this.$refs.menu.style.display = "none";
		            this.flag=false;
		            this.Flag=false;
		        },
		        searchclick() {
		            if (this.flag==false) {
		                this.$refs.left.style.display ="block"; 
		                this.$refs.right.style.display ="block";
		                this.$refs.menu.style.display = "none";
		                this.$refs.mask.style.display ="block";
		                this.flag=true;
		                this.Flag=false;
		            }else{
		                this.$refs.left.style.display ="none"; 
		                this.$refs.right.style.display ="none"; 
		                this.$refs.mask.style.display ="none";
		                this.flag=false;
		            }
		        },
		        menuclick() {
		             if (this.Flag==false) {    
		                this.$refs.menu.style.display = "block" ;
		                this.$refs.left.style.display ="none"; 
		                this.$refs.right.style.display ="none";
		                this.$refs.mask.style.display ="block";
		                this.Flag=true;
		                this.flag=false;
		            }else{
		                this.$refs.menu.style.display = "none"  
		                this.$refs.mask.style.display ="none";
		                this.Flag=false;
		            }
		        }
		   	}
	}

</script>

<style>
	.main {
		height: 100%;
		position: relative;
	}
	.classify {
		height: .8rem;
	}
	/*.main-filter {
	    height: .8rem;
	    background: white;
	    width: 100%;
	    border-bottom: 1px solid #e1e2eb;
	    background: #fff;
	}
	.main-filter-scroll{
		height: .8rem;
	    background: white;
	    width: 100%;
	    border-bottom: 1px solid #e1e2eb;
		background: #fff;
		position:fixed;
		top:0;
		z-Index:1;
	}
	.filter-sort {
		float: left;
		width: 49%;
	    overflow: hidden;
	    position: relative;
	    color: #212121;
	    line-height: .5rem;
	    text-align: center;
	    margin: 0.15rem 0;
	}
	.filter-sorts {
		float: left;
		width: 49%;
	    overflow: hidden;
	    position: relative;
	    color: #00afc7;
	    line-height: .5rem;
	    text-align: center;
	    margin: 0.15rem 0;
	}
	.filter-right {
		float: left;
		width: 49%;
	    overflow: hidden;
	    position: relative;
	    color: #212121;
	    line-height: .5rem;
	    text-align: center;
	    margin: 0.15rem 0;
	}
	.filter-rights {
		float: left;
		width: 49%;
	    overflow: hidden;
	    position: relative;
	    color: #00afc7;
	    line-height: .5rem;
	    text-align: center;
	    margin: 0.15rem 0;
	}
	.sort-select {
		position: relative;
	}
	.sort-select::before {
		content: "\0020";
	    position: absolute;
	    right: -.25rem;
	    top: .18rem;
	    width: 0;
	    height: 0;
	    margin-top: -.04rem;
	    border-left: .08rem solid transparent;
	    border-right: .08rem solid transparent;
	    border-top: .08rem solid #666;
	}*/
	.checked{
    background:#f1f1f1;
}
.scroll-view {
    touch-action: none;
    height: 239px;
    overflow: hidden;
}
.nav {	
    z-index:5;
    position: relative;
    width: 100%;
}
.primary-position {
    position: fixed;
    top: 0;
    left: 0;
}
.mask {
    top: 84px;
    display: block;
    background: rgba(0,0,0,0.45);
    position: fixed;
    display: none;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
}
.select {
    display: block;
    width: 50%;
    height: .8rem;
    overflow: hidden;
    position: relative;
    line-height: .8rem;
    text-align: center;
    float: left;
    border-bottom: 1px solid #eaeaea;
    background: white
}
.select-caption {
    position: relative;
    color: #212121;
    line-height: .8rem;
    text-align: center;
    white-space: nowrap;
}
.select::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: .02rem;
    height: 100%;
    background: -webkit-linear-gradient(top,#fff,#ccc,#fff);
}
.select-caption::after {
    content: "";
    position: absolute;
    right: -.25rem;
    top: .18rem;
    width: 0;
    height: 0;
    margin-top: -.04rem;
    border-left: .08rem solid transparent;
    border-right: .08rem solid transparent;
    border-top: .08rem solid #666;
}
.menu-inner-left {
    top: 40px;
    display: block;
    overflow: hidden;
    left: 0;
    width: 50%;
    height: 4.8rem;
    position: absolute;
    z-index:10;
    background: white;
    color: #212121;
    font-size: .28em;
    line-height: 1;
    display: none;
}
.menu-item-bottom {
    border-bottom: 1px solid #eaeaea;
}
.menu-inner-right {
    top: 40px;
    display: block;
    overflow: hidden;
    background: #f1f1f1;
    right: 0;
    width: 50%;
    height: 4.8rem;
    position: absolute;
    z-index: 10;
    display: none;
 }
.menu-item {
    position: relative;
    text-align: left;
    font-size: .24rem;
    padding-left: .3rem;
    line-height: .8rem;
    height: .8rem;
    overflow: hidden;
    color: #212121;
}
.menu-item-icon {
    width: .3rem;
    height: .3rem;
    vertical-align: middle;
    margin-right: .1rem;
}
.menu-item-num {
    float: right;
    margin-right: .2rem;
    font-size: .24rem;
    color: #9e9e9e;
    text-align: left;

}
.menu {
    overflow: hidden;
    top: 40px;
    left: 0px;
    position: absolute;
    z-index: 10;
    width: 100%;
    max-height: 4.8rem;
    background: white;
    display: none;
}
.sort {
    padding-left: .3rem;
    line-height: .8rem;
    height: .8rem;
    overflow: hidden;
    text-align: center;
    color: #212121;
    border-top: 1px solid #eaeaea;
}
</style>
