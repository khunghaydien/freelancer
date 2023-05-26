import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './component/Index';
const menuList = [
  {
    name: 'Home',
    id: '1',
    position: 0
  },
  {
    name: 'About us',
    id: '2',
    position: 0
  },
  {
    name: 'Community',
    id: '3',
    position: 0
  },
  {
    name: 'Blog',
    id: '4',
    position: 0
  },
  {
    name: '',
    id: '5',
    position: 0
  }
]
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index menuList={menuList}/>,
    children:[{
      path:'/menu/:menuId',
      element:<>div</>
    }]
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
