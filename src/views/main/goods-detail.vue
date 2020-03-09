/**
* create on 2019/11/17 16:07
* @author   wanghao
*/
<template>
    <div class="goods-detail">
        <div class="base-info flex justify-between ">
            <div class="img">
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="(v,i) in slideArr" :key="i">
                            <el-image
                                    :src="imgUrl+v"
                                    fit="contain"
                                    style="width:100%;height: 300px;"
                            >
                            </el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="act flex justify-between column">
               <div>
                   <div class="title">
                       {{goodsDetail.title}}
                   </div>
                   <div class="price">
                       价格：￥{{goodsDetail.price}}
                   </div>
                   <div class="txt">
                       {{goodsDetail.des}}
                   </div>
                   <div class="address">
                       产地： {{goodsDetail.address}}
                   </div>
               </div>
                <div class="btn flex  align-center">
                    <el-input-number v-model="num" @change="handleChange" :min="1" ></el-input-number>
                    <el-button @click="addShopCar(goodsDetail._id)">加入购物车</el-button>
                    <el-button type="danger" @click="nowBuy">立即购买</el-button>
                </div>
            </div>
        </div>
        <div class="des-detail" >
            <div class="hr flex justify-center align-center">
                <i></i>
                <span>商品详情</span>
                <i></i>
            </div>
            <div class="img" v-for="(v,i) in slideArr" :key="i">
                <el-image
                        :src="imgUrl+v"
                        fit="contain"
                        style="width:100%;height: auto;"
                >
                </el-image>
            </div>
        </div>
    </div>
</template>
<script>
    import {$getOne} from '@/api/goods';
    import {$add} from '@/api/shopCar'
    
    export default {
        name: "goods-detail",
        data() {
            return {
                goodsDetail:"",
                slideArr:[],
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                num: 1,
                loginUser:JSON.parse(sessionStorage.getItem('user')),
            }
        },
        created() {
            this.getGoodsDetail();
        },
        methods: {
            // 立即购买
            async nowBuy(id){
                if (!this.loginUser) {
                     this.$message({
                        type: 'warning',
                        message: '请先登录!'
                    });
                    return
                }
                this.goodsDetail.count=this.num;
                sessionStorage.setItem('toPayArr',JSON.stringify([this.goodsDetail]))
                this.goToPage('order-detail');
            },
            // 添加购物车
            async addShopCar(id){
                if (!this.loginUser) {
                     this.$message({
                        type: 'warning',
                        message: '请先登录!'
                    });
                    return
                }
                let data = await $add({
                     goodId:id,
                     userId: this.loginUser._id,id,
                     count:this.num
                })
                if (data && data.code==0) {
                }
            },
            handleChange(value) {
                // console.log(value);
            },
            // 根据id获取商品详情
            async getGoodsDetail(){
                let data = await $getOne({id:this.$route.query.id});
                if (data && data.code===0){
                    this.goodsDetail=data.data;
                    this.slideArr=data.data.img;
                }
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
            // border: 1px solid #eee;
            .img {
                width:40%;
                padding: 10px;
                /*border-right: 1px solid #eee;*/
                /*margin-right: 20px;*/
                .el-carousel{
                    height: 100%;
                }
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
            // border: 1px solid #eee;
            margin-top: 20px;
            padding: 10px;
            box-sizing: border-box;
            .hr{
                text-align: center;
                 margin: 20px 0;
                 color: #666;
                i{
                    width: 200px;
                    height: 1px;
                    background: #ccc;
                }
                span{
                    font-size: 20px;
                    padding: 0 10px;
                }
            }
        }
    }
</style>
