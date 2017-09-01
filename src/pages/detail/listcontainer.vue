<template>
    <div>
        <div class="recommend-container">
            <h3 class="recommend-title">去哪儿推荐</h3>
            <recommend></recommend>
        </div>
        <ticket-type :groups="groups"></ticket-type>
    </div> 
</template>
<script>
import Recommend from './recommend'
import TicketType from './tickettype'
    export default {
        props:["groups"],
        data () {
          return {}
        },
        components: {
            "ticket-type" : TicketType,
            "recommend" : Recommend
        }
       
    }
</script>

<style scoped>
    @import "../../assets/font/iconfont.css";
    .recommend-container{ 
        font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
        color: #212121;
        font-size: .28em;
        line-height: 1; 
        position: relative;
        background: #fff;
        margin-bottom: .2rem;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        flex-direction: column;
    }
    .recommend-title{
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=);
        background-repeat: no-repeat;
        background-size: .5rem .5rem;
        background-position: .2rem center;
        text-indent: .7rem;
        overflow: hidden;
        position: relative;
        z-index: 4;
        margin-bottom: -.02rem;
        padding: 0 .2rem;
        height: .88rem;
        color: #333;
        font-size: .32rem;
        line-height: .88rem;
    }
</style>
