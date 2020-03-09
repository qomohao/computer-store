<template>
    <div class="manage-news">
        <el-table
                :data="userList.filter(data => !search || data.nickname.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
            <el-table-column
                    label="用户昵称"
                    prop="nickname">
                     <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.nickname}}</div>           
                 </template>   
            </el-table-column>
             <el-table-column
                label="头像"
                prop="img">
                 <!-- 图片的显示 -->
                 <template   slot-scope="scope">            
                       <el-image
                           :src="scope.row.avatar?imgUrl+scope.row.avatar:src"
                            style="width: 70px; height: 70px"
                            fit="contain"
                        >
                       </el-image>
                 </template>   
            </el-table-column>
             <el-table-column
                    label="手机号"
                    prop="tel"
                    >
                     <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.tel}}</div>           
                 </template>   
            </el-table-column>
                   <el-table-column
                    label="管理员"
                    prop="ifAdmin">
            </el-table-column>
            <el-table-column
                    align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                            v-model="search"
                            size="mini"
                            placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="dialogEditVal=scope.row;dialogEdit = true;delIndex=scope.$index;">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                       @click="dialogEditVal=scope.row;dialogDel = true;delIndex=scope.$index">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <!-- 编辑确认框 -->
        <el-dialog title="用户编辑" :visible.sync="dialogEdit">
            <el-form ref="form"  label-width="80px">
            <el-form-item label="昵称">
                <el-input v-model="dialogEditVal.nickname"></el-input>
            </el-form-item>
            <el-form-item label="账号">
                <el-input  v-model="dialogEditVal.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="dialogEditVal.password"></el-input>
            </el-form-item> 
            <el-form-item label="手机号">
                <el-input v-model="dialogEditVal.tel"></el-input>
            </el-form-item>
                <el-form-item label="管理员">
                <el-switch v-model="dialogEditVal.admin"></el-switch>
            </el-form-item>
        </el-form>
         <div slot="footer" class="dialog-footer">
                <el-button @click="dialogEdit = false;dialogEditVal=''">取 消</el-button>
                <el-button type="primary" @click="handleEdit">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 删除确认框 -->
        <el-dialog
                title="删除提示"
                :visible.sync="dialogDel"
                width="30%"
               >
            <span>确认删除&nbsp;&nbsp;“{{dialogEditVal.nickname}}”&nbsp;&nbsp;这个用户吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDel = false;dialogEditVal=''">取 消</el-button>
                <el-button type="primary" @click="handleDelete">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {$getAll,$updata,$delete} from '@/api/users';
    export default {
        data() {
            return {
                userList:[],
                search: '',
                // 编辑窗口
                dialogEdit:false,
                // 删除窗口
                dialogDel:false,
                // 删除的下标
                delIndex:"",
                dialogEditVal:"",
                // 默认头像
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575988998268&di=6b26631483682850aa1f948ff92c069c&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F56%2F69%2F585747cfd354024.jpg',

            }
        },
        created() {
            this.getUserList();
        },
        methods: {
            // 获取用户列表
            async getUserList(){
                let data = await $getAll({});
                if (data && data.code===0){
                    this.userList=data.data;
                    this.userList.map((v,i)=>{
                        this.$set(this.userList[i],'ifAdmin',v.admin?'是':"否");
                    });
                }
            },
            goToNewsDetails(id){
                this.goToPage('news-detail',{id:id});
            },
            // 用户编辑
           async handleEdit() {
               let params= new FormData();
                params.append('avatar',this.dialogEditVal.avatar);
                params.append('id',this.dialogEditVal._id);
                params.append('nickname',this.dialogEditVal.nickname);
                params.append('tel',this.dialogEditVal.tel);   
                params.append('username',this.dialogEditVal.username);   
                params.append('password',this.dialogEditVal.password);   
                params.append('admin',this.dialogEditVal.admin);   
                let data = await $updata(params)
                if (data &&data.code==0){
                    this.userList[this.delIndex].ifAdmin=this.dialogEditVal.admin?'是':'否';
                    this.dialogEditVal='';
                    this.dialogEdit=false;
                }
            },
             // 用户删除
            async handleDelete(id) {
                let data = await $delete({
                    id:this.dialogEditVal._id
                });
                if (data && data.code==0){
                    this.dialogDel=false;
                    this.userList.splice(this.delIndex,1)
                }
            },
        }
    }
</script>
<style lang="less" scoped>
    .manage-news{
        width: 100%;
        padding: 20px;
         /deep/  .el-table .cell{
            text-align: center;
        }
    }
</style>
