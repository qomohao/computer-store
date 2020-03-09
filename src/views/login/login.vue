/**
* create on 2019/11/19 16:26
* @author   wanghao
*/
<template>
    <div class="login flex justify-center align-center">
       <div class="login-box">
            <div class="title">登录</div>
           <div class="content">
               <el-form label-position="top" label-width="80px" >
                   <el-form-item label="username">
                       <el-input v-model="username"></el-input>
                   </el-form-item>
                   <el-form-item label="password">
                       <el-input v-model="password" type="password"></el-input>
                   </el-form-item>
<!--                   <el-form-item class="remeber">-->
<!--                       记住密码 <el-switch v-model="remember"></el-switch>-->
<!--                   </el-form-item>-->
               </el-form>
           </div>
           <div class="act">
               <el-button type="primary" @click="toLogin">登 录</el-button>
               <el-button @click="goToPage('register')">去注册</el-button>
           </div>
       </div>
    </div>
</template>
<script>
    import {$login} from '@/api/users'
    export default {
        name: "login",
        data() {
            return {
                username:"",
                password:"",
                remember:''
            }
        },
        created() {

        },
        beforeRouteEnter(to,from,next){
          if (!sessionStorage.getItem('user')) {
              next()
          }
        },
        methods: {
            async toLogin(){
                if(!this.username || !this.password){
                    this.$message({
                        type: 'warning',
                        message: '不能为空!'
                    });
                    return;
                }
                let data = await $login({
                    username:this.username,
                    password:this.password,
                    // remember:this.remember
                })
                if(data && data.code==0){
                    sessionStorage.setItem('user',JSON.stringify(data.data));
                    setTimeout(()=>{
                        this.goToPage('goods-list');
                    },1000)

                }
            }
        }
    }
</script>

<style lang='less' scoped>
    .login {
        height: 100vh;
        overflow: hidden;
        .login-box{
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
            .remeber{
                margin-top: 55px;
            }
            .act{
                margin-top: 110px;
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
