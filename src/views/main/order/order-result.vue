/**
* create on 2019/11/20 19:59
* @author   wanghao
*/
<template>
    <div class="order-result">
        <div class="pay-result flex  align-center">
           <div class="icon">
               <i class="el-icon-success success"></i>
               <p>支付成功！</p>
               <i class="el-icon-success error" v-if="false"></i>
               <p v-if="false">支付失败！</p>
           </div>
            <div class="pay-info">
               <div>
                   <p>订单正在处理中，请耐心等待</p>
                   <p>111</p>
                   <p>11111111111111111111</p>
                   <p>111</p>
               </div>
                <div>
                    <el-button type="warning" @click="goToPage('goods-list')">再逛逛</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "order-result",
        data() {
            return {

            }
        },
        created() {

        },
        methods: {}
    }
</script>

<style lang='less' scoped>
    .order-result {
        .pay-result{
            width: 70%;
            margin: auto;
            border: 1px solid #eee;
            border-radius: 5px;
            padding: 20px;
            .icon{
                padding: 50px;
                i{
                    font-size: 60px;
                }
                .success{
                    color: green;
                }
                .error{
                    color: red;
                }
            }
        }
    }
</style>
