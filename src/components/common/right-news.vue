/**
* create on 2019/11/17 14:42
* @author   wanghao
*/
<template>
    <div class="right-news">
        <div class="news-item" v-for="i in 30">
            <div class="content">
                新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
            </div>
            <div class="info flex justify-between align-center">
                <div class="author">作者：默</div>
                <div class="data">2019-1-1</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "right-news",
        data() {
            return {}
        },
        created() {

        },
        methods: {}
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

            }
        }
    }
</style>
