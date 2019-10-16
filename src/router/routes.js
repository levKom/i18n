import MainPage from '@components/MainPage'
import Data from '@components/Data'
import Test from '@components/Test'

export const routes = [
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: '',
        component: Test,
      },
      {
        path: 'json_data',
        component: Data,
      },
    ],
  },
]
