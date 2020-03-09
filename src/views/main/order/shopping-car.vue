/**
* create on 2019/11/20 19:58
* @author   wanghao
*/
<template>
    <div class="shopping-car">
        <div class="shop-list">
            <el-table
                    ref="multipleTable"
                    :data="shopCarList"
                    tooltip-effect="dark"
                    style="width: 100%" height="75vh"
                    @selection-change="handleSelectionChange">
                     <el-table-column
                        type="selection"
                        width="55">
                     </el-table-column>
                <el-table-column
                        label="商品名"
                         prop="title"
                       >
                          <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.title}}</div>           
                 </template>   
                </el-table-column>
                   <el-table-column
                        label="图片"
                         prop="img"
                       >
                          <template slot-scope="scope">  <el-image
                           :src="imgUrl+scope.row.img[0]"
                            style="width: 70px; height: 70px"
                            fit="contain"
                    >
                    </el-image></template>
                </el-table-column>
                <el-table-column
                        label="价格"
                      >
                     <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.price}}</div>           
                 </template>   
                </el-table-column>
                <el-table-column
                        label="数量"
                      >
                     <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.count}}</div>           
                 </template>   
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="产地"
                       >
                          <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{scope.row.address}}</div>           
                 </template>   
                </el-table-column>
                <el-table-column
                        prop="create_at"
                        label="添加时间"
                        show-overflow-tooltip>
                         <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1">  {{formatDate(scope.row.create_at)}}</div>           
                 </template>   
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px" class=" flex justify-between align-center">
                <div>
                    总价：￥{{allPrice || 0}}
                </div>
                <div>
                    <el-button @click="toggleSelection(shopCarList)">全选</el-button>
                    <el-button @click="dialogDel = true;">删除</el-button>
                    <el-button @click="toPay" type="danger">去结算</el-button>
                </div>
            </div>
             <!-- 删除确认框 -->
            <el-dialog
                    title="删除提示"
                    :visible.sync="dialogDel"
                    width="30%"
                >
                <span>确认删除吗？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogDel = false;">取 消</el-button>
                    <el-button type="primary" @click="handleDelete">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    import { $getAllCar,$delete} from '@/api/shopCar';
    export default {
        name: "shopping-car",
        data() {
            return {
                 multipleSelection: [],
                 loginUser:JSON.parse(sessionStorage.getItem('user')),
                 shopCarList:[],
                 // 删除窗口
                 dialogDel:false,
            }
        },
        beforeRouteEnter(to,from,next){
            next();
            if (!sessionStorage.getItem('user')) {
                location.href=location.href.split('#')[0]+'#/login'
            }
        },
        created() {
            this.shopCarData();
        },
        computed:{
            //  商品总价
            allPrice(){
                let that=this;
                let price = 0;
                if (that.multipleSelection.length) {
                    that.multipleSelection.map(v=>{
                        price+=v.price*v.count;
                    })
                    return price.toFixed(2);
                }
            }
        },
        methods: {
            // 获取购物车数据
            async shopCarData(){
                let data = await $getAllCar({
                    id:this.loginUser._id
                });
                if (data && data.code==0){
                    data.data.map(v=>{
                        this.$set(v.goodId,'userId',v.userId);
                        this.$set(v.goodId,'count',v.count);
                        this.shopCarList.push(v.goodId)
                    })
                }
            },
            // 去结算
            toPay(){
                if (!this.multipleSelection.length) {
                     this.$message({
                        type: 'warning',
                        message: '请先勾选商品!'
                      });
                      return;
                }
                this.multipleSelection.map(v=>{
                    v=JSON.stringify(v);
                })
                sessionStorage.setItem('toPayArr',JSON.stringify(this.multipleSelection))
                this.goToPage('order-detail');
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleAllSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
             // 购物车删除
             async handleDelete() {
                if (!this.multipleSelection.length) {
                    this.dialogDel=false;
                     this.$message({
                        type: 'warning',
                        message: '请先勾选商品!'
                      });
                      return;
                }
                // 要删除的数据ID数组
                let deleteId=[];
                this.multipleSelection.map(v=>{
                    deleteId.push(v._id)
                })
                 let data = await $delete({
                        userId:this.loginUser._id,
                        deleteId:deleteId
                    });
                    if (data && data.code==0){
                        this.dialogDel=false;
                        location.reload();
                }
            },
        }
    }
</script>

<style lang='less' scoped>
    .shopping-car {
        height: 100%;
        overflow-y: scroll;
       .shop-list{
           width: 70%;
           margin: auto;
           border: 1px solid #eee;
           padding: 20px;
       }
       .el-table{
           height:75vh;
           overflow-y: scroll;
       }
    }
</style>
<style lang="less" scoped>
    .shopping-car {
        width: 100%;
        padding: 20px;
        /deep/  .el-table .cell{
            text-align: center;
        }
    }
</style>