/**
* create on 2019/11/17 16:07
* @author   wanghao
*/
<template>
    <div class="news-detail">
        <div class="title">
            <p>{{newsDetail.title}}</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <p class="author">{{newsDetail.author}}&nbsp;&nbsp;&nbsp;&nbsp;
            {{newsDetail.create_at}}</p>
        </div>
        <div class="des-detail" >
            <div class="img" v-for="(v,i) in slideArr" :key="i">
                <el-image
                        :src="imgUrl+v"
                        fit="contain"
                        style="width:100%;height: auto;"
                >
                </el-image>
            </div>
            <div class="content">{{newsDetail.content}}</div>
        </div>
    </div>
</template>
<script>
    import {$getOne} from '@/api/news'
    export default {
        name: "news-detail",
        data() {
            return {
                newsDetail:"",
                slideArr:[],
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                num: 1
            }
        },
        created() {
            this.getNewsDetail();
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            // 根据id获取新闻详情
            async getNewsDetail(){
                let data = await $getOne({id:this.$route.query.id});
                if (data && data.code===0){
                    this.newsDetail=data.data;
                    this.slideArr=data.data.img;
                }
            }
        }
    }
</script>

<style lang='less' scoped>
    .news-detail {
        height: 100%;
        overflow-y: scroll;
        .title{
            width: 70%;
            margin: auto;
             font-size: 20px;
            .author{
                font-size: 14px;
            }
        }
        .des-detail{
            width: 70%;
            margin: auto;
            // border: 1px solid #eee;
            margin-top: 20px;
            padding: 10px;
            box-sizing: border-box;
            .content{
                padding: 20px;
                line-height: 30px;
                 text-indent:20px;
                 word-break: break-all;
            }
        }
    }
</style>
