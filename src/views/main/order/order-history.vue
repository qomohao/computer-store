/**
* create on 2019/11/28 13:48
* @author   wanghao
*/
<template>
    <div class="order-history">
        <div class="box">
            <div class="title">订单记录</div>
            <div class="history-box">
                <el-table
                        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%">
                    <el-table-column
                            label="订单时间"
                            prop="date">
                    </el-table-column>
                    <el-table-column
                            label="商品标题"
                            prop="name">
                    </el-table-column>
                    <el-table-column
                            label="价格"
                            prop="price">
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
                                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "order-history",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '商品1',
                    address: '上海市普陀区金沙江路 1518 弄',
                    price: 123
                }, {
                    date: '2016-05-04',
                    name: '商品1',
                    address: '上海市普陀区金沙江路 1517 弄',
                    price: 333
                }, {
                    date: '2016-05-01',
                    name: '商品1',
                    address: '上海市普陀区金沙江路 1519 弄',
                    price: 456
                }, {
                    date: '2016-05-03',
                    name: '商品1',
                    address: '上海市普陀区金沙江路 1516 弄',
                    price: 234
                }],
                search: ''
            }
        },
        created() {

        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style lang='less' scoped>
    .order-history {
        .box{
            width: 70%;
            margin: auto;
            .title{
                font-size:20px;
                padding: 20px 0;
            }
        }
    }
</style>
