<template>
  	<footer class="fixbooking-con flexbox">
        <div class="fixbooking-pricecon flexbox-item border-top">
            <em class="fixbooking-priceicon">¥</em>
            <span class="fixbooking-price">{{newPrice}}</span>
            <span class="prdcard-marketprice">¥{{oldPrice}}</span>
        </div>
        <div class="fixbooking-btn flexbox-item">
            <router-link to='/weekend/order'>
                <a id="bookingBtn">立即预订</a>
            </router-link>
        </div>
    </footer>
</template>

<script>
	export default {
	    data () {
	      return {
            newPrice: localStorage.newPrice,
            oldPrice: localStorage.oldPrice
          }
	    }
	}
</script>

<style scoped>
    .fixbooking-con {
        position: fixed;
        z-index: 2;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
    }
    .flexbox {
        display: flex;
        width: 100%;
    }
    .flexbox-item, .flexbox-layout {
        flex: 1;
    }
    .fixbooking-pricecon {
        background: #fff;
        color: #ff8300;
        text-indent: .2rem;
    }
    .fixbooking-priceicon {
        margin-right: .1rem;
        font-size: .28rem;
    }
    .fixbooking-price {
        font-size: .42rem;
    }
    .prdcard-marketprice {
        color: #9e9e9e;
        font-size: .24rem;
        text-decoration: line-through;
    }
    .fixbooking-btn {
        overflow: hidden;
        height: 1rem;
        background: #ff8300;
        color: #fff;
        font-size: .4rem;
        text-align: center;
    }
    .fixbooking-btn a {
        display: block;
        color: #fff;
    }
</style>