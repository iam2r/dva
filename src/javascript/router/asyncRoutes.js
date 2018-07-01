const asyncRoutes =  [
    {
        path: '/',
        exact: true,
        models: () => [
            import('../pages/Home/model')
        ],
        component: () => import('../pages/Home')
    }
]

export default asyncRoutes;
