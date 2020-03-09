<template>
    <div class="manage-news">
        <el-table
                :data="newsList.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
            <el-table-column
                    label="新闻标题"
                    prop="title">
                      <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.title}}</div>           
                 </template>   
            </el-table-column>
             <el-table-column
                label="图片"
                prop="img">
                 <!-- 图片的显示 -->
                 <template   slot-scope="scope">            
                       <el-image
                           :src="imgUrl+scope.row.img[0]"
                            style="width: 70px; height: 70px"
                            fit="contain"
                        >
                       </el-image>
                 </template>   
            </el-table-column>
             <el-table-column
                    label="内容"
                    prop="content"
                    >
                      <!-- 新闻内容的显示控制 -->
                 <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.content}}</div>           
                 </template>   
            </el-table-column>
                   <el-table-column
                    label="作者"
                    prop="author">
                 <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.author}}</div>           
                 </template>   
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
        <el-dialog title="新闻编辑" :visible.sync="dialogEdit">
            <el-form ref="form"  label-width="80px">
            <el-form-item label="新闻标题">
                <el-input v-model="dialogEditVal.title"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input type="textarea" v-model="dialogEditVal.author"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input v-model="dialogEditVal.content"></el-input>
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
            <span>确认删除&nbsp;&nbsp;“{{dialogEditVal.title}}”&nbsp;&nbsp;这个新闻吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDel = false;dialogEditVal=''">取 消</el-button>
                <el-button type="primary" @click="handleDelete">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {$getAll,$updata,$delete} from '@/api/news';
    export default {
        data() {
            return {
                newsList:[],
                search: '',
                // 编辑窗口
                dialogEdit:false,
                // 删除窗口
                dialogDel:false,
                // 删除的下标
                delIndex:"",
                dialogEditVal:"",
            }
        },
        created() {
            this.getNewsList();
        },
        methods: {
            // 获取新闻列表
            async getNewsList(){
                let data = await $getAll({});
                if (data && data.code===0){
                    this.newsList=data.data;
                }
            },
            goToNewsDetails(id){
                this.goToPage('news-detail',{id:id});
            },
          // 新闻编辑
           async handleEdit() {
                let data = await $updata({
                    id:this.dialogEditVal._id,
                    title:this.dialogEditVal.title,
                    content:this.dialogEditVal.content,
                    author:this.dialogEditVal.author,
                })
                if (data &&data.code==0){
                    this.dialogEditVal='';
                    this.dialogEdit=false;
                    location.reload();
                }
            },
             // 新闻删除
            async handleDelete() {
                let data = await $delete({
                    id:this.dialogEditVal._id
                });
                if (data && data.code==0){
                    this.dialogDel=false;
                    this.newsList.splice(this.delIndex,1);
                    location.reload();
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
