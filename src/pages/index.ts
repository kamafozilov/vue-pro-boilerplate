export const routes = [
    {
        path: '/',
        component: () => import('./dashboard'),
        meta: {
            title: 'Dashboard'
        }
    },
    {
        path: '/settings',
        component: () => import('./settings'),
        meta: {
            title: 'Settings'
        }
    }
]