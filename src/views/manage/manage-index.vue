/**
* create on 2019/11/18 13:21
* @author   wanghao
*/
<template>
    <div class="manage-index flex justify-between">
       <div class="menu-list">
           <div class="menu-item flex justify-center align-center column" v-for="(v,i) in menuList" :key="i" @click="goToPage(v.path)">
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
                        name:"商品",
                        path:"manage-goods",
                        icon:"el-icon-goods"
                    },{
                        name:"新闻",
                        path:"manage-news",
                        icon:"el-icon-tickets"
                    },{
                        name:"用户",
                        path:"manage-users",
                        icon:"el-icon-user"
                    },{
                        name:"个人信息",
                        path:"manage-info",
                        icon:"el-icon-warning-outline"
                    },
                ]
            }
        },
        created() {

        },
        methods: {}
    }
</script>

<style lang='less' scoped>
    .manage-index {
        padding: 30px;
        box-sizing: border-box;
        .menu-list{
            margin-right: 10px;
            .menu-item{
                width: 200px;
                height:150px;
                border: 1px solid #eee;
                font-size: 18px;
                i{
                    font-size: 35px;
                    margin-bottom: 10px;
                }
            }
        }
        .manage-content{
        }
    }
</style>
