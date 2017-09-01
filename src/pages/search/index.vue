<template>
	<div class="page">
		<search-header></search-header>
	 	<search-main></search-main>
	 	<search-footer></search-footer>
	</div>
  
</template>

<script>
	import SearchHeader from "./header.vue"
	import SearchMain from "./main.vue"
	import SearchFooter from "./footer.vue"
	
  export default {
  	
    name: 'index',
   		data () {
	      return {}
	    },
	    components: {
	    	"search-header": SearchHeader,
	    	"search-main": SearchMain,
	    	"search-footer": SearchFooter
	   	}
  }
</script>

<style scoped>
	.page {
		width: 100%;
		min-height: 100%;
    background: #f5f5f5;
	}

</style>