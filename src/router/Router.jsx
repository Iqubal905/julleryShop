import {
    createBrowserRouter,
    
  } from "react-router-dom";
 
import Main from "../layouts/Main";
import Home from "../pages/homes/home/Home";
import Blog from "../pages/Blog";
import AllJullery from "../pages/all jullery/AllJullery";
import MyJullery from "../pages/my jullery/MyJullery";
import AddJullery from "../pages/add jullery/AddJullery";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../layouts/Dashboard";
import AdminHome from "../pages/dashboard/AdminHome";
import AllItems from "../pages/dashboard/AllItems";
import MyItems from "../pages/dashboard/MyItems";
import PrivateRoute from "./PrivateRoute";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/allJullery',
            element: <AllJullery></AllJullery>
        },
        {
            path:'/myJullery',
            element: <MyJullery></MyJullery>
        },
        {
            path:'/addJullery',
            element: <PrivateRoute><AddJullery></AddJullery></PrivateRoute>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/registration',
            element: <Registration></Registration>
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
            path:'adminhome',
            element: <AdminHome></AdminHome>
        },
        {
          path:'allJuwelery',
          element: <AllItems></AllItems>
      },
      {
        path:'myJuwelery',
        element: <MyItems></MyItems>
    }
      
      ]
    },
  ]);
  