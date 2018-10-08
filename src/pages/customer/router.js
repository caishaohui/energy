import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from './views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [{
        path: '/login',
        component: () =>
            import ('@/pages/customer/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/pages/customer/views/404'),
        hidden: true
    },
    {
        path: '/',
        redirect: '/monitoring',
        name: 'monitoring',
        component: Layout,
        children: [{
            path: 'monitoring',
            name: 'monitoring',
            component: () =>
                import ('@/pages/customer/views/monitoring-center/index'),
            meta: { title: '监控中心', icon: 'icon-xinfengtianchong' }
        }]
    },

    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        // meta: { title: 'Example', icon: 'example' },
        meta: { title: 'Example', icon: 'icon-fenleiorguangchangorqitatianchong' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/pages/customer/views/table/index'),
                meta: { title: 'Table', icon: 'icon-shoujitianchong' }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () =>
                    import ('@/pages/customer/views/tree/index'),
                // meta: { title: 'Tree', icon: 'tree' }
                meta: { title: 'Tree', icon: 'icon-gengduotianchong' }
            }
        ]
    },
    {
        path: '/command-dispatch',
        component: Layout,
        children: [{
            path: 'index',
            name: 'command',
            component: () =>
                import ('@/pages/customer/views/command-dispatch/index'),
            meta: { title: '指挥调度', icon: 'icon-xinfengtianchong' }
        }]
    },
    {
        path: '/goback',
        children: [{
            path: '/goback',
            name: 'goback',
            meta: { title: '返回中心', icon: 'icon-xinfengtianchong' }
        }]
    },
    { path: '*', redirect: '/404', hidden: true }
];
export default new Router({
    // mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});