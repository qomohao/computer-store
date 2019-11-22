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
                >
                </el-image>
            </div>
            <div class="act">
                <div class="title">
                    这是商品标题
                </div>
                <div class="price">
                    价格：999.8
                </div>
                <div class="txt">
                    这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述
                    这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述
                    这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述这是商品描述
                </div>
                <div class="address">
                    配送至：上海站
                </div>
                <div class="btn flex  align-center">
                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
                num: 1
            }
        },
        created() {

        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<style lang='less' scoped>
    .goods-detail {
        height: 100%;
        overflow-y: scroll;
        .base-info {
            width: 70%;
            margin: auto;
            border: 1px solid #eee;
            .img {
                width:40%;
                padding: 10px;
            }
            .act {
                width: 60%;
                padding: 0 20px;
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
                .txt{
                    color: #666;
                    padding: 10px;
                    background: #eee;
                    border-radius: 5px;
                }
                .address {
                    margin-top: 10px;
                    padding: 10px 0;
                }
                .btn {
                    padding: 20px 0;
                    .el-input-number{
                        width: 130px;
                        margin-right: 10px;
                    }
                }
            }
        }
        .des-detail{
            width: 70%;
            margin: auto;
            border: 1px solid #eee;
            margin-top: 20px;
            padding: 10px;
        }
    }
</style>
