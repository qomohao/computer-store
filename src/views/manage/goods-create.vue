/**
* create on 2019/11/19 17:04
* @author   wanghao
*/
<template>
    <div class="create-goods">
        <div class="goods-img">
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
            <el-form-item label="商品名称">
                <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="商品描述">
                <el-input type="textarea" v-model="des"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-input v-model="price" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品产地">
                <el-input v-model="address"></el-input>
            </el-form-item>
            <el-form-item label="商品分类">
                <el-select v-model="category" placeholder="请选择商品分类">
                    <el-option :label="v.name" :value="v._id" v-for="(v,i) in recategoryList" :key="i"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否设置为轮播图">
                <el-switch v-model="delivery"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发布商品</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { $add  } from '@/api/goods';
    import { $getAllCat  } from '@/api/category';
    export default {
        name: "create-goods",
        data() {
            return {
                title:"",
                des:"",
                price:"",
                address:"",
                category:"",
                fileList:[],
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                delivery:false,
                categoryList:[]
            }
        },
        created() {
            this.categoryData();
        },
        computed:{
            recategoryList(){
               return this.categoryList.filter(v=>{
                        return v.ifShow
                })
            }
        },
        beforeRouteEnter(to,from,next){
            next();
            if (!(sessionStorage.getItem('user'))) {
                location.href=location.href.split('#')[0]+'#/goods-list'
            }
        },
        methods: {
            // 获取分类列表
            async categoryData(){
              let data = await $getAllCat({});
              if (data && data.code==0){
                  this.categoryList=data.data;
              }
            },
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
                if (!this.title || !this.des || !this.price || !this.address || !this.category || !this.fileList.length){
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
                params.append('des',this.des);
                params.append('price',this.price);
                params.append('address',this.address);
                params.append('category',this.category);
                params.append('isSlide',this.delivery);
                let data = await $add(params)
                if (data &&data.code===0){
                    location.reload();
                   // this.goToPage('goods-list');
                }
            },
        }
    }
</script>

<style lang='less' scoped>
    .create-goods {
        height: 100%;
        overflow-y: scroll;
        padding: 30px 10% 20px 10%;
        box-sizing: border-box;
        .goods-img{
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
