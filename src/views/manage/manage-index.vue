/**
* create on 2019/11/18 13:21
* @author   wanghao
*/
<template>
    <div class="manage-index flex justify-between">
       <div class="menu-list">
           <div class="menu-item flex justify-center align-center column" v-for="(v,i) in remenuList" :key="i" @click="goToPage(v.path)">
               <i :class="v.icon"></i>
               {{v.name}}
           </div>
       </div>
        <router-view class="manage-content"></router-view>
    </div>
</template>
<script>
    export default {
        name: "manage-index",
        data() {
            return {
                menuList:[
                    {
                        name:"个人信息",
                        path:"manage-info",
                        icon:"el-icon-warning-outline",
                        show:true
                    },
                    {
                        name:"商品",
                        path:"manage-goods",
                        icon:"el-icon-goods",
                        show:JSON.parse(sessionStorage.getItem('user')).admin
                    },{
                        name:"分类",
                        path:"manage-category",
                        icon:"el-icon-goods",
                        show:JSON.parse(sessionStorage.getItem('user')).admin
                    },{
                        name:"新闻",
                        path:"manage-news",
                        icon:"el-icon-tickets",
                        show:JSON.parse(sessionStorage.getItem('user')).admin
                    },{
                        name:"订单",
                        path:"manage-order",
                        icon:"el-icon-tickets",
                        show:true
                    },{
                        name:"用户",
                        path:"manage-users",
                        icon:"el-icon-user",
                        show:JSON.parse(sessionStorage.getItem('user')).admin
                    },
                ]
            }
        },
        created() {

        },
        computed:{
            remenuList(){
                return this.menuList.filter(v=>{
                    return v.show
                })
            }
        },
        beforeRouteEnter(to,from,next){
            next();
            if (!(sessionStorage.getItem('user'))) {
                location.href=location.href.split('#')[0]+'#/goods-list'
            }
        },
        methods: {}
    }
</script>

<style lang='less' scoped>
    .manage-index {
        padding: 30px;
        box-sizing: content-box;
        .menu-list{
            margin-right: 10px;
            .menu-item{
                width: 150px;
                height:120px;
                border: 1px solid #eee;
                font-size: 18px;
                i{
                    font-size: 35px;
                    margin-bottom: 10px;
                }
            }
        }
        .manage-content{
            height: calc(100vh - 200px);
            overflow-y: scroll;
        }
    }
</style>
