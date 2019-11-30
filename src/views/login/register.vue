/**
* create on 2019/11/19 16:26
* @author   wanghao
*/
<template>
    <div class="register flex justify-center align-center">
        <div class="register-box">
            <div class="title">注册</div>
            <div class="content">
                <el-form label-position="top" label-width="80px">
                    <el-form-item label="username">
                        <el-input v-model="username"></el-input>
                    </el-form-item>
                    <el-form-item label="password">
                        <el-input v-model="password"  type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="repassword">
                        <el-input v-model="repassword" type="password"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="act">
                <el-button type="primary" @click="register">注 册</el-button>
                <el-button @click="goToPage('login')">已注册 去登陆</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import {$add} from '@/api/users'
    export default {
        name: "register",
        data() {
            return {
                username:"",
                password:"",
                repassword:''
            }
        },
        created() {

        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
             async register(){
              if(!this.username || !this.password || !this.repassword){
                this.$message({
                    type: 'warning',
                    message: '不能为空!'
                });
                
                return;
              }else if(this.password!=this.repassword){
                    this.$message({
                    type: 'warning',
                    message: '两次密码不一致！'
                });
                return
                }
                let data = await $add({},{
                    username:this.username,
                    password:this.password
                })
                if(data && data.status==1){
                      this.$message({
                            type: 'success',
                            message: '登录成功!'
                      });
                    console.log(data)
                }
            }
        }
    }
</script>

<style lang='less' scoped>
    .register {
        height: 100vh;
        overflow: hidden;
        .register-box{
            height: 500px;
            width: 320px;
            border-radius: 5px;
            box-shadow: 0 0 2px #666;
            padding: 15px;
            box-sizing: border-box;
            .el-form-item{
                margin-bottom:15px;
               /deep/ .el-form-item__label{
                    padding: 0;
                }
            }
            .title{
                font-size: 28px;
                text-align: center;
                padding: 20px;
            }
            .content{

            }
            .act{
                .el-button{
                    height: 45px;
                    font-size: 16px;
                    width: 100%;
                    margin: 5px 0;
                }
            }
        }
    }
</style>
