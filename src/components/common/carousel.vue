/**
* create on 2019/11/17 17:09
* @author   wanghao
*/
<template>
    <div class="carousel">
        <el-carousel :interval="4000" type="card" height="350px">
            <el-carousel-item v-for="(v,i) in regoodsList" :key="i" >
                <el-image
                        :src="imgUrl+v.img[0]"
                        fit="fill"
                        style="width: 100%;height: 100%"
                        @click="goToPage('goods-detail',{id:v._id})"
                >
                </el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    import {$getAll} from '@/api/goods'
    export default {
        name: "carousel",
        data() {
            return {
                goodsList:[],
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
            }
        },
        created() {
            this.getGoodsList();
        },
        computed:{
            regoodsList(){
                return this.goodsList.filter(v=>{
                    return v.isSlide
                })
            }
        },
        methods: {
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
    .carousel {
        padding: 10px 50px;
        box-shadow: 0 0 3px #eee;
        margin-bottom: 20px;
        .el-carousel{
            margin-bottom: 30px;
        }
        .el-carousel__item{
            border: 1px solid #eee;
            text-align: center;
        }
        .el-carousel__item  .el-image{
            height: 100%;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
</style>
