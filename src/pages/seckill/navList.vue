<template>
     <div class="nav-box">
        <ul class="nav" v-on:click="handleClick">
          <li data-index="0" class="nav-list active">1元秒</li>
          <li data-index="1" class="nav-list">热门TOP</li>
          <li data-index="2" class="nav-list">玩水</li>
          <li data-index="3" class="nav-list">一日游</li>
        </ul>
    </div>
</template>
<script>
export default{
    name:"navBox",
    data() {
        return {}
    },

    methods:{
        handleClick:function(event){
            let nav= document.getElementsByClassName("nav")[0],
                navList= nav.children,
                length = navList.length,
                ListElem = document.getElementsByClassName("modules-content");

            if(event.target.tagName == "LI"){

                let index = event.target.getAttribute("data-index");

                this.changeNav(index);

                document.body.scrollTop = ListElem[index].offsetTop - nav.offsetHeight;
            }

        },

        changeNav(index){
            let navList= document.getElementsByClassName("nav")[0].children,
                length = navList.length;
            for(let i=0; i<length; i++){
               navList[i].className = "nav-list";
            }
            navList[index].className = "nav-list active";
        }
    }
}
</script>
<style scoped>
.nav-box {
    width:100%;
    height: 0;
    padding-bottom: 15.9%;
    background-image:url("//s.qunarzz.com/piao_topic/image/touch/custom/2017/2343grab08/anchor.jpg");
    background-size: 100% 100%;
}
.nav {
    display:flex;
    padding:0 4%;
    padding-top:4.5%;
}
.nav-list {
    width:25%;
    line-height: .66rem;
    text-align:center;
    font-size: .3rem;
    color: #fff;
    text-shadow: 0 0 0.1rem #418aff, 0 0.08rem 0 rgba(103,0,133,.9);
}
.nav-list.active {
    color: #ffe400;
    text-shadow: 0 0 0.1rem #ff0003, 0 0.08rem 0 rgba(103,0,133,.9);
}
.nav-fixed {
    position: fixed;
    top:0;
    z-index:20;
    padding:0;
    width:100%;
}

.nav-fixed .nav-list {
    padding: .1rem 0;
    background: #af16ff;
    color: #fff;
    text-shadow: none;
    line-height: .66rem;
}
.nav-fixed .nav-list.active {
    background: #ffee30;
    color: #af16ff;
}

</style>
