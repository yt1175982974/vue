<template>
  <div class="outerBox" @click="handleBoxClick">
    <div class="index-box">
      <index-header
        :reset="resetSearch"
        :blurFlag="headerBlur"
        @handleChangeHistory="handleGetHistory"
        @focusListener="handleFocus"
        @blurListener="handleBlur"></index-header>
      <!--:search="inputSearch"-->
      <index-content
        :search="$store.state.inputSearch"
        :hotTopData="hotTopList"
        :hotBottomData="hotCityList"
        @handleClear="handleClearSearch"
        v-show="contentShow"></index-content>
    </div>
  </div>
</template>
<script>
  import IndexHeader from './before-header.vue';
  import IndexContent from './before-content.vue';
  export default {
    created() {
      this.$http.get('/static/hot_search.json').then(response => {
        var data = response.body.data;
        this.hotTopList = data.hotTopList;
        this.hotCityList = data.hotCityList;
      }, response => {
        console.log("ajax error");
      });
    },
    data () {
      return {
        hotTopList: [],
        hotCityList: [],
        inputSearch: '',
        resetSearch: '北京',
        contentShow: true,
        headerBlur: false
      }
    },
    components: {
      "index-header": IndexHeader,
      "index-content": IndexContent
    },
    methods: {
      handleGetHistory: function (search) {
//        this.inputSearch = search;
        this.$store.commit("changeInputSearch", search);
      },
      handleClearSearch: function (resetSearch) {
        this.resetSearch = resetSearch;
      },
      handleFocus: function () {
        this.contentShow = true;
        this.headerBlur = false;
      },
      handleBlur: function () {
        this.contentShow = false;
      },
      handleBoxClick: function (e) {
        if (e.target.className == 'outerBox') {
          this.headerBlur = true;
        } else {
          this.headerBlur = false;
        }
      }
    }
  }
</script>

<style scoped>
  .outerBox {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
