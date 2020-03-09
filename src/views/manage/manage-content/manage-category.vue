<template>
    <div class="manage-category">
        <el-button type="text" @click="dialogFormVisible = true">添加分类</el-button>
        <el-dialog title="商品分类添加" :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="分类名称">
                    <el-input v-model="categoryName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否显示">
                    <el-switch v-model="categoryDelivery"></el-switch>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false;categoryName=''">取 消</el-button>
                <el-button type="primary" @click="categoryAdd">确 定</el-button>
            </div>
        </el-dialog>
        <el-table
                :data="categoryList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
            <el-table-column
                    label="分类名称"
                    prop="name">
                <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.name}}</div>           
                 </template>   
            </el-table-column>
           <el-table-column
                   label="是否显示"
                   prop="show">  
           </el-table-column>
            <el-table-column
                    label="创建时间"
                    prop="create_at">
                            <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{formatDate(scope.row.create_at)}}</div>           
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
                            @click="dialogEditVal=scope.row;dialogEdit = true;delIndex=scope.$index">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="dialogEditVal=scope.row;dialogDel = true;delIndex=scope.$index">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 编辑确认框 -->
        <el-dialog title="商品分类编辑" :visible.sync="dialogEdit">
            <el-form>
                <el-form-item label="分类名称">
                    <el-input v-model="dialogEditVal.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否显示">
                    <el-switch v-model="dialogEditVal.ifShow"></el-switch>
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
            <span>确认删除&nbsp;&nbsp;“{{dialogEditVal.name}}”&nbsp;&nbsp;这个分类吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDel = false;dialogEditVal=''">取 消</el-button>
                <el-button type="primary" @click="handleDelete">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {$add, $getAllCat,$updata,$delete} from '@/api/category'
    export default {
        data() {
            return {
                dialogFormVisible: false,
                // 编辑窗口
                dialogEdit:false,
                // 删除窗口
                dialogDel:false,
                // 删除的下标
                delIndex:"",
                dialogEditVal:"",
                ifShow:false,
                categoryName: "",
                categoryDelivery: true,
                categoryList:[],
                search: ''
            }
        },
        created(){
          this.categoryData();
        },
        methods: {
            // 商品分类添加
            async categoryAdd() {
                if (!this.categoryName) {
                    this.$message({
                        type: 'warning',
                        message: '商品分类名称不能为空!'
                    });
                    return;
                }
                let data = await $add({
                    name: this.categoryName,
                    ifShow: this.categoryDelivery,
                });
                if (data && data.code == 0) {
                    this.categoryName = '';
                    this.categoryDelivery = false;
                    this.dialogFormVisible = false;
                    this.categoryData();
                }
            },
            // 获取分类列表
            async categoryData() {
                let data = await $getAllCat({});
                if (data && data.code == 0) {
                    this.categoryList=data.data;
                    this.categoryList.map((v,i)=>{
                        this.$set(this.categoryList[i],'show',v.ifShow?'是':"否")
                    });
                }
            },
            // 商品分类编辑
           async handleEdit() {
                let data = await $updata({
                    id:this.dialogEditVal._id,
                    name:this.dialogEditVal.name,
                    ifShow:this.dialogEditVal.ifShow
                })
                if (data &&data.code==0){
                    this.categoryList[this.delIndex].show=this.dialogEditVal.ifShow?'是':'否';
                    this.dialogEditVal='';
                    this.dialogEdit=false;
                }
            },
            // 商品分类删除
            async handleDelete(id) {
                let data = await $delete({
                    id:this.dialogEditVal._id
                });
                if (data && data.code==0){
                    this.dialogDel=false;
                    this.categoryList.splice(this.delIndex,1)
                }
            },
        },
    }
</script>
<style lang="less" scoped>
    .manage-category {
        width: 100%;
        padding: 20px;
        /deep/  .el-table .cell{
            text-align: center;
        }
    }
</style>
