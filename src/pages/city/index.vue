<template>

    <div class="index">
        
        <index-header></index-header>     
        <Search v-on:onInput="handleOnInput"></Search>   
        <div class="none" v-show="show">
            <index-position></index-position>
            <Hotcity></Hotcity> 
            <StairsComponent></StairsComponent>
        </div>
        
    </div>

</template>

<script>
    import Hotcity from './hotcity.vue'
    import Search from './search.vue';
    import StairsComponent from './stairs.vue'
    import IndexHeader from './header.vue'
    import IndexPosition from './position.vue'
    export default {
        name: 'city',
        data () {
            return {
                show:true
            }
        },
        methods: {
            handleOnInput: function(e) {
                if(e.target.value) {
                    this.show = false;
                }else {
                    this.show = true;
                }
            }
        },
        components:{
            "index-header": IndexHeader,
            "index-position": IndexPosition,
            "Hotcity":Hotcity,
            "Search":Search,
            "StairsComponent": StairsComponent,
            "index-header": IndexHeader
        }
    }
</script>

<style scoped>
    .index {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }
</style>