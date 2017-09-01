<template>
  <header class="header">
    <a class="header-left iconfont" @click="handleGoBack">&#xe615;</a>
    <div class="header-title">
      <input class="search-input" @focus="inputFocusFunction" v-model="inputSearch"
             placeholder="输入城市和景点"
             autocomplete="off">
    </div>
    <div class="header-right">
      <span class="nav-city" v-on:click="handleSearch">搜索</span>
    </div>
  </header>
</template>

<script>
  export default {
    props: ["reset", "blurFlag"],
    data () {
      return {
        inputSearch: ''
      }
    },
    methods: {
      handleGoBack: function () {
        this.$router.go(-1);
      },
      //变量存储逻辑
      handleSearch: function () {
        (!this.inputSearch) && (this.inputSearch = '北京');
        this.$emit('handleChangeHistory', this.inputSearch);
      },
      inputFocusFunction: function () {
        this.$emit("focusListener");
      }
    },
    watch: {
      reset: function () {
        this.inputSearch = this.reset;
      },
      blurFlag: function () {
        if (this.blurFlag) {
          this.$emit("blurListener");
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/font/iconfont.css";

  .header {
    width: 100%;
    height: .88rem;
    position: relative;
    overflow: hidden;
    font-size: 0.1rem;
    color: #fff;
    background: #00bcd4;
    text-align: center;
  }

  .header-left {
    width: .4rem;
    line-height: .88rem;
    display: block;
    float: left;
    padding: 0 .2rem;
    font-size: .36rem;
    color: #fff;
    text-align: left;
  }

  .header-title {
    height: .6rem;
    line-height: .6rem;
    margin: .14rem 1.2rem .14rem .8rem;
    position: relative;
    background: #fff;
    border-radius: .06rem;
    text-align: left;
  }

  .header-right {
    line-height: .88rem;
    width: 1.2rem;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
  }

  .search-input {
    width: 100%;
    padding-left: 0.2rem;
    color: #212121;
    box-sizing: border-box;
    border: none;
  }
</style>
