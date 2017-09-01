<template>
  <article class="article">
    <div class="search-history-title" v-show="showHistory">
      <span class="search-history-title-name">搜索历史</span>
      <span class="search-history-title-clear iconfont" v-on:click="handleClearClick">&#xe645;&nbsp;清除</span>
    </div>
    <div class="search-history-address">
      <ul class="history-address-item-list">
        <li v-for="item in historyAddress" class="history-address-item" @click="handleHistoryItemClick(item.id)">
          {{item.address}}
        </li>
      </ul>
    </div>
    <div class="search-hot-title">
      <span class="search-hot-title-name">热门搜索</span>
      <span class="search-hot-title-clear iconfont" v-on:click="handleRefreshClick">&#xe650;&nbsp;换一批</span>
    </div>
    <div class="search-hot-address">
      <div class="search-hot-top">
        <div class="search-hot-top-icon iconfont">&#xe607;</div>
        <div class="search-hot-top-address">
          <ul class="hot-top-list" v-bind:style="{top:topSize+'rem'}" ref="addressUl">
            <li v-for="item in hotTopData" :key="item.id" class="hot-top-item"
                @click="handleTopItemClick(item.detailsLink)">
              {{item.address}}
            </li>
          </ul>
        </div>
      </div>
      <div class="search-hot-bottom">
        <div class="search-hot-bottom-icon iconfont">&#xe89b;</div>
        <div class="search-hot-bottom-address">
          <ul class="hot-bottom-list" v-bind:style="{top:cityTopSize+'rem'}" ref="cityUl">
            <li v-for="item in hotBottomData" v-bind:key="item.id" class="hot-bottom-item"
                @click="handleBottomItemClick(item.link)">
              {{item.city}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-nearby">
      <div class="search-nearby-content" @click="handleSearchNearby">搜索身边的景点</div>
    </div>
  </article>
</template>

<script>


  export default {
    props: ['search', 'hotTopData', 'hotBottomData'],
    created: function () {
      if (localStorage.history) {
        this.historyAddress = JSON.parse(localStorage.history);
      }
    },
    data () {
      return {
        historyAddress: [],
        topSize: 0,
        cityTopSize: 0,
        addressOffsetHeight: 0,
        cityOffsetHeight: 0
      }
    },
    watch: {
      search: function () {
        console.log('city:' + this.$store.state.inputSearch);
        var id = 0;
        var searchId = 0;
        var flag = false;
        if (localStorage.history) {
          this.historyAddress = JSON.parse(localStorage.history);
          for (var i = 0; i < this.historyAddress.length; i++) {
            if (this.historyAddress[i].address == this.search) {
              flag = true;
              searchId = this.historyAddress[i].id;
              break;
            }
          }
          if (!flag) {
            id = parseInt(this.historyAddress[this.historyAddress.length - 1].id, 10);
          }
        }
        if (!flag) {
          id = ++id;
          this.historyAddress.push({id: id, address: this.search});
          localStorage.history = JSON.stringify(this.historyAddress);
          searchId = id;
        }
        this.$store.commit("changeInputSearch", "");
        this.$router.push("/search/" + searchId);
      }
    },
    methods: {
      handleHistoryItemClick: function (index) {
        this.$router.push("/search/" + index);
      },
      handleTopItemClick: function (detailsLink) {
        this.$router.push(detailsLink);
      },
      handleBottomItemClick: function (link) {
        this.$router.push(link);
      },
      handleClearClick: function () {
        try {
          localStorage.clear();
          this.historyAddress.splice(0, this.historyAddress.length);
          this.$emit('handleClear', '');
        } catch (e) {
        }
      },
      handleRefreshClick: function () {
        this.topSize -= 1.72;
        this.cityTopSize -= 0.8;
        var topAddress = Math.abs(this.topSize);
        var bottomCity = Math.abs(this.cityTopSize);
        if (this.addressOffsetHeight <= topAddress) {
          this.topSize = 0;
        }
        if (this.cityOffsetHeight <= bottomCity) {
          this.cityTopSize = 0;
        }
      },
      handleSearchNearby: function () {
        this.$router.push('search/附近');
      }
    },
    computed: {
      showHistory: function () {
        if (this.historyAddress.length > 0) {
          return true;
        } else {
          return false;
        }
      }
    },
    mounted(){
      var this_ = this;
      setTimeout(function () {
        this_.addressOffsetHeight = this_.$refs.addressUl.offsetHeight / 50;
        this_.cityOffsetHeight = this_.$refs.cityUl.offsetHeight / 50;
      }, 100)
    }
  }
</script>

<style scoped>
  @import "../../assets/font/iconfont.css";
  @import "../../assets/css/page/beforesearch/beforesearch.css";
</style>
