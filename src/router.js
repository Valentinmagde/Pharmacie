import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================

                {
                    path: '/',
                    redirect: '/home'
                },

                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/layouts/main/Main.vue'),
                    meta: {
                      rule: 'editor'
                    }
                },
        // =============================================================================
        // Application Routes - Administrator
        // =============================================================================

        // *****************************  Associations ****************************** //
                // -----------------  MEMBRES  ------------------------//
                /* {
                    path: '/apps/member/member-account',
                    name: 'app-member-account',
                    component: () => import('@/views/pages/Association/Home/membre/membre.vue'),
                    meta: { */
                        //middleware: [isAdmin],
                        /* breadcrumb: [
                            { title: 'Home', url: '/home/admin' },
                            { title: 'Associations', i18n:'association'},
                            { title: 'Members', i18n:'members', active: true },
                        ],
                        pageTitle: 'members',
                        rule: 'isAdmin'
                    },
                }, */
        // -------------------------------------------------------------------------------------------------------------------------------------------

        // =============================================================================
        // Pages Routes
        // =============================================================================

                 // il s'agit du router pour la page profile lorsqu'on est a l'intérieur d'une activité
                 /* {
                    path: '/pages/profilea',
                    name: 'page-profile',
                    component: () => import('@/views/pages/User/Profile.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'Profile', active: true },
                        ],
                        pageTitle: 'Profile',
                        rule: 'editor'
                    },
                }, */
                // fin

                /* {
                    path: '/pages/Updateprofilea',
                    name: 'page-profile',
                    component: () => import('@/views/pages/User/UpdateProfilea.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'Profile', active: true },
                        ],
                        pageTitle: 'Profile',
                        rule: 'editor'
                    },
                }, */
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
                /* {
                    path: '/callback',
                    name: 'auth-callback',
                    component: () => import('@/views/Callback.vue'),
                    meta: {
                        rule: 'editor'
                    }
                }, */
            ]
        },
        // Redirect to 404 page, if no match found
        /* {
            path: '*',
            redirect: '/pages/error-404'
        } */
    ],
})

export default router