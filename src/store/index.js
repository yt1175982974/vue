import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        "city": "南京",
        "number": "1",
        "newCity": (localStorage.length ? localStorage.newCity : "北京"),
        "flag": false,
        "inputSearch": '',
        "flag": false,
        "isPop": false,
        "isFadeIn": false,
        "isblock": false,
        "isfixbooking": true
    },
    mutations: {
        changeCity: function(state, payload) {
            state.city = payload.city;
            this.$store.commit("changeCity");
        },
        changePageNum: function(state, payload) {
            state.number = payload.pageNum;
        },
        changeCurrentCity: function(state, newLoad) {
            state.newCity = newLoad.city;
        },
        switchData: function(state, flag) {
            state.flag = flag;
        },
        changeInputSearch: function(state, value) {
            state.inputSearch = value;
        },
        switchData: function(state, flag) {
            state.flag = flag;
        },
        changeIsPop: function(state) {
            state.isPop = !state.isPop;
        },
        changeIsFadeIn: function(state) {
            state.isFadeIn = !state.isFadeIn;
        },
        changeIsBlock: function(state) {
            state.isblock = !state.isblock;
        },
        changeIsFixBooking: function(state) {
            state.isfixbooking = !state.isfixbooking;
        }
    },
    getters: {
        "perfectCity": function(state) {
            return state.city + "^<>^"
        }

    }
})

