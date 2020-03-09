/**
* create on 2019/11/17 14:55
* @author   wanghao
*/
<template>
    <div class="goods-list ">
        <div class="banner" v-if="goodsList.length">
            <carousel></carousel>
        </div>
        <div class="goods-list flex  flex-wrap" v-if="goodsList.length">
         <div class="goods-item flex justify-between column" v-for=" (v,i)  in goodsList" :key="i">
            <div>
                <div class="img">
                    <el-image
                            :src="imgUrl+v.img[0]"
                            fit="contain"
                    >
                    </el-image>
                </div>
                <div class="price flex justify-between align-center">
                    <div class="title ellipsis-row-1">{{v.title}}</div>
                    <div class="count">￥{{v.price}}</div>
                </div>
                <div class="des ellipsis-row-2">
                    {{v.des}}
                </div>
            </div>
            <div class="act flex justify-between align-center">
                <el-button @click="addShopCar(v._id)">加入购物车</el-button>
                <el-button type="danger" @click="goToPage('goods-detail',{id:v._id})">查看详情</el-button>
            </div>
        </div>
        </div>
        <div class="noData" v-else>
            <div>
                <el-image
                        style="width: 400px; height: 280px"
                        :src="noData"
                        fit="contain"
                >
                </el-image>
            </div>
            没有相关数据~
        </div>
    </div>
</template>
<script>
    import {$getAll} from '@/api/goods'
    import {$add} from '@/api/shopCar'
    export default {
        name: "goods-list",
        data() {
            return {
                goodsList:[],
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                noData:require('@/assets/images/noData.jpg'),
                 loginUser:JSON.parse(sessionStorage.getItem('user')),
            }
        },
        created() {
            this.getGoodsList();
        },
        methods: {
            // 添加购物车
            async addShopCar(id){
                let data = await $add({
                     goodId:id,
                     userId: this.loginUser._id,id
                })
                if (data && data.code==0) {

                }
            },
            // 获取商品列表
            async getGoodsList(){
                let data = await $getAll({});
                if (data && data.code===0){
                    this.goodsList=data.data;
                }
            }
        }
    }
</script>

<style lang='less' scoped>
    .goods-list {
        /*height: 100%;*/
        overflow-y: scroll;
        .goods-item{
            width: 18%;
            height: auto;
            box-shadow:0 15px 30px rgba(0,0,0,.1);
            margin: 10px 20px 30px 10px;
            .img{
                width: 100%;
                height: 180px;
                overflow: hidden;
                text-align: center;
            }
            .price{
                margin: 0 10px;
                padding: 15px 0;
               .title{
                   width: 70%
               }
            }
            .des{
                word-break: break-all;
                margin:0 10px;
                min-height: 45px;
                color: #666;
            }
            .act{
                padding: 5px 10px;
            }
        }
        .goods-item:hover{
            cursor: pointer;
            transform: translate3d(0,-3px,0);
            color: #333;
        }
.noData{
    color: #666;
    text-align: center;
    line-height: 50px;
    padding: 30px 0;
}
    }
</style>
