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
               <div class="menu-item" v-for="(v,i) in reMenuList" :key="i" @click="goToPage(v.path)">
                    {{v.name}}
               </div>
            </div>
            <div class="menu-btn flex justify-end align-center">
                <el-input v-model="search" placeholder="请输入搜索内容"></el-input>
                <el-button icon="el-icon-search" circle type="primary" @click="goToPage('search-result')"></el-button>
                <div class="login">
                    <el-badge :value="15" :max="10" class="item" >
                        <el-button icon="el-icon-shopping-cart-2" size="small"  @click="goToPage('shopping-car')" round></el-button>
                    </el-badge>
                    <el-button @click="goToPage('login')">登 录</el-button>
                    <el-button type="danger" @click="goToPage('register')">注 册</el-button>
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
                        name:"首页",
                        show:true
                    },{
                        path:"goods-create",
                        name:"发布商品",
                        show:true
                    },{
                        path:"news-create",
                        name:"创建新闻",
                        show:true
                    },{
                        path:"search-result",
                        name:"搜索结果页",
                        show:true
                    },{
                        path:"manage",
                        name:"管理页面",
                        show:true
                    }
                ],
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
            }
        },
        created() {

        },
        computed:{
            reMenuList:function () {
              return this.menuList.filter(v=>{
                  return v.show
              })
            }
        },
        methods: {
           
        }
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
                    .el-badge{
                        margin: 0 30px;
                        /deep/ .el-icon-shopping-cart-2{
                            font-size: 16px;
                        }
                    }
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
                box-sizing: border-box;
                padding: 0 20px;
            }
        }
        .footer{
            height: 100px;
            background: rgba(0,0,0,0.9);
            color: #eee;
        }
    }
</style>
