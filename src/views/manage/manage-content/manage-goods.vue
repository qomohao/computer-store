<template>
    <div class="manage-goods">
        <el-table
            :data="goodsList.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
        <el-table-column
                label="商品名称"
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
                    <!-- <img :src="imgUrl+scope.row.img[0]" width="70" height="70" /> -->
                     <el-image
                           :src="imgUrl+scope.row.img[0]"
                            style="width: 70px; height: 70px"
                            fit="contain"
                    >
                    </el-image>
                 </template>   
        </el-table-column>
        <el-table-column
                label="价格"
                prop="price">
                        <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.price}}</div>           
                 </template>   
        </el-table-column>
         <el-table-column
                label="产地"
                prop="address">
                        <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.address}}</div>           
                 </template>   
        </el-table-column>
         <el-table-column
                label="分类"
                prop="categoryName">
                        <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.categoryName}}</div>           
                 </template>   
        </el-table-column>
            <el-table-column
                label="是否轮播"
                prop="show">
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
                        @click="dialogEditVal=scope.row;dialogEdit = true;delIndex=scope.$index;categoryVal()">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                       @click="dialogEditVal=scope.row;dialogDel = true;delIndex=scope.$index">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
     <!-- 编辑确认框 -->
        <el-dialog title="商品分类编辑" :visible.sync="dialogEdit">
            <el-form ref="form"  label-width="80px">
            <el-form-item label="商品名称">
                <el-input v-model="dialogEditVal.title"></el-input>
            </el-form-item>
            <el-form-item label="商品描述">
                <el-input type="textarea" v-model="dialogEditVal.des"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-input v-model="dialogEditVal.price" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品产地">
                <el-input v-model="dialogEditVal.address"></el-input>
            </el-form-item>
            <el-form-item label="商品分类">
                <el-select v-model="dialogEditVal.categoryId" placeholder="请选择商品分类"  @change="catChange">
                    <el-option :label="v.name" :value="v._id" v-for="(v,i) in recategoryList" :key="i" ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否设置为轮播图">
                <el-switch v-model="dialogEditVal.isSlide"></el-switch>
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
            <span>确认删除&nbsp;&nbsp;“{{dialogEditVal.title}}”&nbsp;&nbsp;这个商品吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDel = false;dialogEditVal=''">取 消</el-button>
                <el-button type="primary" @click="handleDelete">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
 import {$getAll,$updata,$delete} from '@/api/goods';
 import {$getAllCat} from '@/api/category'
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
                search: '',
                goodsList:[],
                categoryList:[],
                category:'',
                catId:""
            }
        },
        created(){
             this.categoryData();
        },
         computed:{
            recategoryList(){
               return this.categoryList.filter(v=>{
                     return v.ifShow
                })
            }
        },
        methods: {
            catChange(val){
                this.catId=val;
            },
            // 当前商品分类名称
            categoryVal(){
                this.catId=this.dialogEditVal.categoryId;
                this.categoryList.map(v=>{
                    if(v._id==this.dialogEditVal.categoryId){
                        console.log(v.name)
                        this.dialogEditVal.categoryId= v.name
                    }
                })
            },
           // 获取分类列表
            async categoryData(){
              let data = await $getAllCat({});
              if (data && data.code==0){
                  this.categoryList=data.data;
                  this.getGoodsList();
              }
            },
            // 获取商品列表
             async getGoodsList(){
                let data = await $getAll({});
                if (data && data.code===0){
                    this.goodsList=data.data;
                     this.goodsList.map((v,i)=>{
                        this.$set(this.goodsList[i],'show',v.isSlide?'是':"否");
                         this.categoryList.map(vv=>{
                            if(vv._id==v.categoryId){
                               this.$set(this.goodsList[i],'categoryName',vv.name);
                            }
                        })
                    });
                }
            },
           // 商品编辑
           async handleEdit() {
                let data = await $updata({
                    id:this.dialogEditVal._id,
                    title:this.dialogEditVal.title,
                    des:this.dialogEditVal.des,
                    price:this.dialogEditVal.price,
                    address:this.dialogEditVal.address,
                    isSlide:this.dialogEditVal.isSlide,
                    categoryId:this.catId,
                })
                if (data &&data.code==0){
                    this.goodsList[this.delIndex].show=this.dialogEditVal.isSlide?'是':'否';
                      this.categoryList.map(v=>{
                            if(v._id==this.catId){
                               this.$set(this.goodsList[this.delIndex],'categoryName',v.name);
                            }
                        })
                    this.dialogEditVal='';
                    this.dialogEdit=false;
                }
            },
             // 商品删除
            async handleDelete(id) {
                let data = await $delete({
                    id:this.dialogEditVal._id
                });
                if (data && data.code==0){
                    this.dialogDel=false;
                    this.goodsList.splice(this.delIndex,1)
                }
            },
        },
    }
</script>
<style lang="less" scoped>
    .manage-goods{
        width: 100%;
        padding: 20px;
         /deep/  .el-table .cell{
            text-align: center;
        }
    }
</style>
