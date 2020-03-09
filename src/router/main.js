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
                path: '/search-result',
                name: "search-result",
                meta: {
                    title: 'search-result',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/search-result.vue'),
            },{
                path: '/goods-sort',
                name: "goods-sort",
                meta: {
                    title: 'goods-sort',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/goods-sort.vue'),
            },{
                path: '/goods-detail',
                name: "goods-detail",
                meta: {
                    title: 'goods-detail',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/goods-detail.vue'),
            },{
                path: '/news-detail',
                name: "news-detail",
                meta: {
                    title: 'news-detail',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/news-detail.vue'),
            },
            {
                path: '/shopping-car',
                name: "shopping-car",
                meta: {
                    title: 'shopping-car',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/order/shopping-car.vue'),
            },{
                path: '/order-detail',
                name: "order-detail",
                meta: {
                    title: 'order-detail',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/order/order-detail.vue'),
            },{
                path: '/order-result',
                name: "order-result",
                meta: {
                    title: 'order-result',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/order/order-result.vue'),
            },{
                path: '/order-history',
                name: "order-history",
                meta: {
                    title: 'order-history',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/order/order-history.vue'),
            },
            {
                path: '/manage',
                name: "manage",
                meta: {
                    title: 'manage',
                },
                redirect:'/manage/manage-goods',
                component:  () => import(/* webpackChunkName: 'main' */'@/views/manage/manage-index.vue'),
                children: [
                    {
                        path: 'manage-goods',
                        name: "manage-goods",
                        meta: {
                            title: 'manage-goods',
                        },
                        component:  () => import(/* webpackChunkName: 'main' */'@/views/manage/manage-content/manage-goods.vue'),
                    }, {
                        path: 'manage-category',
                        name: "manage-category",
                        meta: {
                            title: 'manage-category',
                        },
                        component:  () => import(/* webpackChunkName: 'main' */'@/views/manage/manage-content/manage-category.vue'),
                    },{
                        path: 'manage-info',
                        name: "manage-info",
                        meta: {
                            title: 'manage-info',
                        },
                        component:  () => import(/* webpackChunkName: 'main' */'@/views/manage/manage-content/manage-info.vue'),
                    },{
                        path: 'manage-news',
                        name: "manage-news",
                        meta: {
                            title: 'manage-news',
                        },
                        component:  () => import(/* webpackChunkName: 'main' */'@/views/manage/manage-content/manage-news.vue'),
                    },{
                        path: 'manage-users',
                        name: "manage-users",
                        meta: {
                            title: 'manage-users',
                        },
                        component:  () => import(/* webpackChunkName: 'main' */'@/views/manage/manage-content/manage-users.vue'),
                    },{
                        path: 'manage-order',
                        name: "manage-order",
                        meta: {
                            title: 'manage-order',
                        },
                        component:  () => import(/* webpackChunkName: 'main' */'@/views/manage/manage-content/manage-order.vue'),
                    },

                ]
            },{
                path: '/news-create',
                name: "news-create",
                meta: {
                    title: 'news-create',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/manage/news-create.vue'),
            },{
                path: '/goods-create',
                name: "goods-create",
                meta: {
                    title: 'goods-create',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/manage/goods-create.vue'),
            },
        ]
    },{
        path: '/login',
        name: "login",
        meta: {
            title: 'login',
        },
        component:  () => import(/* webpackChunkName: 'main' */'@/views/login/login.vue'),
    },{
        path: '/register',
        name: "register",
        meta: {
            title: 'register',
        },
        component:  () => import(/* webpackChunkName: 'main' */'@/views/login/register.vue'),
    },


]
