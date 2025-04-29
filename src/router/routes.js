import UsersList from '@/views/users/UsersList.vue'
import Dashboard from '@/views/Dashboard.vue'
import UserCreate from '@/views/users/UserCreate.vue'
import UserDetail from '@/views/users/UserDetail.vue'
import UserEdit from '@/views/users/UserEdit.vue'
import AppLogin from '@/views/AppLogin.vue'
import MainDashboard from '@/components/MainDashboard.vue'

const routes = [
  {
    path: '/login',
    component: AppLogin,
  },
  {
    path: '',
    component: MainDashboard,
    children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: 'users',
        component: UsersList,
      },
      {
        path: 'users/:id',
        component: UserDetail,
      },
      {
        path: 'users/:id/edit',
        component: UserEdit,
      },
      {
        path: 'users/create',
        component: UserCreate,
      },
    ],
  },
]

export default routes
