<template>
  <div class="body-setHeight">
  	<headerComponent ></headerComponent>
    <listComponent v-on:theMenuHide="theMenuHide" v-on:theMenuShow="theMenuShow" :listContent="listContent" v-on:addContent="addContent"></listComponent>
  	<selectComponent :scenicSpots="scenicSpots" :datas="ibool"></selectComponent>
    <footerComponent :datas="ibool" :menuOne="menuOne" :menuTwo="menuTwo" :menuThree="menuThree"></footerComponent>
  </div>
</template>

<script>

import headerComponent from "./components/header.vue"
import selectComponent from "./components/select.vue"
import listComponent from "./components/list.vue"
import footerComponent from "./components/footer.vue"


export default {
    name: 'search',
    data () {
      return {
        ibool:true,
        scenicSpots:[],
        menuOne:[],
        menuTwo:[],
        menuThree:[],
        listContent:[],
       
      }
    },
    methods: {
      theMenuHide(ibool) {
        this.ibool = ibool;
      },
      theMenuShow(ibool) {
        this.ibool = ibool;
      },
      addContent() {
        this.$http.get('/static/theOneDayTripList.json').then(response => {
            var data = response.body.data;
            this.listContent = this.listContent.concat(data.listContent);
        }, response => {
            console.log("ajax error");
        });
      }
      
    },
    created() {
        this.$http.get('/static/theOneDayTripList.json').then(response => {
            var data = response.body.data;
            this.scenicSpots = data.scenicSpots;
            this.menuOne = data.menuOne;
            this.menuTwo = data.menuTwo;
            this.menuThree = data.menuThree;
            this.listContent = data.listContent;
        }, response => {
            console.log("ajax error");
        });
    },
    components: {
      headerComponent,
      selectComponent,
      listComponent,
      footerComponent
    }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
