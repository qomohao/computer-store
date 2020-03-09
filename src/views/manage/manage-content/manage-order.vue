<template>
    <div class="manage-news">
        <div class="order-item" v-for="(v,i) in orderList" :key="i">
                 <el-table
                    ref="multipleTable"
                    :data="v.content"
                    tooltip-effect="dark"
                    style="width: 100%"
                  >
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
                        prop="address"
                        label="下单时间"
                       >
                          <template   slot-scope="scope"> 
                     <div class="ellipsis-row-1"> {{formatDate(scope.row.create_at)}}</div>           
                 </template>   
                </el-table-column>
            </el-table>
            <div class="order-info">
                <span>总价：￥{{v.allPrice}}</span>
                <span> 支付方式：{{v.payType==1?"支付宝":"微信"}}</span>
                 <span>下单时间：￥{{formatDate(v.create_at)}}</span>   
            </div>
            </div>
    </div>
</template>

<script>
    import {$getAll} from '@/api/order';
    export default {
        data() {
            return {
                orderList:[],
                search: '',
                loginUser:JSON.parse(sessionStorage.getItem('user')),
            }
        },
        created() {
            this.getOrderList();
        },
        methods: {
            async getOrderList(){
                let data = await $getAll({
                    id:this.loginUser._id
                });
                if (data && data.code===0){
                    this.orderList=data.data;
                    console.log(this.orderList)
                }
            }
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
        .order-item{
            padding: 0 20px;
            border:1px solid #eee;
            margin: 20px;
        }
        .order-info{
            padding:20px;
            background: #eee;
            span{
                margin-right: 30px;
            }
        }
    }
</style>
