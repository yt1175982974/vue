import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
//import VueLazyload from 'vue-lazyload'
import vueResource from "vue-resource"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueAMap from 'vue-amap'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
import store from "./store/index"


//对整个页面使用fastClick,避免300ms延迟
fastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(IScrollView, IScroll);
Vue.use(VueAwesomeSwiper);
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: '159accf06d632ff86af48c12d8112024',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
//Vue.use(VueLazyload, {
//	error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503918796244&di=34d35787875e6620437dc9ccce3e9000&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fwh%253D600%252C800%2Fsign%3Df2111a22a50f4bfb8c859652337f54c8%2Fb03533fa828ba61ed8c0bd924034970a304e5964.jpg',
////	这个是请求失败后显示的图片
//	  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503918972251&di=5ab7e7f7d2b030702a1ed1d99bde8a59&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3De9378a7b083387449c902778643ff5cf%2F1f178a82b9014a90e9109296ad773912b31beeeb.jpg',
////	  这个是加载的loading过渡效果
// 	  try: 1
//})



/* eslint-disable no-new */


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})

