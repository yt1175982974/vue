<template>
  <div>
  	    <index-header></index-header>
        <index-main></index-main>
  </div>
</template>

<script>
	import IndexHeader from './header.vue'
  import IndexMain from './main.vue'

  export default {
    name: 'index',
    data () {       
      return {}
    },
    components:{
    	"index-header" : IndexHeader,
      "index-main" : IndexMain
    }
  }

</script>

<style scoped>
</style>
