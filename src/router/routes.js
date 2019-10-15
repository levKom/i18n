import MainPage from '@components/MainPage'
import Data from '@components/Data'
import Test from '@components/Test'

export const routes = [
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: 'json_data',
        component: Data,
      },
      {
        path: 'test',
        component: Test,
      },
    ],
  },
]
