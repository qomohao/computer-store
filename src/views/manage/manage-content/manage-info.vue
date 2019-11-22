/**
* create on 2019/11/20 16:12
* @author   wanghao
*/
<template>
    <div class="manage-info">
        <div class="goods-img">
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
            <el-form-item label="昵称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="个签">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品描述">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: "manage-info",
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
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                    });

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
    .manage-info {
        width: 100%;
        padding: 20px;
        .goods-img{
            padding: 20px 80px;
        }
    }
</style>
