/**
* create on 2019/11/19 17:04
* @author   wanghao
*/
<template>
    <div class="create-news">
        <div class="news-img">
            <!-- :class="{disabled:fileList.length==3}"   ==   图片超出三张取消上传按钮  -->
            <el-upload action="#"
                       list-type="picture-card"
                       :auto-upload="false"
                       :show-file-list="true"
                       :on-change="handleChange"
                       :file-list="fileList"
                       :class="{disabled:fileList.length==3}"
            >
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                    <img
                            class="el-upload-list__item-thumbnail"
                            :src="file.url" alt=""
                    >
                    <span class="el-upload-list__item-actions">
            <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
                </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </div>
        <el-form ref="form"  label-width="80px">
            <el-form-item label="新闻标题">
                <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="新闻内容">
                <el-input type="textarea" v-model="content"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="author"></el-input>
            </el-form-item>
            <!-- <el-form-item label="是否置顶">
                <el-switch v-model="delivery"></el-switch>
            </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发布商品</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { $add  } from '@/api/news'
    export default {
        name: "create-news",
        data() {
            return {
                title:"",
                content:"",
                author:"",
                fileList:[],
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                delivery:false,
            }
        },
        created() {

        },
        beforeRouteEnter(to,from,next){
            next();
            // if (!(sessionStorage.getItem('user')&&JSON.parse(sessionStorage.getItem('user')).admin)) {
            if (!(sessionStorage.getItem('user'))) {
                location.href=location.href.split('#')[0]+'#/goods-list'
            }
        },
        methods: {
            // 文件状态改变
            handleChange(file, fileList) {
                this.fileList = fileList;
                console.log(this.fileList)
            },
            handleRemove(file) {
                console.log(file);
                let index = this.fileList.findIndex( fileItem => {
                    return fileItem.uid === file.uid
                })
                this.fileList.splice(index, 1);
                console.log(this.fileList)
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            },
            // 提交
            async onSubmit() {
                if (!this.title || !this.content || !this.author || !this.fileList.length){
                    this.$message({
                        type: 'warning',
                        message: '不能为空!'
                    });
                    return;
                }
                let params= new FormData();
                // 图片file 循环添加
                this.fileList.map(v=>{
                    params.append('img',v.raw);
                })
                params.append('title',this.title);
                params.append('content',this.content);
                params.append('author',this.author);
                let data = await $add(params)
                if (data &&data.code===0){
                    // this.goToPage('goods-list');
                    location.reload();
                }
            },
        }
    }
</script>

<style lang='less' scoped>
    .create-news {
        height: 100%;
        overflow-y: scroll;
        padding: 30px 10% 20px 10%;
        box-sizing: border-box;
        .news-img{
            max-height: 350px;
            padding: 20px 10px;
            overflow-y: scroll;
            margin-bottom: 20px;
        }

    }
</style>
<style lang='less'>
    // .el-upload--picture-card 控制加号部分
    .disabled .el-upload--picture-card {
        display: none!important;
    }
</style>
