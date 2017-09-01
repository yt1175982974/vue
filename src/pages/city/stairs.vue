<template>

	<div class="stairs">
		<dl v-for="citys in cityData">
			<dt class="initials">{{citys[0]}}</dt>
			<dd class="city-name" v-for="city in citys[1].city">
				<router-link to='/'>
					<span class="cityarea-item" 
						@click="handleClickStore" 
						:key="city.id">{{city.cityarea}}
					</span>
				</router-link>
			</dd> 
		</dl>
		<div class="right-initials" @click="handleChooseLetter" @touchmove = "handleMoveGet">
			<span :key="citys[1].city.id" class="letter-item" v-for="citys in cityData">{{citys[0]}}</span>
		</div>
	</div>

</template>
<script>
	import Vue from 'vue'
	import vueResource from 'vue-resource'
	Vue.use(vueResource);
	export default {
		data() {
			return {
				someData:{},
			}
		},
		created() {
			var _this = this;
			this.$http.get('./static/city.json').then(response => {
			    this.someData = response.body.data;       
			}, response => {});
		},
		computed:{
			cityData:function() {
				return this.$store.state.flag ?this.someData.foreign  :this.someData.inlandCity
			},
			distance:function() {
				return this.movedistance
			}
		},
		methods: {
			handleClickStore(e) {
				var newCity = e.target.innerHTML
				localStorage.newCity = newCity
				this.$store.commit("changeCurrentCity",{
					city:newCity
				})
				document.body.scrollTop = 0;
			},
			handleChooseLetter(e) {
				var LetterList = Array.from(document.querySelectorAll(".initials"));
				for(let i =0 ;i < LetterList.length ;i++) {
					var that = LetterList[i];
					if(e.target.innerHTML === that.innerHTML) {
						var top = that.offsetTop;
						document.body.scrollTop = top - 44;
					}
				}
			},
			handleMoveGet(e) {
				e.preventDefault()
				var rightInitial = document.querySelector('.right-initials'),
					rightInitialTop = rightInitial.offsetTop,
					LetterList = Array.from(document.querySelectorAll(".initials")),
					averageHeight = (rightInitial.offsetHeight) / (LetterList.length),
					movedistance =  Math.floor((e.targetTouches[0].clientY -rightInitialTop)/averageHeight);
				if(movedistance>=0 && movedistance<LetterList.length){
					var top = LetterList[movedistance].offsetTop;
					document.body.scrollTop = top  - 44;
				}
			},
		}
	}
</script>

<style scoped>
	.stairs {
		height:100%;
		font-size:50px;
	}
	.initials {
		line-height:.54rem;
		padding-left:.3rem;
		color:#616161;
		font-size:.26rem;
		background:#f5f5f5;
	}
	.city-name,.initials {
		border-bottom:1px solid #e4e5e6;
	}
	.city-name {
		background: #fff;
		height: .76rem;
	}
	.cityarea-item {
		display: block;
		line-height: .8rem;
		padding-left:.2rem;
		font-size:.28rem;
		color:#212121;
	}
	.right-initials {
		position:fixed;
		right:0;
		top:24%;
	}
	.right-initials .letter-item {
		display:block;
		width: .5rem;
    	line-height: .32rem;
    	text-align: center;
		color: #00afc7;
		font-size: .24rem;		
	}
</style>