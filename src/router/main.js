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
        redirect:"/test1",
        component:  () => import(/* webpackChunkName: 'main' */'@/views/main/home.vue'),
        children:[
            {
                path: '/test1',
                name: "test1",
                meta: {
                    title: 'test1',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/test1.vue'),
            }, {
                path: '/test2',
                name: "test2",
                meta: {
                    title: 'test2',
                },
                component:  () => import(/* webpackChunkName: 'main' */'@/views/main/test2.vue'),
            },
        ]
    },

]
