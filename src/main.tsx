import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/main';
import Sidebar from './component/Sidebar';
import ErrorPage from './component/ErrorPage';
import SidebarPage from './component/SidebarPage';
import { menuList } from './domain/Const';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main menuList={menuList}/>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:'/:menuId',
      element:<Sidebar/>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/:menuId/:sidebarId',
          element:<SidebarPage/>,
          errorElement:<ErrorPage></ErrorPage>,
        }
      ]
    }]
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
