<template>
	<div class="group focus-outer">
		<orderTime v-on:date='handleResult' :dateShow='dateShow'></orderTime>
		<div class="row extend-outer row-hide" style="display: block;">
            <label class="row-field">游玩日期</label>
            <div class="row-value clrfix datecard-outer errormsg-hide">
                <input type="hidden" id="date" value="" name="date" notfocus="true">
		        <div class="booking-datecard clrfix">       
		    		<span class="datecard js-datecard" @click="handleClickDate">
		        		<em class="datecard-name">今天</em>
		        		<strong class="datecard-detail js-today">{{SmallToday}}</strong>
		    		</span>
		    		<span class="datecard js-datecard" @click="handleClickDate">
		        		<em class="datecard-name">明天</em>
		        		<strong class="datecard-detail js-nextday">{{SmallNextday}}</strong>
		    		</span>
		    		<span class="datecard datecard-wait" @click="handleClickTime">
		        		<em class="datecard-name">其他日期</em>
		        		<strong class="datecard-detail">{{selectDate}}</strong>
		    		</span>
				</div>
			</div>
        </div>
		<div class="numberBox">
			<span class="numtitle">购买数量</span>
			<div class="inputBox">
				<span class="numButton numButton-disable" id="numBtnSub" @click="handleClickSub">
					<span class="iconfont">&#xe63d;</span>
				</span>
				<input type="text" class="inputeItem" id="nowNum" v-model="num" @keyup="checkInput"></input>
				<span class="numButton" @click="handleClickAdd" id="numBtnAdd">
					<span class="iconfont">&#xe623;</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	import orderTime from './ordertime.vue'
	export default {
		data() {
			return {
				num: 1,
				dateShow:false,
				selectDate:'',
				SmallToday: '',
				SmallNextday: ''
			}
		},
		components: {
			orderTime
		},
		created() {
			this.getDate()
		},
		methods: {
			btnState() {
				if (this.num <= 1) {
					$("#numBtnSub").addClass("numButton-disable")
				} else {
					$("#numBtnSub").removeClass("numButton-disable")
				}
				if (this.num >= 9999) {
					$("#numBtnAdd").addClass("numButton-disable")
				} else {
					$("#numBtnAdd").removeClass("numButton-disable")
				}
			},
			checkInput() {
				let inputEl = document.getElementById("nowNum"),
					value = inputEl.value;
				if (value.length > 4) {
					value = value.substr(0, 4);
				}
				value = value.replace(/[^\d]/g, "");
				inputEl.value = value;
				this.btnState();
				this.$emit("numChange", this.num)
			},
			handleClickSub(e) {
				this.num > 1 && this.num--;
				this.btnState();

				this.$emit("numChange", this.num)
			},
			handleClickAdd(e) {
				this.num < 9999 && this.num++;
				this.btnState();
				this.$emit("numChange", this.num)
			},
	        handleClickTime() {
	        	this.dateShow = true;
	        },
	        handleClickDate(event) {
	        	$(".js-datecard").removeClass("datecard-background");
	        	$(event.target).parent().addClass("datecard-background");			
	        },
	        handleResult(value) {
	        	this.dateShow=value.show;
	        	this.selectDate=value.date.split(",").slice(1, 2)+"月"+value.date.split(",").slice(2)+"日";
	        },
	        getDate() {
				let date = new Date();
				let Day = date.getDate(),
					Month = date.getMonth()+1;
				let reg = /^[1|3|5|7|8|10|12]$/;
				let Bbool = reg.test(Month);
				let Year = date.getFullYear();
				this.SmallToday = Month + '月' + Day + '日';
				if(Year % 4 == 0 && Yera % 100 !=0 || Year % 400 ==0){
					(Month==2) && (this.SmallNextday = (Month+1) + '月' + (Day-28) + '日');
				}else{
					(Month==2) && (this.SmallNextday = (Month+1) + '月' + (Day-29) + '日');
				}
				
				if(Bbool==true && Day<31) {
					this.SmallNextday = Month + '月' + (Day+1) + '日'
				}else if(Bbool==true && Day==31) {
					this.SmallNextday = (Month+1) + '月' + (Day-30) + '日'
				}else if(Bbool==true && Day==31 && Month == 12) {
					this.SmallNextday = (Month+1-Month) + '月' + (Day-30) + '日'
				}
				
				if(Bbool==false && Day<30 && Month != 2) {
					this.SmallNextday = Month + '月' + (Day+1) + '日'
				}else if(Bbool==false && Day==30) {
					this.SmallNextday = (Month+1) + '月' + (Day-29) + '日'
				}
			}
		}
	}
	
</script>

<style scoped>
	@import "../../../assets/font/iconfont.css";
	.group {
	    margin: .2rem 0;
	    position: relative;
	}
	.row {
	    overflow: hidden;
	    position: relative;
	    min-height: .5rem;
	    padding: .24rem;
	    background: #fff;
	}
	.group .row::after {
	    content: "";
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: .02rem;
	    background: #e0e0e0;
	    transform: scaleY(.5);
	}
	.row::after {
	    background: #dadada;
	}
	.extend-outer .row-field {
	    position: relative;
	    top: .12rem;
	}
	.row-field {
	    float: left;
	    width: 1.6rem;
	    color: #616161;
	    font-size: .3rem;
	    line-height: .5rem;
	}
	.row-value {
	    position: relative;
	    line-height: .5rem;
	    font-size: .28rem;
	}
	.datecard-outer {
	    overflow: hidden;
	    height: .86rem;
	    margin-left: 1.7rem;
	}
	.booking-datecard {
	    overflow: hidden;
	    height: .86rem;
	}
	.datecard {
	    display: inline-block;
	    min-width: 1.2rem;
	    min-height: .82rem;
	    border: .02rem solid #bdbdbd;
	    background: #fff;
	    text-align: center;
	    border-radius: .1rem;
	    color: #000;
	}
	.booking-datecard .datecard {
	    box-sizing: border-box;
	    float: left;
	    width: 22.5%;
	    height: .86rem;
	    margin-left: 3.33%;
	}
	.datecard-outer .datecard {
	    overflow: hidden;
	    float: left;
	    width: 29.3%;
	    margin-left: 4.6%;
	}
	.booking-datecard .datecard:first-child {
	    margin-left: 0;
	}
	.datecard-outer .datecard:first-child {
	    margin-left: 0;
	}
	.datecard-name, .datecard-detail {
	    display: block;
	    width: 100%;
	}
	.datecard-name {
	    padding-top: .08rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .36rem;
	}
	.datecard-detail {
	    padding-bottom: .06rem;
	    color: #888;
	    font-size: .24rem;
	    line-height: .32rem;
	}
	.datecard-detail {
	    padding-bottom: .06rem;
	    color: #888;
	    font-size: .24rem;
	    line-height: .32rem;
	}
	.row-value .booking-datecard .datecard-background{
		position: relative;
	    border-color: #00bcd4;
	    color: #fff;
	    background: #00bcd4;
	}
	.datecard-background::after {
		content: '';
	    display: block;
	    position: absolute;
	    z-index: 2;
	    right: 0;
	    bottom: 0;
	    color: #fff;
	    font-family: 'mpiconfont';
	    speak: none;
	    font-size: .32rem;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	}
	.numberBox {
	    width: 100%;
	    overflow: hidden;
	    display: flex;
	    flex-flow: row nowrap;
	    justify-content: space-between;
	    line-height: .26rem;
	    padding: .24rem;
	    font-size: .3rem;
	    background: #fff;
	}
	.inputBox {
	    width: 1.92rem;
	    line-height: .6rem;
	    border: 1px solid #c7ced4;
	    clear: both;
	    overflow: hidden;
	    margin-right: .6rem;
	}

	.numtitle {
	    width: 1.5rem;
	    line-height: .6rem;
	}

	.numButton {
	    float: left;
	    width: .56rem;
	    height: .56rem;
	    text-align: center;
	    vertical-align: middle;
	    margin: .02rem;
	    background: #00afc7;
	    color: white;
	}

	.numButton-disable {
	    color: gray;
	    background: #f0f0f0;
	}

	#nowNum {
	    width: 0.72rem;
	    line-height: .6rem;
	    text-align: center;
	    border: none;
	    outline: none;
	    float: left;
	}
</style>
