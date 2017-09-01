import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import Search from '@/pages/search/index'
import NineBuy from '@/pages/nineBuy/index'
import BeiJing from '@/pages/nineBuy/beijing'
import ChengDe from '@/pages/nineBuy/chengde'
import TianJin from '@/pages/nineBuy/tianjin'
import BaoDing from '@/pages/nineBuy/baoding'
import DayTripDetail from "@/pages/daytripdetail/index"
import Settlement from "@/pages/Settlement/index"
import CommentPL from "@/pages/comment/index"
import theOneDayTrip from '@/pages/theOneDayTrip/index/index'
import theOneDayTripList from '@/pages/theOneDayTrip/list/index'
import ProductDetail from '@/pages/productdetail/index'
import Detail from '@/pages/detail/index'
import explain from '@/pages/explain/index'
import beforSearch from '@/pages/search/before-index'
import tripList from '@/pages/tripList/index'
import summerSale from '@/pages/summerSale/index'
import SurpriseTicket from '@/pages/surpriseTicket/index'
import WeekendIndex from '@/pages/weekend/index/index'
import WeekendDetail from '@/pages/weekend/detail/detail'
import DeatailLandscape from "@/pages/weekend/detail/content-landscape"
import DeatailNearby from "@/pages/weekend/detail/content-nearby"
import WeekendDetailMap from '@/pages/weekend/detail/detail-map'
import WeekendOrder from '@/pages/weekend/order/order'
import WeekendOrdertime from '@/pages/weekend/order/ordertime'

Vue.use(Router)
 
export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/city',
        name: 'city',
        component: City
    }, {
        path: '/search/:id',
        name: 'Search',
        component: Search
    }, {
        path: '/explain',
        name: 'explain',
        component: explain
    }, {
        path: '/beforeSearch',
        name: 'beforeSearch',
        component: beforSearch
    }, {
        path: '/tripList',
        name: 'tripList',
        component: tripList
    }, {
        path: '/summerSale',
        name: 'summerSale',
        component: summerSale
    }, {
        path: '/weekend/index',
        name: 'WeekendIndex',
        component: WeekendIndex
    }, {
        path: '/weekend/detail',
        name: 'weekendDetail',
        component: WeekendDetail
    }, {
        path: '/weekend/detail/sightintroduction',
        name: 'DeatailLandscape',
        component: DeatailLandscape
    }, {
        path: '/weekend/detail/nearby',
        name: 'DeatailNearby',
        component: DeatailNearby
    }, {
        path: '/weekend/detail/map',
        name: 'WeekendDetailMap',
        component: WeekendDetailMap
    }, {
        path: '/weekend/order',
        name: 'WeekendOrder',
        component: WeekendOrder
    }, {
        path: '/weekend/ordertime',
        name: 'WeekendOrdertime',
        component: WeekendOrdertime
    }, {
        path: '/detail',
        name: 'Detail',
        component: Detail
    }, {
        path: '/productdetail',
        name: 'productDetail',
        component: ProductDetail
    }, {
        path: '/daytripdetail',
        name: 'Daytripdetail',
        component: DayTripDetail
    }, {
        path: '/settlement',
        name: 'Settlement',
        component: Settlement
    }, {
        path: '/comment',
        name: 'CommentPL',
        component: CommentPL
    }, {
        path: '/theOneDayTrip',
        name: 'theOneDayTrip',
        component: theOneDayTrip
    }, {
        path: '/theOneDayTrip-list',
        name: 'theOneDayTrip-list',
        component: theOneDayTripList
    },{
    	path: '/nineBuy/',
	    name: 'nineBuy',
	    component: NineBuy,
	    children:[{
		    path:'chengde',
		    component:ChengDe
	    },{
		    path:'tianjin',
		    component:TianJin
	    },{
		    path:'baoding',
		    component:BaoDing
	   	},{
		    path:'beijing',
		    component:BeiJing
	    }]
	  },{
      path: '/surpriseTicket',
      name: 'surpriseTicket',
      component: SurpriseTicket
 	  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})


