/**
* create on 2019/11/20 19:59
* @author   wanghao
*/
<template>
    <div class="order-detail">
        <div class="order-box">
            <div class="order-content">
                <h3>确认订单信息</h3>
                <div class="payType flex">
                    <div class="pay-item flex ">
                        <el-image
                                :src="aliPay"
                                fit="contain"
                        >
                        </el-image>
                        <el-radio v-model="radio" label="1" border>支付宝</el-radio>
                    </div>
                    <div class="pay-item flex ">
                        <el-image
                                :src="weChatPay"
                                fit="contain"
                        >
                        </el-image>
                        <el-radio v-model="radio" label="2" border>微信</el-radio>
                    </div>
                </div>
                <div class="addressInfo">
                    <div class="title">收件信息</div>
                    <div class="name">收件人:{{loginUser.nickname}}</div>
                    <div class="tel">手机号：{{loginUser.tel}}</div>
                    <div class="address">收件地址：{{loginUser.address}}</div>
                </div>
            </div>
            <div class="order-info">
                   <el-table
                    ref="multipleTable"
                    :data="buyList"
                    tooltip-effect="dark"
                    style="width: 100%" height="40vh"
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
            </el-table>
            </div>
            <div class="act flex justify-between align-center">
                <div>
                    总价：￥{{allPrice || 0}}
                </div>
                <div>
                  <el-button type="danger" @click="saveOrder">提交订单</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import{$add} from '@/api/order';
    import{$delete} from '@/api/shopCar';
    export default {
        name: "order-detail",
        data() {
            return {
                radio: '1',
                aliPay: require('@/assets/images/aliPay.jpg'),
                weChatPay:require('@/assets/images/weChatPay.jpg'),
                buyList:JSON.parse(sessionStorage.getItem('toPayArr')),
                loginUser:JSON.parse(sessionStorage.getItem('user')),
            }
        },
        created() {

        },
         computed:{
            //  商品总价
            allPrice(){
                let that=this;
                let price = 0;
                if (that.buyList.length) {
                    that.buyList.map(v=>{
                        price+=v.price*v.count;
                    })
                    return price.toFixed(2);
                }
            }
        },
        methods: {
       /**
        *   支付：
            1.存储结算订单相关商品到订单表;  
            2.删除购物车对应数据;
        */
            // 保存订单
            async saveOrder(){
                let data = await $add({
                        payType: parseInt(this.radio),
                        content: this.buyList,
                        userId: this.loginUser._id,
                        allPrice:this.allPrice
                });
                if (data && data.code==0) {
                    this.handleDelete();
                    // 0 -- 支付失败 ，1 -- 支付成功
                    this.goToPage('order-result',{result:0})
                }else{
                     this.goToPage('order-result',{result:1})
                }
            }, 
            // 购物车删除
             async handleDelete() {
                // 要删除的数据ID数组
                let deleteId=[];
                this.buyList.map(v=>{
                    deleteId.push(v._id)
                })
                 let data = await $delete({
                        userId:this.loginUser._id,
                        deleteId:deleteId
                    });                    
            },
        }
    }
</script>

<style lang='less' scoped>
    .order-detail {
        .order-box{
            width: 70%;
            margin: auto;
            padding: 10px 20px;
            border: 1px solid #eee;
            border-radius: 5px;
            .order-content{
                .payType{
                    .pay-item{
                        padding: 10px;
                        border: 1px solid #eee;
                         border-radius: 5px;
                        margin: 20px;
                        .el-image{
                            width: 150px;
                            height: 80px;
                            border-radius: 10px;
                            overflow: hidden;
                            margin:  0 10px;
                        }
                    }
                }
                .addressInfo{
                    color: #999;
                    padding: 10px 30px;
                    >div{
                        line-height: 30px
                    }
                }
                .order-info{

                }
            }
            .act{
                padding: 20px;
            }
        }
    }
</style>
<style lang="less" scoped>
    .order-detail {
        width: 100%;
        padding: 20px;
        /deep/  .el-table .cell{
            text-align: center;
        }
    }
</style>