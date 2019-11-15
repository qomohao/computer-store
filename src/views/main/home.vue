/**
* create on 2019/11/15 14:12
* @author   wanghao
*/
<template>
    <div class="home">
        <div class="header qwee flex justify-between align-center">
            <div class="menu-list flex align-center">
               <div class="menu-item" v-for="(v,i) in menuList" :key="i" @click="goToPage(v.path)">
                    {{v.name}}
               </div>
            </div>
            <div class="menu-btn flex justify-end align-center">
                <el-input v-model="search" placeholder="请输入搜索内容"></el-input>
                <el-button icon="el-icon-search" circle type="primary"></el-button>
                <div class="login">
                    登 录
                    注 册
                </div>
            </div>
        </div>
        <div class="main qwe">
         <router-view></router-view>
        </div>
        <div class="footer qwee  flex justify-center align-center">
            <h1>footer</h1>
        </div>
    </div>
</template>
<script>
    export default {
        name: "home",
        data() {
            return {
                search:"",
                menuList:[
                    {
                        path:"test1",
                        name:"首页"
                    },{
                        path:"test2",
                        name:"商品"
                    },{
                        path:"test2",
                        name:"分类"
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
    .home {
        height: 100vh;
        overflow: hidden;
        >div{
         padding: 0 20px;
        }
        .header{
            height: 60px;
            >div{
                width: 50%;
            }
            .menu-list{
                overflow-x: scroll;
                .menu-item{
                    flex-shrink: 0;
                    padding: 0 20px;
                }
            }
            .menu-btn{
                .el-input{
                    width: auto;
                    padding: 0 5px;
                }
                .login{
                    margin-left: 50px;
                }
            }
        }
        .main{
            height: calc(100vh - 160px);
            overflow-y: scroll;
        }
        .footer{
            height: 100px;
        }
    }
</style>
