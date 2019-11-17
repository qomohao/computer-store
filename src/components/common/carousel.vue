/**
* create on 2019/11/17 17:09
* @author   wanghao
*/
<template>
    <div class="carousel">
        <el-carousel :interval="4000" type="card" height="350px">
            <el-carousel-item v-for="item in 6" :key="item">
                <el-image
                        :src="src"
                        fit="contain"
                >
                </el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default {
        name: "carousel",
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
    .carousel {
        padding: 10px 50px;
        .el-carousel{
            margin-bottom: 30px;
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
