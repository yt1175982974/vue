<template>
	<div class="footer">
		<div class="foot">
			<div class="footer-paging">
				<a class="previous-page" @click="changePage(-1)">上一页</a>
				<span class="paging-number">{{$store.state.number}}</span>
				<a class="previous-page" @click="changePage(1)">下一页</a>
			</div>
			<div class="footer-name">
				到这儿门票
			</div>
		</div>
	</div>
</template>

<script>

	export default {
   		data () {
	    	return {
	    		page:1
	    	}
	    },
	    methods: {
	    	changePage(flag) {
	    		var numberPage=this.$store.state.number;
	    		if(flag==-1){
	    			var pageIndex=--numberPage;
	    			this.page=pageIndex<=1 ? 1 : pageIndex;
	    		}else {
	    			this.page=++numberPage;
	    		}    		
	    		this.$store.commit("changePageNum", {pageNum:this.page});
	    		this.$router.push("/search/"+this.page);
	    		window.scrollTo(0, 0);
	    	}
	    }
	}
	
</script>

<style>
	.footer {
		padding: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	}
	.footer-paging {
		line-height: .7rem;
	}
	.previous-page {
		display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.paging-number {
		color: #212121;
	    line-height: .6rem;
	    padding: 0 15px;
	}
	.footer-name {
		padding-top: .2rem;
	    line-height: .3rem;
	    font-size: .3rem;
	}
</style>