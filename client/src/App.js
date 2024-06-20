import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Profile from './components/Profile';
import Register from './components/Register';
import Username from './components/Username';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';


const route=createBrowserRouter([
  {
    path:'/',
    element:<Username></Username>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/username',
    element:<Username></Username>
  },{
    path:'/password',
    element:<Password></Password>
  },{
    path:'/profile',
    element:<Profile></Profile>
  },{
    path:'/recovery',
    element:<Recovery></Recovery>
  },{
    path:'/reset',
    element:<Reset></Reset>
  },{
    path:'*',
    element:<PageNotFound></PageNotFound>
  }]);
export default function App() {
  return (
    <>
   <RouterProvider router={route}/>
    </>
  )
}
