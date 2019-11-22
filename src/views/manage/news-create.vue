/**
* create on 2019/11/18 15:49
* @author   wanghao
*/
<template>
    <div class="news-create">
        <div class="news-img">
            <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false">
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
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="新闻标题">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="新闻作者">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="新闻分类">
                <el-select v-model="form.region" placeholder="请选择新闻分类">
                    <el-option label="新闻分类一" value="shanghai"></el-option>
                    <el-option label="新闻分类二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="知否置顶">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发布新闻</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: "news-create",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false
            }
        },
        created() {

        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            }
        }
    }
</script>

<style lang='less' scoped>
    .news-create {
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
