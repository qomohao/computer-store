/**
* create on 2019/11/17 14:55
* @author   wanghao
*/
<template>
    <div class="goods-list ">
        <div class="banner">
            <carousel></carousel>
        </div>
        <div class="flex  flex-wrap">
         <div class="goods-item" v-for=" i  in 24" >
            <div class="img">
                <el-image
                        :src="src"
                        fit="contain"
                >
                </el-image>
            </div>
            <div class="des ellipsis-row-2">
                这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品这是一件商品
            </div>
            <div class="act flex justify-between align-center">
                <el-button>加入购物车</el-button>
                <el-button type="danger" @click="goToPage('goods-detail')">查看详情</el-button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "goods-list",
        data() {
            return {
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
            }
        },
        created() {

        },
        methods: {}
    }
</script>

<style lang='less' scoped>
    .goods-list {
        height: 100%;
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
            }
            .des{
                word-break: break-all;
                margin: 10px;
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

    }
</style>
