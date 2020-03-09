/**
* create on 2019/11/17 14:42
* @author   wanghao
*/
<template>
    <div class="right-news">
        <div class="news-item" v-for="(v,i) in newsList" :key="i" @click="goToNewsDetails(v._id)">
            <div class="content ellipsis-row-1">
                {{v.title}}
            </div>
            <div class="info flex justify-between align-center">
                <div class="author ellipsis-row-1">作者：{{v.author}}</div>
                <div class="date">{{formatDate(v.create_at)}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import {$getAll} from '@/api/news'
    export default {
        name: "right-news",
        data() {
            return {
                newsList:[]
            }
        },
        created() {
            this.getNewsList();
        },
        methods: {
            async getNewsList(){
                let data = await $getAll({});
                if (data && data.code===0){
                    this.newsList=data.data;
                }
            },
            goToNewsDetails(id){
                this.goToPage('news-detail',{id:id});
            }
        }
    }
</script>

<style lang='less' scoped>
    .right-news {
        height: 100%;
        overflow-y: scroll;
        /*background: #eee;*/
        .news-item{
            padding: 10px;
            margin-bottom: 10px;
            color: #999;
            border: 1px solid #eee;
            .content{
                font-size: 16px;
                padding-bottom: 10px;
            }
            .info{
                .author{
                    width: 60%;
                }
                .date{
                    width: 40%;
                    text-align: right;
                }
            }
        }
    }
</style>
