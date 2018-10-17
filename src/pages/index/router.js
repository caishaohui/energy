import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from './views/layout/Layout'
Vue.use(Router)

export const constantRouterMap = [{
        path: '/login',
        component: () =>
            import ('@/pages/index/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/pages/index/views/404'),
        hidden: true
    },

    // {
    //     path: '/',
    //     component: Layout,
    //     redirect: '/dashboard',
    //     name: 'Dashboard',
    //     hidden: true,
    //     children: [{
    //         path: 'dashboard',
    //         component: () =>
    //             import ('@/pages/index/views/dashboard/index')
    //     }]
    // },

    {
        path: '/',
        redirect: '/monitoring',
        name: 'monitoring',
        component: Layout,
        children: [{
            path: 'monitoring',
            name: 'monitoring',
            component: () =>
                import ('@/pages/index/views/monitoring-center/index'),
            meta: { title: '监控中心', icon: 'iconfont icon-monitoringCenter' }
        }]
    },
    {
        path: '/command-dispatch',
        component: Layout,
        children: [{
            path: 'index',
            name: 'command',
            component: () =>
                import ('@/pages/index/views/command-dispatch/index'),
            meta: { title: '指挥调度', icon: 'iconfont icon-commandDispatch' }
        }]
    },
    {
        path: '/system-settings',
        component: Layout,
        redirect: '/system-settings/center-mag',
        name: 'system-settings',
        meta: {
            title: '系统设置',
            icon: 'iconfont icon-setting'
        },
        children: [{
                path: 'center-mag',
                name: '中心管理',
                component: () =>
                    import ('@/pages/index/views/system-settings/center-mag/index'),
                meta: { title: '中心管理' }
            },
            {
                path: 'customer-mag',
                component: () =>
                    import ('@/pages/index/views/system-settings/customer-mag/index'), // Parent router-view
                name: 'customer-mag',
                meta: { title: '客户管理' },
            },
            {
                path: 'account-mag',
                name: '账号管理',
                component: () =>
                    import ('@/pages/index/views/system-settings/account-mag/index'),
                meta: { title: '账号管理' }
            },
            {
                path: 'electrical-mag',
                name: '电工管理',
                component: () =>
                    import ('@/pages/index/views/system-settings/electrical-mag/index'),
                meta: { title: '电工管理' }
            },
            {
                path: 'OPS-mag',
                name: '运维管理',
                component: () =>
                    import ('@/pages/index/views/system-settings/OPS-mag/index'),
                meta: { title: '运维管理' }
            },
            {
                path: 'equipment-mag',
                component: () =>
                    import ('@/pages/index/views/system-settings/equipment-mag/index'), // Parent router-view
                name: 'equipment-mag',
                meta: { title: '设备管理' },
                children: [{
                        path: 'equipment-message',
                        component: () =>
                            import ('@/pages/index/views/system-settings/equipment-mag/equipment-message'),
                        name: 'equipment-message',
                        meta: { title: '设备信息' }
                    },
                    {
                        path: 'system-chart',
                        component: () =>
                            import ('@/pages/index/views/system-settings/equipment-mag/system-chart'),
                        name: 'system-chart',
                        meta: { title: '系统接线图' }
                    }
                ]
            },
        ]
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
                    import ('@/pages/index/views/table/index'),
                meta: { title: 'Table', icon: 'icon-shoujitianchong' }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () =>
                    import ('@/pages/index/views/tree/index'),
                // meta: { title: 'Tree', icon: 'tree' }
                meta: { title: 'Tree', icon: 'icon-gengduotianchong' }
            }
        ]
    },





    { path: '*', redirect: '/404', hidden: true }
];
export default new Router({
    // mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});