<template>
    <div>
        <div class="footerleft iconfont" id="footerleft">
    		<div class="money">产品价格&yen;</div>
    		    <div class="howmuch" id="howmuch">{{newPrice*this.num}}</div>
    		<span id="more" @click="block" >&#xe615;</span>
            <span id="more2">&#xe615;</span>
            <div id="occlusion" @click="block2" ></div>          
        </div>
        <div id="mask" @click="block3" ></div>
        <div id="details">{{title}}<p class="details-price iconfont">&yen;{{newPrice}} &#xe624; {{this.num}}</p></div>  
    </div> 
</template>
<script>
export default {
        data () {
          return {
            title: localStorage.title,
            newPrice: localStorage.newPrice
          }
        },
        props: ["num"], 
        methods:{
             
            block(){
                let mask=document.getElementById("mask");
                let details=document.getElementById("details");
                let more=document.getElementById("more");
                let more2=document.getElementById("more2");
                let occlusion=document.getElementById("occlusion");
                more.style.display="none";
                more2.style.display="block";
                details.style.display="block";
                occlusion.style.display="block";
                mask.style.display="block";
            },
            block2(){  
                let details=document.getElementById("details");
                let more=document.getElementById("more");
                let more2=document.getElementById("more2");
                let occlusion=document.getElementById("occlusion");
                more.style.display="block";
                more2.style.display="none";
                details.style.display="none";
                occlusion.style.display="none";
                mask.style.display="none"; 
            },
            block3(){  
                let details=document.getElementById("details");
                let more=document.getElementById("more");
                let more2=document.getElementById("more2");
                let occlusion=document.getElementById("occlusion");
                more.style.display="block";
                more2.style.display="none";
                details.style.display="none";
                occlusion.style.display="none";
                mask.style.display="none"; 
            }
        }

    }
</script>

<style scoped>
    @import "../../../assets/font/iconfont.css";
    .footerleft{
        position: fixed;
        left: 0;
        bottom: 0;
        float: left;
        width: 50%;
        height: .88rem;
        border-top: 0.01rem solid #ddd;
        font-size: .24rem;
        padding-bottom: 0.2rem;
        box-sizing: border-box;
        z-index: 10;
        background: white;
    }

    .money{
        float: left; 
        height:0.68rem;
        color: #ff8300;
        line-height: 1rem;
        text-align: center;    
        font-size: .24rem;
        text-indent: .2rem;
    }

    .howmuch{
        float: left;
        height: 0.68rem;
        color: #ff8300;
        line-height: 0.85rem;
        text-align: center; 
        font-size: 0.48rem;  
        margin-right: 0.2rem; 
    }

    #more{
        position: relative;
        top: 0.2rem;
        float: left;
        height:0.48rem;
        text-align: center;
        line-height: 0.48rem;
        transform: rotateZ(90deg);
        color: #c1c1c1;
        box-sizing: border-box;
    }

    #more2{
        height: 0.48rem;
        float: left;   
        color: #707070;
        text-align: center;
        line-height: 0.48rem;
        transform: rotateZ(270deg);
        position: relative;
        top: 0.2rem;
        box-sizing: border-box;
        display: none;
    }

    #details{
        width: 100%;
        min-height: 1rem;
        position: fixed;
        bottom: 0.88rem; 
        background: white;
        z-index: 10;
        display: none;
        color: #212121;
        font-size: .32rem;
        line-height: .44rem;
        padding: .15rem .2rem;
        box-sizing: border-box;
    }

    #occlusion{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: none;
        z-index: 20;
    }

    #mask{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: none;
    }
    .details-price{
        height: .44rem;
        line-height: .44rem;
        color: #9e9e9e;
        font-size: .24rem;
    }
</style>