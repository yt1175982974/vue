<template>  
    <div class="alert js-alert">
        <div class="title">
            <p class="title-p">{{$store.state.dayTripdetailIntro}}</p>
            <div class="close iconfont" @click="handleClickClose">&#xe63f;</div>
        </div>
        <div class="price">
            <span class="sp1">{{"￥"+$store.state.dayTripdetailPrice}}</span><i>起/份</i><span class="sp2">票面价:{{ticketInfo.ticketFacePrice}}<span class="sp2-sp"></span></span><span class="sp3" v-show="gift"><i class="sp3-i1">赠券</i><i class="sp3-i2">￥1</i></span>   
        </div> 
        <iscroll-view class="scroll-view" :options="{preventDefault: false}">  
            <div class="check-infor">
                <div class="check-date">
                    <p class="check-p">日期选择</p>
                    <div class="date-options" >
                        <div class="date"  v-for="(dateOption, index) in checkDateOptions" @click="handleClickDate(index,$event)" :class="{'date-active':dateInd === index}" ref="date"><span class="sp1">{{dateOption.date}}</span><span v-if='index==0'>{{goOutDate.today.nowDay}}</span><span v-else-if='index==1'>{{goOutDate.tomorrow.nowDay}}</span><span v-else='index==2'>{{goOutDate.tomorrowAfter.nowDay}}</span></div> 
                        <div class="other-date date" @click="handleOtherDateParent" :style="styleObject">
                            <span class="sp1">其他日期</span>
                            <span>{{otherDate.nowDay}}</span> 
                        </div> 
                    </div>
                </div>
                <div class="check-people">
                    <p class="check-p">人群</p>
                    <div class="people-options">
                        <div class="people"  v-for="(peopleOption, index) in checkPeopleOptions" @click="handleClickPeople(index,$event)" :class="{'people-active':peopleInd === index}"  >{{peopleOption}}</div> 
                    </div>
                </div>
                <div class="check-gotime">
                    <p class="check-p">发车时间</p>
                    <div class="gotime-options">
                        <div class="gotime" v-for="(goTimeOption, index) in checkGoTimeOptions" @click="handleClickGoTime(index,$event)" :class="{'gotime-active':gotimeInd === index }" ref="gotime">{{goTimeOption}}</div> 
                    </div>
                </div>
                 <div class="check-food">
                    <p class="check-p">用餐</p>
                    <div class="food-options">
                        <div class="food" v-for="(foodOption, index) in checkFoodOptions" @click="handleClickFood(index,$event)" :class="{'food-active': foodInd === index}">{{foodOption}}</div> 
                    </div>
                </div> 
                <div class="check-others">
                    <p class="check-p">其他</p>
                    <div class="others-options">
                        <div class="others" v-for="(othersOption, index) in checkOhtersOptions" @click="handleClickOhters(index,$event)" :class="{'others-active': othersInd === index}">{{othersOption}}</div> 
                    </div>
                </div>  
            </div>
        </iscroll-view>   
        <div class="book-button" @click="handleBookNow">
            立即预订
        </div> 
        <transition name="alertDate">
            <div class="alert-date" v-if="showAlertDate">
                <div class="date-top">
                    <p class="go-back iconfont" @click="showAlertDate = !showAlertDate">&#xe615;</p>
                    <p class="chose">选择时间</p>
                    <p class="date-close iconfont"  @click="showAlertDate = !showAlertDate">&#xe63f;</p>
                </div>  
                <Calendar @handleotherDate="getOtherDate"/>
            </div>
        </transition>
        <div class="allCheck iconfont" @click="handleAllCheck"  ref="allCheck1">{{noCheckOption}}     &#xe63f;</div>
    </div> 
</template> 
<script type="text/javascript">  
    import Calendar from "./calendar.vue";  
    export default {  
        data() {
            return {  
                showHere: "",
                gift: false,
                styleObject: {
                    background: "",
                    color: "",
                    borderColor: ""
                },
                ticketInfo: {
                    intro: "",
                    price: "",
                    ticketFacePrice: "￥399"
                },
                haveCheckDay: "",
                dateInd: "",
                peopleInd: "",
                gotimeInd: "",
                otherDate: '',
                checkOtherDate: "", 
                foodInd: "",
                othersInd: "",   
                showAlertDate: false,
                checkDateOptions: [
                    {
                        class: "today",
                        date: "今天",
                        month: ""
                    },
                    {
                        class: "tomorrow",
                        date: "明天",
                        month: ""
                    },
                    {
                        class: "tomorrow-after",
                        date: "后天",
                        month: ""
                    } 
                ],
                checkPeopleOptions: ["成人", "儿童"],
                checkGoTimeOptions: ["09:00", "10:00", "12:00"],
                checkFoodOptions: ["不含餐", "含餐"],
                checkOhtersOptions: ["往返直通车+门票", "往返直通车+门票+往返缆车", "往返直通车(不含门票)"],
                isAllCheck: [false, false, false, false, false],
                noCheckOption: "" 
            }
        }, 
        props: ["show", "nowTime"],
        components: {
            Calendar
        },
        computed: {
            goOutDate: function() { 
                var today, tomorrow, tomorrowAfter; 
                var myDate = new Date(); 
                var Mytomorrow = new Date(); 
                var MytomorrowAfter = new Date();  
                Mytomorrow.setDate(Mytomorrow.getDate() + 1)   
                MytomorrowAfter.setDate(MytomorrowAfter.getDate() + 2)  
                today = this.jointDate(myDate)
                tomorrow =this.jointDate(Mytomorrow)
                tomorrowAfter = this.jointDate(MytomorrowAfter)
                var dateObj = {today:today, tomorrow:tomorrow, tomorrowAfter:tomorrowAfter} 
                return dateObj
            } 
        }, 
        mounted() {  
            if(this.nowTime >= 12) {
                this.$refs.date[0].style.opacity = .4
            } 
            var info = JSON.parse(window.localStorage.info)
            info.price = this.$store.state.dayTripdetailPrice;
            info.intro = this.$store.state.dayTripdetailIntro;
            window.localStorage.info = JSON.stringify(info) 
        },
        methods: {
            handleClickClose() {  
                this.showHere = !this.show 
                this.$emit("handleAlertShow")
            },
            jointDate(myDate) {
                var nowDay;
                var nowMonth = myDate.getMonth() + 1; 
                var nowDate = myDate.getDate();
                var nowYear = myDate.getFullYear();
                if(nowMonth < 10 && nowDate < 10) {
                    nowDay = "0" + nowMonth + "月" + 0 + nowDate+ "日"; 
                }else if(nowMonth < 10 && nowDate >= 10) {
                    nowDay = "0" + nowMonth + "月" + nowDate + "日" 
                }else if(nowMonth >= 10 && nowDate < 10) {
                    nowDay = nowMonth + "月" + 0 + nowDate + "日" 
                }else {
                    nowDay = nowMonth + "月" + nowDate + "日" 
                }
                return {nowDay, nowYear}
            },
            handleClickDate(index, event) {  
                if(this.nowTime >= 12) {  //判断是否超时12点 
                    if(!(index == 0)) {  //超过12点不能选择今天
                        this.dateInd = index;
                        this.haveCheckDay = event.currentTarget.childNodes[0].innerHTML;
                    } 
                }else { // 没有超过12点
                    if(index == 0) {
                        if(this.nowTime < 10 && this.nowTime >= 9) {
                            this.$refs.gotime[0].style.opacity = .4 
                        }
                        if(this.nowTime < 12 && this.nowTime >= 10) {
                            this.$refs.gotime[0].style.opacity = .4
                            this.$refs.gotime[1].style.opacity = .4
                        }
                        this.gift = true
                    }else {
                        this.$refs.gotime[0].style.opacity = 1
                        this.$refs.gotime[1].style.opacity = 1
                        this.gift = false 
                    }
                    this.dateInd = index;
                    this.haveCheckDay = event.currentTarget.childNodes[0].innerHTML;  
                }  
                if(index != 3) {  //如果点击其他日期
                    this.$set(this.styleObject, "background" , "")
                    this.$set(this.styleObject, "color" , "") 
                    this.$set(this.styleObject, "borderColor" , "") 
                    this.checkOtherDate = new Date();
                    this.checkOtherDate.setDate(this.checkOtherDate.getDate() + 1)
                    // var info = JSON.parse(window.localStorage.info)
                    // info.date = event.currentTarget.childNodes[1].innerHTML; 
                    // window.localStorage.info = JSON.stringify(info) 
                } 
                if(index == 0) {
                    var info = JSON.parse(window.localStorage.info)
                    info.date = event.currentTarget.childNodes[1].innerHTML; 
                    info.year = this.goOutDate.today.nowYear;
                    window.localStorage.info = JSON.stringify(info) 
                }else if(index == 1) {
                    var info = JSON.parse(window.localStorage.info)
                    info.date = event.currentTarget.childNodes[1].innerHTML; 
                    info.year = this.goOutDate.tomorrow.nowYear;
                    window.localStorage.info = JSON.stringify(info) 
                }else if(index == 2) {
                    var info = JSON.parse(window.localStorage.info)
                    info.date = event.currentTarget.childNodes[1].innerHTML; 
                    info.year = this.goOutDate.tomorrowAfter.nowYear;
                    window.localStorage.info = JSON.stringify(info) 
                }
                this.isAllCheck[0] = true;  
            },
            handleClickPeople(index, event) { 
                this.peopleInd = index;
                if(index == 1) {
                    this.checkOhtersOptions.splice(0, 3, "往返直通车(不含门票)")  
                }else {
                    this.checkOhtersOptions.splice(0, 3, "往返直通车+门票", "往返直通车+门票+往返缆车", "往返直通车(不含门票)")  
                }  
                var info = JSON.parse(window.localStorage.info)
                info.people = event.currentTarget.innerHTML;
                window.localStorage.info = JSON.stringify(info) 
                this.isAllCheck[1] = true; 
            },
            handleClickGoTime(index, event) {  
                if(this.haveCheckDay == "今天") { //判断是否是今天
                    if(this.nowTime < 9) {  //判断现在时间
                        this.gotimeInd = index; //如果小于9点都能选择
                    }else if(this.nowTime >= 9 && this.nowTime < 10) {//判断现在时间
                        if(!(index == 0)){ //如果大于9点且小于10点，9点不能选择
                            this.gotimeInd = index; 
                        } 
                    }else if(this.nowTime >= 10 && this.nowTime < 12) {//判断现在时间
                        if(index == 2) {    //如果大于10点且小于12点，只能选择12点
                            this.gotimeInd = index; 
                        } 
                    } 
                }else {
                    this.gotimeInd = index
                }
                var info = JSON.parse(window.localStorage.info)
                info.time = event.currentTarget.innerHTML;
                window.localStorage.info = JSON.stringify(info) 
                this.isAllCheck[2] = true;  
            },
            handleClickFood(index, event) {
                this.foodInd = index;
                var info = JSON.parse(window.localStorage.info)
                info.food = event.currentTarget.innerHTML; 
                window.localStorage.info = JSON.stringify(info)  
                this.isAllCheck[3] = true;  
            },
            handleClickOhters(index, event) {
                this.othersInd = index;
                var info = JSON.parse(window.localStorage.info)
                info.others = event.currentTarget.innerHTML; 
                window.localStorage.info = JSON.stringify(info)  
                this.isAllCheck[4] = true;  
            }, 
            handleOtherDateParent() {
                this.showAlertDate = !this.showAlertDate
            },
            getOtherDate(date) {  
                this.checkOtherDate = date
                this.$set(this.styleObject, "background" , "#00bcd4")
                this.$set(this.styleObject, "color" , "#fff")
                this.$set(this.styleObject, "borderColor" , "#00bcd4")
                this.otherDate = this.jointDate(date) 
                var info = JSON.parse(window.localStorage.info)
                info.date = this.otherDate.nowDay;
                info.year = this.otherDate.nowYear;
                window.localStorage.info = JSON.stringify(info)  
                this.handleClickDate(3, event)
            },
            handleBookNow() {
                for (var i = 0; i < this.isAllCheck.length; i++) {
                    if(!this.isAllCheck[i]) { //判断是否选择完整
                        if(i == 0) {
                            this.noCheckOption = "请选择出发日期..."
                        }else if(i == 1) {
                            this.noCheckOption = "请选择人群..."
                        }else if(i == 2) {
                            this.noCheckOption = "请选择发车时间..."
                        }else if(i == 3) {
                            this.noCheckOption = "请选择是否含餐..."
                        }else if(i == 4) {
                            this.noCheckOption = "请选择其他..."
                        }
                        this.$refs.allCheck1.style.display = "block" 
                        break;
                    }  
                    if(i == 4) { //如果选择完整，跳转页面  
                        var afterCheck = this.checkOtherDate.getTime(); 
                        var beforeCheck = new Date().getTime();
                        if(afterCheck < beforeCheck) {
                            this.noCheckOption = "已选日期不存在..."
                            this.$refs.allCheck1.style.display = "block"  
                        }else {
                            this.$router.push({path:"/settlement"})
                        }
                    } 
                } 
            },
            handleAllCheck() { 
                this.$refs.allCheck1.style.display = "none" 
            }
        }
    }
</script> 
<style scoped>  
    @import "../../../assets/font/iconfont.css";
    @import "../css/border.css";
    @import "../css/footer-checkinfo-component.css";
</style>
 


