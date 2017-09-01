<template>
    <div class="citynav-box">
        <ul class="citynav" v-on:click="handleClick">
          <li data-index="0" class="nav-list active">北京</li>
          <li data-index="1" class="nav-list">上海</li>
          <li data-index="2" class="nav-list">广州</li>
          <li data-index="3" class="nav-list">{{lastCity}}</li>
        </ul>
        <div v-bind:class="select" v-on:click="handleOpen"></div>
        <ul class="otherCity" v-show="isShow" v-on:click="handleSelect">
            <li v-for="(value,index) in otherCity" key="value" class="otherCityList" v-bind:data-index="index">{{value}}</li>
        </ul>
    </div>
</template>
<script>
export default{
    name:"navBox",
    data() {
        return {
            lastCity:"青岛",
            otherCity:["成都","深圳","杭州","重庆","三亚","西安"],
            select:"select"
        }
    },
    computed:{
        isShow: function(){
            return this.select == "select" ? false : true;
        }
    },
    methods:{
        handleClick(event){
            this.handleClass(event.target);
        },
        handleClass(target){
            let citynavList = document.getElementsByClassName("citynav")[0].children, 
                length = citynavList.length;      
            for(let i=0; i<length; i++){           
                citynavList[i].className = "nav-list";
            }
            target.className = "nav-list active";
        },
        handleOpen(){
            this.select = this.select == "select" ? "select open" : "select";
        },
        handleSelect(event){
            let target = document.getElementsByClassName("citynav")[0].children[3];            
            if(event.target.tagName == "LI"){
                this.otherCity.push(this.lastCity);
                this.lastCity = event.target.innerHTML;
                this.otherCity.splice(event.target.getAttribute("data-index"),1);
            }
            this.handleClass(target);
            this.handleOpen();
        }
    }

}
</script>
<style scoped>
.citynav-box {
    height:.76rem;
    width:100%;
    display:flex;
    position:relative;
}
.citynav {
    height:.76rem;
    width:84%;
    display:flex;
    background: #ff9000;
}
.nav-list{
    box-sizing:border-box;
    width:25%;
    text-align:left;
    padding-left:.46rem;
    line-height:.76rem;
    color: #fff;
    font-size: .28rem;
}
.nav-list.active{
    padding-left: .60rem;
    background: #ff9000 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAMAAABWBG9SAAAAA3NCSVQICAjb4U/gAAAAaVBMVEX/kQD/2QD/lAD/wwD/twD/9AD/rgD/7wD/pwD/5wD/pAD/0QD/4QD/zwD/zAD/uwD/3wD/mQD/6wD/tAD/8wD/5QD/vQD/yQD/mQD/qQD/7QD/2wD/vwD/lgD/uQD/sQD/6QD/0wD/8QBDbGByAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAMJJREFUKJFlkdkSgyAMReNCB60VcRmHKnX5/49sgiJB70MGzpCbBQCn16fY9+G9QJCsxKlKeqZ6EaQOlotIObHSvauUMepwKRE2LMkZNVjkSrmsJIwYp9DIhNfRZbP2FvKHFqMOUFM+uMDk7uvz5Qrb03OD7lm9g/T76DOFNGMT/WiijE70VDQ0u5tYWAvWqnhLZ9LA2XC6Gw6Nr1kHVofuCs8Ky37O/5IEpvlgM0RKiCUxA417bfUNom0v7wx3cW0F/ikXCyqTRqyDAAAAAElFTkSuQmCC) .32rem center/.2rem .28rem no-repeat;
    color: #fff400;
}
.select{
    position:relative;
    flex:1;
    background: #fe5605;
}
.select:before{
    content: '';
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -.1rem 0 0 -.1rem;
    width: .16rem;
    height: .16rem;
    border-bottom: .04rem solid #fff;
    border-left: .04rem solid #fff;    
    transform: rotate(-45deg);
}
.select.open:before{
    transform: rotate(135deg);
}
.otherCity{
    position:absolute;
    top:.76rem;
    right:0rem;
    z-index:20;
    width: 100%;
    box-sizing:border-box;
    padding: .2rem .1rem .4rem;
    background: rgba(254,86,5,.9);
}
.otherCityList{
    float:left;
    width:18%;
    margin: .2rem .06rem 0rem;
    background-color: #fff;
    color: #282828;
    line-height: .5rem;
    text-align: center;
    border-radius:.5rem;
}
</style>
