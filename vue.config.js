/**
 * create on 2019/11/15 12:54
 * @author   wanghao
 * @purpose
 */
const path = require("path");

module.exports = {
    /**
     * 加载静态资源相对路径
     */
    publicPath: './',
    /**
     * 请求代理
     */
    proxyTable: {
        // proxy all requests starting with /api to jsonplaceholder
        '/api': {//虚拟目录
          target: 'http://localhost:3000',//后台Node项目的请求网址
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''//由于上面的虚拟目录实际上是不存在的，不去掉的话访问的时候显示的url会变成'http://localhost:3000/api'，所以得去掉
          }
        }
      },
    devServer: {
        port: 8866,
       
    },
    lintOnSave:false,
    /**
     * style-resources-loader 公用样式处理
     */
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                //这个是加上自己的路径，
                //注意：试过不能使用别名路径
                path.resolve(__dirname, "./src/assets/style/common.less"),
            ]
        }
    },
}
