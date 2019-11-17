/**
* create on 2019/11/15 14:12
* @author   wanghao
*/
<template>
    <div class="home">
        <div class="header flex justify-between align-center">
            <el-image
                    :src="src"
                    fit="contain"
                    style="width: 60px;height: 60px;margin-right: 20px"
                    @click="reload"
            >
            </el-image>
            <div class="menu-list flex align-center">
               <div class="menu-item" v-for="(v,i) in menuList" :key="i" @click="goToPage(v.path)">
                    {{v.name}}
               </div>
            </div>
            <div class="menu-btn flex justify-end align-center">
                <el-input v-model="search" placeholder="请输入搜索内容"></el-input>
                <el-button icon="el-icon-search" circle type="primary"></el-button>
                <div class="login">
                    <el-button>登 录</el-button>
                    <el-button type="danger">注 册</el-button>
                </div>
            </div>
        </div>
        <div class="main flex justify-between align-center">
            <router-view class="content"></router-view>
            <right-news class="right-news"></right-news>
        </div>
        <div class="footer flex justify-center align-center">
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
                        path:"goods-list",
                        name:"首页"
                    },{
                        path:"",
                        name:"商品"
                    },{
                        path:"",
                        name:"分类"
                    },{
                        path:"about-us",
                        name:"关于我们"
                    },
                ],
                src: 'http://img2.imgtn.bdimg.com/it/u=3947895400,1063228544&fm=26&gp=0.jpg'
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
        overflow-y: scroll;
        >div{
         padding: 0 20px;
        }
        .header{
            height: 60px;
           border-bottom: 1px solid #eee;
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
            height: calc(100vh - 60px);
            overflow: hidden;
            padding-top: 20px;
            .content{
                height: 100%;
                width: 80%;
            }
            .right-news{
                width: 20%;
            }
        }
        .footer{
            height: 100px;
            background: rgba(0,0,0,0.9);
            color: #eee;
        }
    }
</style>
