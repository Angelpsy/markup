const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../pages/Home/index.vue'),
        exact: true
    },
    {
        path: '/product/:id',
        name: 'product',
        component: () => import(/* webpackChunkName: "home" */ '../pages/Product/index.vue'),
        props: true
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../pages/About/index.vue')
    }
]

export default routes
