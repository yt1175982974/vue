<template>
  <div>
  	<div class="footer"  v-show="datas" ref="menuFooter" >
  		<ul class="total-footer"  v-for="(menu, index) in listComponent" :key="menu.id" @click="handleClick(index)">
  			<li class="total-footer-menu" v-bind:class="{active: menu.isActive}" >
  				<span class="iconfont" v-html="menu.icon"></span><br>{{menu.title}}
  			</li>
  		</ul>
  	</div>
  	<div class="list-detail-shadow" v-show="shandowActive" v-on:click="handleClickClose"></div>
  	<div class="footer-total-list "  v-show="listComponent[0].isActive" >
  		<iscroll-view  class=" scroll-view3 item-left" id="footerList3" >
  		<div v-for="(menuOne, index) in menuOne" :key="menuOne.id">
  			<li class="item-left-list" :class="{listActive: menuOne.isActive }" @click="handleListClick(index)">
  				<p class="item-left-list-content">{{menuOne.title}}<span class="item-left-list-mark">{{menuOne.num}}</span></p> 
  			</li>	
  		</div>	
  		</iscroll-view >
  		<iscroll-view  class="list-content scroll-view5   " id="footerList5">
  			<div v-for="menuOneContent in menuFirstContent" :key="menuOneContent.contentId">
  				<li class="list-content-list">
  					<p>{{menuOneContent.title}}<span>{{menuOneContent.num}}</span></p>
  				</li>
  			</div>
  		</iscroll-view>
  	</div>
  	<div class="footer-total-list " v-show="listComponent[1].isActive">
  		<iscroll-view class="item-left scroll-view2" id="footerList2">
	  		<div v-for="(menuTwo, index) in menuTwo" :key="menuTwo.id">
	  			<li class="item-left-list" :class="{listActive : menuTwo.isActive}" @click="handleListTClick(index)">
	  				<p class="item-left-list-content">{{menuTwo.title}}</p> 
	  			</li>
	  		</div>
  		</iscroll-view>
  		<iscroll-view class="list-content scroll-view4   " id="footerList4">
  			<div v-for="menuTwoContent in menuSecondContent" :key="menuTwoContent.contentId">
  				<li class="list-content-list"><p>{{menuTwoContent.title}}</p></li>
  			</div>
  		</iscroll-view>
  	</div>
  	<iscroll-view class="footer-total-list scroll-view1 " id="footerList" v-show="listComponent[2].isActive">
  		<ol class="list-content-hot" >
	  		<div v-for="(menuThree, index) in menuThree" :key="menuThree.id">
	  			<li class="list-content-hot-list" :class="{listActive : menuThree.isActive}" @click="handleListSClick(index)">
	  				<p>{{menuThree.title}}</p>
	  			</li>
	  		</div>
  		</ol>
  	</iscroll-view>
  </div>
</template>

<script>
  	const listComponent = [{
	      		id: 0,
	      		title: "全部分类",
	      		icon: "&#xe8a1;",
	      		isActive: false

	      	},{
	      		id: 1,
	      		title: "筛选",
	      		icon: "&#xe640;",
	      		isActive: false
	      	},{
	      		id: 2,
	      		title: "推荐排序",
	      		icon: "&#xe60e;",
	      		isActive: false
	      	}]                                                                                                                            
  export default {
  	props: ["datas", "menuOne", "menuTwo", "menuThree"],
    data() {
      return {
      	index: 0,
      	isActive: false,
      	isShow: false,
      	shandowActive: false,
        theMenuShow: false,
        theMenuFooter:[],
        menuFirst:[],
        menuFirstContent:[],
        menuSecond:[],
        menuSecondContent:[],
        menuThird:[],
        id: 0,
        nextid: 0,
      	listComponent
      }
    },
    updated() {
    	new IScroll('#footerList',  {  scrollY: true, mouseWheel: true });
    	new IScroll('#footerList2', {  scrollY: true, mouseWheel: true });
    	new IScroll('#footerList3', {  scrollY: true, mouseWheel: true });
        new IScroll('#footerList4', {  scrollY: true, mouseWheel: true });
    	new IScroll('#footerList5', {  scrollY: true, mouseWheel: true });
    	
    	this.menuFirst = this.menuOne;
    	this.menuFirstContent = this.menuFirst[this.id].content;
    	this.menuSecond = this.menuTwo;
    	this.menuSecondContent = this.menuSecond[this.nextid].content;
    	this.menuThird = this.menuThree;
	
    },
    methods: {
    	handleClick(index) {
    		this.listComponent.forEach((value)=>{
    			if(value.id == index){
    				value.isActive = true;
    				this.isShow = true;
    				this.shandowActive = true;
    			}else{
    				value.isActive = false;
    			}
    		})
    	},
    	handleClickClose() {
    		this.listComponent.forEach((value)=>{
    			this.shandowActive = false;
    			value.isActive = false;
    		})
    	},
    	handleListClick(index) {
    		this.menuOne.forEach((value )=>{
    			if(value.id == index){
    				value.isActive = true;
    				this.id = index;
    			}else{
    				value.isActive = false;
    			}
    		})
    	},
    	handleListTClick(index) {
    		var this_ = this;
    		this.menuTwo.forEach((value)=>{
    			if(value.id == index){
    				value.isActive = true;
    				this.nextid = index;
    			}else{
    				value.isActive = false;
    			}
    		})
    	},
    	handleListSClick(index) {
    		var this_ = this;
    		this.menuThree.forEach((value )=>{
    			if(value.id == index){
    				value.isActive = true;
    				this_.listComponent[2].title = value.title;
	    			this_.listComponent.forEach((value)=>{
	    			this_.shandowActive = false;
	    			value.isActive = false;
	    			})
    			}else{
    				value.isActive = false;
    			}
    		})
    	}
    }
}
</script>


<style scoped>
	@import "../../../../assets/font/iconfont.css";
	li {
		list-style: none;
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: .02rem;
		font-size: .26rem;
		background: rgba(0, 0, 0, .8);
		color: #fff;
		z-index: 5;	
	}
	.total-footer {
		width: 100%;
		height: 100%;
	}
	.total-footer .total-footer-menu {
		float: left;
		width: 33.3%;
		padding: .02rem  0;
		margin: 0 auto;
		text-align: center;
		line-height: 1.5;
	}
	
	.footer .total-footer .active {
		color: #00afc7;
	}
	.footer-total-list {
		position: absolute;
		bottom: .9rem;
		width: 100%;
		height: 5rem;
		z-index: 4;
		overflow: hidden;	
	}
	.item-left {
		background: #f4f5f6;
		height: 20rem;
		overflow: hidden;
	}
	.item-left .item-left-list {
		width: 2.7rem;
		position: relative;
		font-size: .28rem;
		line-height: .4rem;
		color: #212121;
		border-bottom: .01rem solid #eaeced;	
	}
	.item-left .item-left-list .item-left-list-content {
		width: 100%;
		padding: .24rem .1rem;
	}
	.item-left .item-left-list .item-left-list-mark {
		position: absolute;
		top: 50%;
		right: .15rem;
		font-size: .18rem;
		margin-top: -.2rem;
	}
	.list-content {
		width: 100%;
		height: 10rem;
		position: absolute;
		left: 2.7rem;
        height: 10rem;
		background: #fff;
		overflow: hidden;
		
	}
	.list-content .list-content-list {
		position: relative;
		font-size: .28rem;
		line-height: .4rem;
		color: #212121;
		padding: .24rem 0;
		margin: 0 .2rem;
		border-bottom: .01rem solid #eee;
	}
	.list-content span{
		position: absolute;
		right: 3rem;
		top: 50%;
		font-size: .2rem;
		margin-top: -.2rem;
	}
	.list-detail-shadow {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0 , .5);
		z-index: 3;
	}
	#footerList {
		width: 100%;
		height: 5rem;
		background: #fff;
	}
	.list-content-hot {
		height: 6rem;
	}
	.list-content-hot .list-content-hot-list {
		text-align: center;
		font-size: .28rem;
		line-height: .4rem;
		color: #212121;
		padding: .24rem 0;
		margin: 0 .2rem;
		border-bottom: .01rem solid #eee;
	}
	.scroll-view1 {
	  	touch-action: none;
	  	height: 5rem;
	  	position: fixed; 	
	}
	.scroll-view2 {
	  	touch-action: none;
	  	height: 5rem;
	  	position: fixed; 	
	}
	.scroll-view3 {
	  	touch-action: none;
	  	height: 5rem;
	  	position: fixed;  	
	}
    .scroll-view4 {
        touch-action: none;
        height: 5rem;
        position: fixed;    
    }
    .scroll-view5 {
        touch-action: none;
        height: 5rem;
        position: fixed;   
    }
    .footer-total-list .listActive {
    	background:#fff;
    	color: #00afc7;
    }
</style>
