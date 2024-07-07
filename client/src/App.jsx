import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Username from './components/Username';
import Register from './components/Register';
import Password from './components/Password';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import { ThemeProvider} from './components/contexts/modetoggle';
import { useEffect, useState } from 'react';


const route= createBrowserRouter([
  {
    path:'/',

    element:
    <Username/>
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
  // const [theme,setThemeMode]=useState("light")
  // const [setTheme,setSetTheme] = useState(
  //   setThemeMode(theme==='light'?'dark':'light')
  // );
  // useEffect(()=>{
  //   document.getElementById('toggle').onclick(console.log(document.getElementsByClassName('container').length));
  //   setSetTheme('dark');

    
  // },[theme]);

  return (
    <>
     
    
    {/* <ThemeProvider value={{theme,setTheme}}> */}
    <RouterProvider router={route}/>
    {/* </ThemeProvider> */}
    
    
     
    </>
  )
}

export default App
