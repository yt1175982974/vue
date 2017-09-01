<template>
    <div class="detail-page" @mousewheel="isShowAppIcon">
        <ticket-header></ticket-header>
        <swipe></swipe>  
        <detail-intro></detail-intro>
        <comments-info></comments-info>
        <announce></announce>
        <list-container :groups="groups"></list-container>
        <order-detail v-show="$store.state.isPop"></order-detail>
        <comment-container :commentsInfo="commentsInfo"></comment-container>
        <promote :promoteInfo="promoteInfo"></promote>
        <ordering></ordering>
        <download :deltaY="deltaY"></download>
    </div>
</template>

<script>
    import TicketHeader from '../productdetail/header.vue'
    import Swipe from '../productdetail/swipe.vue'
    import Listcontainer from './listcontainer'
    import TicketIntro from './baseinfo'
    import CommentsInfo from './commentsinfo'
    import Announce from './announce'    
    import CommentContainer from './commentcontainer'
    import Promote from './promote'
    import OrderDetail from './orderdetail'
    import Ordering from '../../components/ordering'
    import Download from './download'

    export default {
        name: 'detail',
        data () {
            return {
                groups:[],
                commentsInfo:[],
                promoteInfo:[],
                deltaY: true
            }
        },
        components: {
            "ticket-header": TicketHeader,
            "swipe": Swipe,
            "detail-intro" : TicketIntro,
            "comments-info" : CommentsInfo,
            "detail-intro": TicketIntro,
            "comments-info": CommentsInfo,
            "announce" : Announce,
            "comment-container" : CommentContainer,
            "promote" : Promote,
            "list-container":  Listcontainer,
            "order-detail" : OrderDetail,
            "ordering" : Ordering,
            "download" : Download
        },
        created() {
            this.$http.get('/static/detail.json').then(response => {
                var data = response.body.data;       
                this.groups = data.groups;
                this.commentsInfo = data.commentsInfo;
                this.promoteInfo = data.promoteInfo;
            }, response => {
                console.log("ajax error");
            });
        },
        methods: {
            isShowAppIcon(e){
                // console.log(e)
                if(e.deltaY > 0) {
                    this.deltaY = true;

                } else {
                    this.deltaY = false;
                }
            }
        }
    }
</script>
<style scoped>
    .detail-page{
        background: #f5f5f5;
    }
    .swiper{
        width: 100%;
        height: 3.5rem;
        background: deeppink;
    }
    
</style>
