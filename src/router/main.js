/**
 * create on 2019/11/1 13:12
 * @author   wanghao
 * @purpose
 */
export  default [
    {
        path: '/',
        name: "home",
        meta: {
            title: 'home',
        },
        redirect:"/goods-list",
        component:  () => import(/* webpackChunkName: 'main' */'@/views/main/home.vue'),
        children:[
            {
                path: '/goods-list',
                name: "goods-list",
                meta: {
                    title: 'goods-list',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/goods-list.vue'),
            },{
                path: '/goods-detail',
                name: "goods-detail",
                meta: {
                    title: 'goods-detail',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/goods-detail.vue'),
            },{
                path: '/about-us',
                name: "about-us",
                meta: {
                    title: 'about-us',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/about-us.vue'),
            },
        ]
    },

]
