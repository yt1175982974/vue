<template>
<div>
    <div class="layer"></div>
    <div class="orderdetail-wrap">
        <div class="orderdetail-title">
            <div class="proinfo-title">
                <h2 class="proinfo-title-name">长隆水上乐园成人票（日夜场通玩）</h2>
                <div class="proinfo-title-detail">
                    <div class="detail-supplier">
                        <span class="supplier-logo"></span>去哪儿直销
                    </div>
                    <div class="detaill-tip">
                        <span class="tips">
                            <span class="tips-icon iconfont">&#xe67f;</span>可定明日
                        </span>
                        <span class="tips">
                            <span class="tips-icon iconfont">&#xe663;</span>入园保障
                        </span>
                    </div>
                </div>
            </div>
            <span class="prpinfo-close iconfont"  @click="handleCloseClick">&#xe63f;</span>
        </div>
        <div class="orderdetail-content">
            <div class="content-head">
                <div class="prdintro-item">
                    <div class="prdintro-icon">
                        <span class="prdintroicon iconfont">&#xe663;</span>条件退
                    </div>
                    <div class="prdintro-detail">
                        <div>
                            使用日期截止前一天13:50可申请退款<br>"不支持部分退款"
                        </div>
                    </div>
                </div>
            </div>
            <iscroll-view ref="scrollView" class="scroll-view"  @pullUp="pullUp" @pullDown="pullDown" :options="{mouseWheel: true}">
                <div class="content-body">
                    <div class="prddetail-item">
                        <h5 class="prddetail-name">有效时间</h5>
                        <p class="prddetail-txt">游玩日期当天有效</p>
                    </div>
                    <div class="prddetail-item">
                        <h5 class="prddetail-name">预定时间</h5>
                        <p class="prddetail-txt">需要在游玩前一天的23:30 前预定</p>
                    </div>
                    <div class="prddetail-item">
                        <h5 class="prddetail-name">入园信息</h5>
                        <p class="prddetail-txt">
                            【兑换凭证】<br>可以通过商家的确认短信,手机号,姓名,进行兑换<br>【商家确认短信发送时间】<br>下单后1分钟内发送入园短信<br>【入园方式】<br>凭兑换凭证换票<br>【换票地址】<br>长隆水上乐园景区门口自助取票机处输入短信中的电子票号和手机号<br>【入园地址】<br>长隆水上乐园景区门口<br>
                        </p>
                    </div>
                    <div class="prddetail-item">
                        <h5 class="prddetail-name">退款说明</h5>
                        <p class="prddetail-txt">
                        【关于改期】系统不支持改期，若需改期用户请提前一天前端取消订单后再次预定；游玩当天不退不改。<br>任何时间内，票一经验证或取票，均不可退改。</p>
                    </div>
                    <div class="prddetail-item">
                        <h5 class="prddetail-name">费用说明</h5>
                        <p class="prddetail-txt">
                            【费用包含】长隆水上成人票1张，景区一票通玩，无需自费(购买零食除外）<br>注：请勿携带食物入场。<br><br>【暑期促销】2017年8月25日-8月31日期间，购买水上乐园相关成人票（包含门票，套票，夜场票），每名购票成人可携带1名1.5米以下儿童免费入园（仅限水上乐园，其他园区不可携带，嘉宾票，教师和司机陪票，中小学生票，情侣票不享受此活动）<br><br>【换票方式】<br>方法一：景区门口自助取票机处输入短信中的电子票号和手机号；<br>方法二：景区门口有二维码提供用户扫码，扫码后是一个二维码门票的生成界面，用户输入取票凭证码以及手机号码，会生成门票二维码，凭门票二维码可以直接扫码入园。（生成入园二维码后，视同已经取票，无法再在自助取票机取票，任何时间内均无法退改）。
                        </p>
                    </div>
                    <div class="prddetail-item">
                        <h5 class="prddetail-name">使用说明</h5>
                        <p class="prddetail-txt">
                            【开放时间】09：30—22：00如有调整以现场为准；<br>【入园须知】最晚取票时间为当日闭园前2小时；<br>【票类说明】全票对象：指成人及身高1.5米以上儿童。<br>【关于改期】系统不支持改期，若需改期用户请提前一天前端取消订单后再次预定；游玩当天不可退改。<br>【温馨提示】<br>1、购票信息敬请注意保密，如因个人原因泄露订票信息而造成的损失，去哪儿网对此不承担任何责任；<br>2、若无法在自助取票机取票，或是取票数量不对，取票过程中遇到问题请及时咨询景区工作人员。<br>3、园区为户外项目，受天气等不可抗力因素影响较大，建议您出行前查看当地天气预报，由于天气原因、自然灾害、机械检修等原因而不能游玩全部的项目，去哪儿网将不作退款，并不负责补偿。
                        </p>
                    </div>
                </div>     
            </iscroll-view> 
        </div>              
        <fixbooking></fixbooking>
    </div>
    
</div>    
</template>

<script>
    import FixBooking from './fixbooking'
    export default {
        data () {
            return {

           }
        },
        components: {
            "fixbooking" : FixBooking
        },
        methods:{
            handleCloseClick:function() { 
                this.$store.commit("changeIsPop");
            },
            pullUp(){
                console.log('pull up')
            },
            pullDown(){
                console.log('pull down')
            }
        },
        mounted () {
            this.$refs.scrollView.refresh()
        }
    }
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .layer{
        position: fixed;
        z-index: 98;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
    }
    .orderdetail-wrap{
        display: block;
        height: 607px;
        width: 355px;
        margin-left: -177.5px;
        margin-top: -303.5px;
        position: fixed;
        z-index: 99;
        top: 50%;
        left: 50%;
        min-width: 5.2rem;
        min-height: 4.2rem;
        background-color: #fff;
        overflow: hidden;
    }
    .orderdetail-title{
        line-height: .5rem;
        background-color: #fff;
        color: #333;
        font-size: .32rem;
        padding: .2rem;
        word-wrap: break-word;
        word-break: break-all;
        border-bottom: 1px solid #e0e0e0;
    }
    .proinfo-title{
        line-height: .5rem;
        /*background-color: #fff;*/
        color: #333;
        font-size: .32rem;
        /*padding: .2rem;*/
        word-wrap: break-word;
        word-break: break-all;
    }
    .proinfo-title-name{
        margin-right: .5rem;
        font-size: .32rem;
        font-weight: bold;
        color: #333;
        line-height: .45rem;
    }
    .proinfo-title-detail{
        /*overflow: hidden;*/
        position: relative;
        margin-top: .3rem;
        font-weight: normal;
    }
    .detail-supplier{
        position: absolute;
        top: 0;
        left: 0;
        color: #999;
        font-size: .24rem;
        line-height: .4rem;
    }
    .supplier-logo{
        display: block;
        float: left;
        width: .32rem;
        height: .32rem;
        margin: .04rem .06rem 0 0;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAADAFBMVEUBnqU/u8V47P81gY6q2NVNj53f9v4phZCCvrwfnbTx9vqv//8yna1GrK4Qpb1NxtuN4PDm+P/O6vi9+P8jrLYIrKUypK8fp6UzmZlqrrFrx8RJn6zW///59v960OEYmJuh8/Gv8f8Zpb4frL2DxNgvo7ofpb4elq4XrasxlJpPnqVOuMbM//+K5/Y9nZxbus4ZrLxVn6ocoLknnrQgmp0roqA2o6qn4+MkqsNtr7tvv9aSw8Bhy+U/lJsLpbGa8//s9v+96O45laoKrbYMrLqG1tV34vbk+Pk3o73F//8crMet4uZZsrj/+f9foZ1hrsKS0+X68Pg9m6UorbQZrLQXnKsqpa0om54QnqzZ+P1iprEsn7oQrrqJw848rbV9rbdaz9kpl7Axm6gnrL0qrMIplpOJ7PEiprWFxc942ufe//9JlaM1mLVww9PD1+BKobWt7vRMvNQzrbhj4forprVEkqbY9/o4sbqb3/QatLRd0OIwtsJBm6R9x8ghpq1rt8QRrrOKyNe+///K8vzB+fY2nKqK7v789/M7i5Rat8ag8O8RrLCL09/m//84kprv//9Wrb4vrMperMBQlpYUsr4qrK7///8nnKUarc4onqwmp8QLpKy39v9Doa1o0NkplKV93O5xv78zo6Qhra0QtbUWtbsPo6Unrs4Ypa73//8yprMOprNixsaay8dCsMlsnKaCta4inaVCqbK03+VztLplt8yV8PVYnKkPosSb1uYIrsQjt8XP7+5Koaut7eyUwMsmtr9QwMx54/kZpbYap8Mes7khtb0hpcUps7YSpa9EoqEnpKgjnK8zm7ZHk6A0op/x/fkXssY8paFgo7O38fM7m7MqqL6VxdMxl6ZQpqew6OfA8PBMusc2ho+Awce4/P/D+ftxq7ay8f+EyN9QscKY6fpTpqo6pbVswtNj1+Sm8/8/laxmtbmW1+v19vphztUptcUql5yGzst+5OZRlah6ydZJp8BFsb1dz+nP9v39/PeY2d9YsrsQs8RFp7RywcYOTfAZAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMi8yNC8xNdk79y4AAAMtSURBVCiRY5CV7Y3szQIBGTAAsdgEBfv7BftXcnExcLFtznidAwStrUlAwAMC001NTVP1FprLuDO4O25hN1YCg/TDQABiNIiKimqIL7r5oIyhN+rm9JDVq1ekn6irC66rqwsBge7upQ0rwmoe9jLIaJmJH21oOHnyZB1QQd1RoFRl5Uk7Z2eDktbtMgw6eqdXzJ5tsHv34cNqFhaHDYDgsMhhF5ddf5Vn2uoApetClJUPHz4CBFAnpM+cqXxx1y4DY5B0UHq6uqqxmprajBk7ZiyfZWx89mq+U6IaH5/yqmwZBpma9PQncgvc+I2O8Hl5cSZ+s3qs8nbSfM4jR5TFzgGlS42NC2RkPD+fPi2y4rSZz2+Z3l6ZrzzpU6Y0nAYangWUllx7S6frlMT5S1LmLVn901b2NgaFKa9eHSzhCdRdUrKpr95TJnay34be/v7+C9MCp5XVaj43XrHCFChtW3K4ZPo/AR2dKyy9K9t/rbzg6+u78sF/6fkrRKDSh9PTyzObdLL6QQb3ygKle+dMmLliRRDQYyDpwyEriuZtm/Ozf+XKLKAioJqsF6tWTAW53LYkJMZ59eGSkjjeLc39/Vlzdl7f474yK1esLow1CyIdEwM0vy787pXezT1/5nZY9/f3ChTVhUOkDx8Gherh4Lh6YZnLH+WnLuLoFZJpOhg8HSp9LR0UFXViTwMeSU/V0Nj46fb6xibt06fBds9MBwJl5RUHEpq+3O9cXDl7quu+N7b2bRvDbEFhbgx0FiidHGbUra/oLFoWcjpNQcJMn3uVCSjUaiBy6eknF38XUPRPCq4OS1tjcvpqW9FpiDQ4/Sgrd68I63y1lWfjmar34SfqPGxKws57gg0/rBwTA3Rb+swbbXeCg9cdKgemqmim9I19wFADSyvzAUHImVUvg0MO/CgUCQlVSykODQNF6F6wv5Vnqbm4HF2xQmQpQ0p65ez09IkTI4oMZRiyov7NVFMzUptoETNltUE60JrDhxsaUtQ5k9NvWPYy9DrGMxsfRgUNDSHBYdMXPfOMZOhny9tfmoQKpk+frtmndc9bho3Bob+fLQsrEOx3cAAAcOaIUCNkx/4AAAAASUVORK5CYII=) 0 0 no-repeat;
        background-size: 100% 100%;
        border-radius: .06rem;
    }
    .detaill-tip{
        overflow: hidden;
        line-height: .4rem;
        margin-left: 1.6rem;
        text-align: right;
        font-size: 0;
    }
    .tips{
        display: inline-block;
        height: .24rem;
        color: #666;
        font-size: .24rem;
        line-height: .24rem;
        white-space: nowrap;
        margin: 0 0 .04rem .1rem;
        padding: .04rem;
    }
    .tips-icon{
        margin-right: .08rem;
        color: #1ba9ba;
        font-family: 'mpiconfont';
        speak: none;
        font-size: .12rem;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
    }
    .prpinfo-close{
        display: inline-block;
        position: absolute;
        top: .25rem;
        right: .2rem;
        width: .4rem;
        height: .4rem;
        font-size: .4rem;
        color: #b5b5b5;
    }
    .orderdetail-content{
       
    } 
    .content-head{
        margin: 0 .2rem;
        padding: .28rem 0;
        background: #fff;
        position: relative;
        border-bottom: 1px solid #e0e0e0;
    } 
    .prdintro-item{
        position: relative;
        vertical-align: middle;
        margin-bottom: 0;
    }
    .prdintro-icon{
        float: left;
        margin-right: .14rem;
        margin-top: .04rem;
        height: .24rem;
        font-size: .24rem;
        line-height: .24rem;
        border: 0;
        color: #666;
    }
    .prdintroicon{
        margin-right: .08rem;
        color: #1ba9ba;
        font-family: 'mpiconfont';
        speak: none;
        font-size: .12rem;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;   
    }
    .prdintro-detail{
        overflow: hidden;
        color: #666;
        line-height: .36rem;
        font-size: .28rem;
    } 
    .scroll-view {      
        touch-action: none;
        position: fixed;
        top: 178px;
        bottom: 70px;
        left: 0;
        right: 0;
        overflow: hidden;
    } 
    .content-body{
        margin: 0 .2rem;
        padding: .28rem .28rem;
        background: #fff;
        position: relative;
    }
    .prddetail-item{
        margin-bottom: .4rem;
    }
    .prddetail-name{
        margin-bottom: .2rem;
        color: #333;
        font-size: .28rem;
    }
    .prddetail-txt{
        color: #999;
        font-size: .28rem;
        line-height: .36rem;
    } 
</style>
