import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter);

/**
 * 路由列表
 */
import main_router from './main'

const router=new vueRouter({
    // mode:'history',
    routes:[].concat(
        main_router,
    )
});

// 前置守卫
router.beforeEach((to,from,next)=>{
    next();
})

// 后置守卫
router.afterEach(route=>{

})

export default router;
