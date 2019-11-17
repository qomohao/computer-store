/**
* create on 2019/11/17 16:07
* @author   wanghao
*/
<template>
    <div class="goods-detail">
        <div class="base-info flex justify-between ">
            <div class="img">
                <el-image
                        :src="src"
                        fit="contain"
                        style="width:100%;height: 300px;"
                        class="qwe"
                >
                </el-image>
            </div>
            <div class="act qwee">
                <div class="title qwe">
                    这是商品标题
                </div>
                <div class="price">
                    价格：999.8
                </div>
                <div class="address qwe">
                    配送至：上海站
                </div>
                <div class="btn qwe flex  align-center">
                    <el-button>加入购物车</el-button>
                    <el-button type="danger">立即购买</el-button>
                </div>
            </div>
        </div>
        <div class="des-detail" >
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
            <h1>这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述</h1>
        </div>
    </div>
</template>
<script>
    export default {
        name: "goods-detail",
        data() {
            return {
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            }
        },
        created() {

        },
        methods: {}
    }
</script>

<style lang='less' scoped>
    .goods-detail {
        height: 100%;
        overflow-y: scroll;
        .base-info {
            width: 70%;
            margin: auto;
            .img {
                width:40%;
            }
            .act {
                width: 60%;
                padding: 20px;
                .title {
                    font-size: 28px;
                    font-weight: 900;
                    padding: 10px 0;
                }
                .price {
                    font-size: 20px;
                    font-weight: 500;
                    padding: 10px 0;
                }
                .address {
                    padding: 20px 0;
                }
                .btn {
                    padding: 20px 0;
                }
            }
            .des-detail {

            }
        }
        .des-detail{
            width: 70%;
            margin: auto;
        }
    }
</style>
