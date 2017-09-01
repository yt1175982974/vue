
<template>
	<div class="five-body">
        <imgcomponent :dayTripswiper="dayTripswiper" :dayTriphead="dayTriphead"/>
		<!-- start 李栋 head-->
		<daytripheader :dayTripcard="dayTripcard" :dayTripheadtop="dayTripheadtop"></daytripheader>

      
		<!-- end 李栋 head-->
		<!--刘强 评论 start-->
		<Commentsinformation/>
		<!--刘强 评论 end-->

		<!--start 陈涛 行程介绍 王哲 费用说明 使用说明  -->
		<prdDetailGroup :routesum="routesum" :introduce="introduce" :infoGroup="infoGroup"> </prdDetailGroup>
		<!--end  陈涛 行程介绍 王哲 费用说明 使用说明  -->

		<!--刘强 用户评论 start-->
		<Usercomments/>
		<!--刘强 用户评论 end-->

		<!-- 丁静静  footer  start-->
		<div id="mask-layer" :style="maskLayerStyle"></div>
		<footer-dayritpdetail @handleMarkLayer="handleMarkLayer" />
		<!-- 丁静静  footer  end-->
	</div>

</template> 

<script type="text/javascript">  
import Imgcomponent from "./components/imgcomponent.vue";
import PrdDetailGroup from "./components/prddetailGroup.vue";
import footerDayritpdetail from "./components/footer-component.vue";
import DaytripHeader from './components/header.vue';
import Usercomments from "./components/userComments.vue";
import Commentsinformation from "./components/commentsInformation.vue";
 
export default {
	name: 'daytripdetail',
	components: {
        "imgcomponent" : Imgcomponent,
		"daytripheader": DaytripHeader,
		PrdDetailGroup,
		Usercomments,
		Commentsinformation,
        "footer-dayritpdetail": footerDayritpdetail
	},
	data() {
		return {
			dayTripswiper: [],
			dayTripheadtop: [],
			dayTriphead: [],
			dayTripcard: [],
			routesum: [],
			introduce: [],
			infoGroup: [],
			maskLayerStyle: {
				display: "none"
			}
		}
	},
	created() {
		this.$http.get('/static/daytripdetail.json').then(response => {
			var data = response.body.data;
			this.dayTripheadtop = data.dayTripheadtop;
			this.dayTriphead = data.dayTriphead;
			this.dayTripcard = data.dayTripcard;
			this.dayTripswiper = data.dayTripswiper;
			this.routesum = data.routesum;
			this.introduce = data.introduce;
			this.infoGroup = data.infoGroup;
			this.$store.state.dayTripdetailPrice = this.dayTripcard[0].money; 
			this.$store.state.dayTripdetailIntro = this.dayTripcard[0].adres; 
		}, response => {
			console.log(Error)
		}); 
    },
    methods: {
        handleMarkLayer(value) {
            if(value) {
                this.maskLayerStyle.display = value
            } else { 
                this.maskLayerStyle.display = this.$store.state.markLayer 
            }
            
        } 
  	}  
} 

</script>
 
<style scoped>  
@import "../../assets/font/iconfont.css";

    #mask-layer {  
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        opacity: .3;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 1100;
    } 
    .five-body {
        background:#f1f5f6;
        padding-bottom: .1rem;
    }  

</style> 

 
 
 


