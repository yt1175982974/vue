<template>
    <div class="search-box">
        <input class="search-input"
                type="text" 
                v-on:focus="handleFocus" 
                v-on:blur="handleBlur" 
                v-on:input="handleInput" 
                v-bind:placeholder="defaultValue" 
                v-bind:style="style" 
                v-model="value">
        <div class="content">
            <div class="city-list">
                <router-link to='/'>
                    <div class="city-item" 
                    v-bind:key="item.id" 
                    v-for="item in matchCity" 
                    v-on:click="handleClickStore">{{item.cityarea}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import resource from "vue-resource";
    import Vue from "vue";
    Vue.use(resource);
    export default {
        name: 'search',
        props:["flag"],
        data () {
            return {
                defaultValue: "输入城市名或拼音",
                style:"text-align:center",
                inputCity:{},
                cityKey:"",
                value:"",
                cityData:{},
                cityNames:[],
                cityNamesInland:[],
                cityNamesForeign:[]
            }
        },
        mounted: function() {
            let this_ =  this;
            this.$http.get('./static/city.json').then(response => {
                this_.cityData = response.body;
                let cityArrI = this_.cityData.data.inlandCity;               
                let cityArrF = this_.cityData.data.foreign;
                let cityAI = [];
                let cityAF = [];                
                for (var i = cityArrI.length - 1; i >= 0; i--) {
                    cityAI = cityArrI[i][1].city;
                    for (var j = cityAI.length - 1; j >= 0; j--) {
                        this.cityNamesInland.push(cityAI[j]);
                    };
                };
                for (var i = cityArrF.length - 1; i >= 0; i--) {
                    cityAF = cityArrF[i][1].city;
                    for (var j = cityAF.length - 1; j >= 0; j--) {
                        this.cityNamesForeign.push(cityAF[j]);
                    };
                };
            }, response => {
            });
        },
        methods: {
            handleBlur: function() {
                this.defaultValue = "输入城市名或拼音";
                this.style = "text-align:center";
            },
            handleFocus: function() {
                this.defaultValue = "";
                this.style = "text-align:left";
            },
            handleInput: function(e) {
                this.$emit("onInput", e);
            },
            handleClickStore: function(e) {
                var newCity = e.target.innerHTML;
                localStorage.newCity = newCity;
                this.$store.commit("changeCurrentCity",{
                    city:newCity
                })
            }
        },
        computed: {
            matchCity: function() {
                if(!this.value) {
                    return
                }
                this.cityNames = this.$store.state.flag ? this.cityNamesForeign : this.cityNamesInland;
                let inputCityArr = [];
                let keyWord = this.value;
                let indexSearch = true;
                let flag = false;
                for (let i = this.cityNames.length - 1; i >= 0; i--) {
                    indexSearch = this.cityNames[i].cityName.toLowerCase().indexOf(keyWord.toLowerCase()) != -1||this.cityNames[i].cityarea.indexOf(keyWord) != -1;
                    if( indexSearch ) {
                        flag = true;
                        inputCityArr.push(this.cityNames[i]);
                        this.inputCity = inputCityArr;
                    }
                };
                if(flag) {
                    return this.inputCity;
                }else {
                    this.inputCity = [{
                        "cityarea": "无搜索匹配城市",
                        "id": 1546835017823
                    }]
                    return this.inputCity;
                }
            }
        }
    }
</script>

<style scoped>
.search-box {
    width: 100%;
    height: .8rem;
    margin-top: .88rem;
    background: #00bcd4;
    font-size: .26rem;
}
.search-input {
    display: block;
    width: 90%;
    height: .66rem;
    margin:0 auto;
    padding-left: .1rem;
    text-align: center;
    border-radius: .05rem;
    border: 1px solid #00bcd4;
    color: #000;
}
.search-box .city-list .city-item {
    display: block;
    line-height: .76rem;
    padding-left: .2rem;
    font-size: .28rem;
    color: #212121;
    border-bottom: 1px solid #e4e5e6;
}
.search-box .content {
    margin-top: .2rem;
    z-index: 3;
    background: #fff;
}
</style>