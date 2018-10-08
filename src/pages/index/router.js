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
            meta: { title: '监控中心', icon: 'icon-xinfengtianchong' }
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
            meta: { title: '指挥调度', icon: 'icon-xinfengtianchong' }
        }]
    },
    {
        path: '/system-settings',
        component: Layout,
        redirect: '/system-settings/center-mag/index',
        name: 'system-settings',
        meta: {
            title: '系统设置',
            icon: 'icon-wenbenbianjitianchong'
        },
        children: [{
                path: 'center-mag',
                component: () =>
                    import ('@/pages/index/views/system-settings/center-mag/index'),
                meta: { title: '中心管理' }
            },
            {
                path: 'menu1',
                component: () =>
                    import ('@/pages/index/views/system-settings/menu1/index'), // Parent router-view
                name: 'menu1',
                meta: { title: '客户管理' },
                children: [{
                        path: 'menu1-1',
                        component: () =>
                            import ('@/pages/index/views/system-settings/menu1/menu1-1'),
                        name: 'menu1-1',
                        meta: { title: 'menu1-1' }
                    },
                    {
                        path: 'menu1-2',
                        component: () =>
                            import ('@/pages/index/views/system-settings/menu1/menu1-2'),
                        name: 'menu1-2',
                        meta: { title: 'menu1-2' },
                        children: [{
                                path: 'menu1-2-1',
                                component: () =>
                                    import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-1'),
                                name: 'menu1-2-1',
                                meta: { title: 'menu1-2-1' }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () =>
                                    import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-2'),
                                name: 'menu1-2-2',
                                meta: { title: 'menu1-2-2' }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () =>
                            import ('@/pages/index/views/system-settings/menu1/menu1-3'),
                        name: 'menu1-3',
                        meta: { title: 'menu1-3' }
                    }
                ]
            },
            {
                path: 'electrical-mag',
                component: () =>
                    import ('@/pages/index/views/system-settings/electrical-mag/index'),
                meta: { title: '电工管理' }
            },
            {
                path: 'OPS-mag',
                component: () =>
                    import ('@/pages/index/views/system-settings/OPS-mag/index'),
                meta: { title: '运维管理' }
            },
            // {
            //     path: 'menu1',
            //     component: () =>
            //         import ('@/pages/index/views/system-settings/menu1/index'), // Parent router-view
            //     name: 'menu1',
            //     meta: { title: '电气设备' },
            //     children: [{
            //             path: 'menu1-1',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-1'),
            //             name: 'menu1-1',
            //             meta: { title: 'menu1-1' }
            //         },
            //         {
            //             path: 'menu1-2',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-2'),
            //             name: 'menu1-2',
            //             meta: { title: 'menu1-2' },
            //             children: [{
            //                     path: 'menu1-2-1',
            //                     component: () =>
            //                         import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-1'),
            //                     name: 'menu1-2-1',
            //                     meta: { title: 'menu1-2-1' }
            //                 },
            //                 {
            //                     path: 'menu1-2-2',
            //                     component: () =>
            //                         import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-2'),
            //                     name: 'menu1-2-2',
            //                     meta: { title: 'menu1-2-2' }
            //                 }
            //             ]
            //         },
            //         {
            //             path: 'menu1-3',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-3'),
            //             name: 'menu1-3',
            //             meta: { title: 'menu1-3' }
            //         }
            //     ]
            // },
            // {
            //     path: 'menu1',
            //     component: () =>
            //         import ('@/pages/index/views/system-settings/menu1/index'), // Parent router-view
            //     name: 'menu1',
            //     meta: { title: '告警管理' },
            //     children: [{
            //             path: 'menu1-1',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-1'),
            //             name: 'menu1-1',
            //             meta: { title: 'menu1-1' }
            //         },
            //         {
            //             path: 'menu1-2',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-2'),
            //             name: 'menu1-2',
            //             meta: { title: 'menu1-2' },
            //             children: [{
            //                     path: 'menu1-2-1',
            //                     component: () =>
            //                         import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-1'),
            //                     name: 'menu1-2-1',
            //                     meta: { title: 'menu1-2-1' }
            //                 },
            //                 {
            //                     path: 'menu1-2-2',
            //                     component: () =>
            //                         import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-2'),
            //                     name: 'menu1-2-2',
            //                     meta: { title: 'menu1-2-2' }
            //                 }
            //             ]
            //         },
            //         {
            //             path: 'menu1-3',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-3'),
            //             name: 'menu1-3',
            //             meta: { title: 'menu1-3' }
            //         }
            //     ]
            // },
            // {
            //     path: 'menu1',
            //     component: () =>
            //         import ('@/pages/index/views/system-settings/menu1/index'), // Parent router-view
            //     name: 'menu1',
            //     meta: { title: '我的助手' },
            //     children: [{
            //             path: 'menu1-1',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-1'),
            //             name: 'menu1-1',
            //             meta: { title: 'menu1-1' }
            //         },
            //         {
            //             path: 'menu1-2',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-2'),
            //             name: 'menu1-2',
            //             meta: { title: 'menu1-2' },
            //             children: [{
            //                     path: 'menu1-2-1',
            //                     component: () =>
            //                         import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-1'),
            //                     name: 'menu1-2-1',
            //                     meta: { title: 'menu1-2-1' }
            //                 },
            //                 {
            //                     path: 'menu1-2-2',
            //                     component: () =>
            //                         import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-2'),
            //                     name: 'menu1-2-2',
            //                     meta: { title: 'menu1-2-2' }
            //                 }
            //             ]
            //         },
            //         {
            //             path: 'menu1-3',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-3'),
            //             name: 'menu1-3',
            //             meta: { title: 'menu1-3' }
            //         }
            //     ]
            // },
            // {
            //     path: 'menu1',
            //     component: () =>
            //         import ('@/pages/index/views/system-settings/menu1/index'), // Parent router-view
            //     name: 'menu1',
            //     meta: { title: '系统管理' },
            //     children: [{
            //             path: 'menu1-1',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-1'),
            //             name: 'menu1-1',
            //             meta: { title: 'menu1-1' }
            //         },
            //         {
            //             path: 'menu1-2',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-2'),
            //             name: 'menu1-2',
            //             meta: { title: 'menu1-2' },
            //             children: [{
            //                     path: 'menu1-2-1',
            //                     component: () =>
            //                         import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-1'),
            //                     name: 'menu1-2-1',
            //                     meta: { title: 'menu1-2-1' }
            //                 },
            //                 {
            //                     path: 'menu1-2-2',
            //                     component: () =>
            //                         import ('@/pages/index/views/system-settings/menu1/menu1-2/menu1-2-2'),
            //                     name: 'menu1-2-2',
            //                     meta: { title: 'menu1-2-2' }
            //                 }
            //             ]
            //         },
            //         {
            //             path: 'menu1-3',
            //             component: () =>
            //                 import ('@/pages/index/views/system-settings/menu1/menu1-3'),
            //             name: 'menu1-3',
            //             meta: { title: 'menu1-3' }
            //         }
            //     ]
            // },
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