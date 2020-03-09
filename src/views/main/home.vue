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
               <div class="menu-item" @click="goToPage('goods-list')">首页</div>
                <el-dropdown trigger="click"  @command="handleCommandCategory" @visible-change="catChange">
                     <span class="el-dropdown-link flex justify-between align-center">
                            <div class="act-btn">
                               商品分类<i class="el-icon-arrow-down el-icon--right"></i>
                            </div>
                        </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(v ,i) in recategoryList" :key="i"  :command="v._id">
                            {{v.name}}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="menu-btn flex justify-end align-center">
                <el-input v-model="search" placeholder="请输入搜索内容"></el-input>
                <el-button icon="el-icon-search" circle type="primary" @click="doSearch"></el-button>
                <div class="login">
                    <!-- <el-badge :value="shopCarList.length" :max="99" class="item" v-if="loginUser"> -->
                        <el-button class="shopCar" icon="el-icon-shopping-cart-2" size="small" v-if="loginUser" @click="goToPage('shopping-car')" round></el-button>
                    <!-- </el-badge> -->
                    <el-dropdown v-if="loginUser" trigger="click"  @command="handleCommand">
                        <span class="el-dropdown-link flex justify-between align-center">
                            <el-image
                                    style="width: 20px; height: 20px;border:1px solid #eee"
                                    :src="loginUser.avatar?imgUrl+loginUser.avatar:src"
                                    fit="contain"></el-image>&nbsp;&nbsp;
                            <div class="act-btn flex justify-between align-center">
                                <div class="ellipsis-row-1">{{loginUser.nickname}}</div>
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </div>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(v ,i) in reMenuList" :key="i"  :command="v.path">
                                {{v.name}}
                            </el-dropdown-item>
                            <el-dropdown-item   :command=1>登出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <div v-if="!loginUser">
                        <el-button @click="goToPage('login')">登 录</el-button>
                        <el-button type="danger" @click="goToPage('register')">注 册</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="main  flex justify-between align-center">
            <router-view class="content" :key="key"></router-view>
            <right-news class="right-news"></right-news>
        </div>
<!--        <div class="footer flex justify-center align-center">-->
<!--            <h1>footer</h1>-->
<!--        </div>-->
    </div>
</template>  
<script>
    import { $getAllCat  } from '@/api/category';
    import { $getAllCar  } from '@/api/shopCar';
    export default {
        name: "home",
        data() {
            return {
                search:"",
                menuList:[
                    // {
                    //     path:"goods-list",
                    //     name:"首页",
                    //     show:true
                    // },{
                    //     path:"goods-sort",
                    //     name:"商品分类",
                    //     show:true
                    // },
                    {
                        path:"goods-create",
                        name:"发布商品",
                        show:true
                    },{
                        path:"news-create",
                        name:"创建新闻",
                        show:true
                    },
                    // {
                    //     path:"search-result",
                    //     name:"搜索结果页",
                    //     show:true
                    // },
                    {
                        path:"manage",
                        name:"管理页面",
                        // show:JSON.parse(sessionStorage.getItem('user'))&&JSON.parse(sessionStorage.getItem('user')).admin
                        show:true
                    }
                ],
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575988998268&di=6b26631483682850aa1f948ff92c069c&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F56%2F69%2F585747cfd354024.jpg',
                loginUser:JSON.parse(sessionStorage.getItem('user')),
                categoryList:[]
            }
        },
        created() {
            this.categoryData();
        },
        computed:{
            reMenuList:function () {
              return this.menuList.filter(v=>{
                  return v.show
              })
            },
            key() {
                return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
            },
            recategoryList(){
                return this.categoryList.filter(v=>{
                    return v.ifShow
                })
            }
        },
        methods: {
            catChange(val){
                if (val) {
                    this.categoryData()
                }
            },
            // 获取分类列表
            async categoryData(){
                let data = await $getAllCat({});
                if (data && data.code==0){
                    this.categoryList=data.data;
                }
            },            
            doSearch(){
              if (!this.search){
                  this.$message({
                      type: 'warning',
                      message: '不能为空!'
                  });
                  return;
              }
              this.goToPage('search-result',{key:this.search})
            },
            // 点击下拉框跳转管理相关页面
            handleCommand(path){
                if (path!==1){
                    this.goToPage(path);
                } else{
                    sessionStorage.removeItem('user');
                    location.reload();
                }

            },
            // 点击下拉框跳转分类查询结果页面
            handleCommandCategory(id){
                this.goToPage('goods-sort',{categoryId:id});
            },
        }
    }
</script>

<style lang='less' scoped>
    .home {
        height: 100vh;
        overflow-y: hidden;
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
                    .shopCar{
                        margin: 0 20px;
                    }
                }
                .el-image{
                    border-radius: 50%;
                    overflow: hidden;
                }
            }
            .el-dropdown-link {
                .act-btn{
                    padding-left: 10px;
                     >div{
                        width: 60px;
                    }
                }
            }
        }
        .main{
            height: calc(100vh - 85px);
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
    .el-dropdown-link {
        cursor: pointer;
        /*color: #409EFF;*/
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
