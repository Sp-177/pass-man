import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Username from './components/Username';
import Register from './components/Register';
import Password from './components/Password';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
const route= createBrowserRouter([
  {
    path:'/',
    element:<Username/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/password',
    element:<Password/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/recovery',
    element:<Recovery/>
  },
  {
    path:'/reset',
    element:<Reset/>
  },

  {
    path:'*',
    element:<PageNotFound/>
  }
]);
function App() {


  return (
    <>
    <RouterProvider router={route}></RouterProvider>
     
    </>
  )
}

export default App
