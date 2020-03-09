/**
* create on 2019/11/20 16:12
* @author   wanghao
*/
<template>
    <div class="manage-info">
          <div class="goods-img">
            <!-- :class="{disabled:fileList.length==3}"   ==   图片超出三张取消上传按钮  -->
            <el-upload action="#"
                    list-type="picture-card"
                    :auto-upload="false"
                    :show-file-list="true"
                    :on-change="handleChange"
                    :file-list="fileList"
                    :class="{disabled:fileList.length==1}"
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
            <el-form-item label="昵称">
                <el-input v-model="info.nickname"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input  v-model="info.tel"></el-input>
            </el-form-item>
            <el-form-item label="收件地址">
                <el-input  v-model="info.address"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确认修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { $getOne,$updata  } from '@/api/users';
    export default {
        name: "manage-info",
        data() {
            return {
                info:sessionStorage.getItem('user')?JSON.parse(sessionStorage.getItem('user')):'',
                fileList:[],
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                delivery:false,
                // 是否修改了头像
                avatarChange:false
            }
        },
        created() {
            this.getInfo();
        },
        methods: {
            // 获取当前用户信息
            async getInfo(){
                let data = await $getOne({
                    id:this.info._id
                })
                if (data && data.code==0) {
                    this.info=data.data;
                    if (data.data.avatar&&data.data.avatar.length) {
                        this.fileList=[{
                        name:'avatar',
                        url:this.imgUrl+data.data.avatar
                         }]
                    }
                }
            }, 
            // 更新当前用户信息
            async updateInfo(){
                let params= new FormData();
                if (this.avatarChange) {
                     params.append('avatar',this.fileList[0].raw);
                }else{
                     params.append('avatar',this.info.avatar);
                }
                params.append('id',this.info._id);
                params.append('nickname',this.info.nickname);
                params.append('tel',this.info.tel);   
                params.append('username',this.info.username);   
                params.append('password',this.info.password);   
                params.append('admin',this.info.admin);   
                params.append('address',this.info.address);   
                let data = await $updata(params)
                if (data && data.code==0) {
                    sessionStorage.setItem('user',JSON.stringify(data.data));
                    location.reload();
                }
            },
            onSubmit() {
                if (!this.info.nickname || !this.info.tel ||!this.fileList.length){
                    this.$message({
                        type: 'warning',
                        message: '不能为空!'
                    });
                    return;
                }
                this.$confirm('确认保存修改信息吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.updateInfo();
                    }).catch(() => {});
            },
             // 文件状态改变
            handleChange(file, fileList) {
                this.fileList = fileList;
                console.log(this.fileList);
                this.avatarChange=true;
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
<style lang='less'>
    // .el-upload--picture-card 控制加号部分
    .disabled .el-upload--picture-card {
        display: none!important;
    }
</style>