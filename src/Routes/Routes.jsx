import {
  createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Providers/PrivateRoute"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddCamp from "../Pages/Dashboard/AddCamp/AddCamp";
import CampDetails from "../Pages/Home/Camp/CampDetails";
import JoinCamp from "../Pages/Home/Camp/JoinCamp";
import ManageCamp from "../Pages/Dashboard/ManageCamp/ManageCamp";
import ManageRegisteredCamp from "../Pages/Dashboard/ManageRegisteredCamp/ManageRegisteredCamp";
import UpdateCamp from "../Pages/Dashboard/UpdateCamp/UpdateCamp";
import Profile from "../Pages/Dashboard/Profile/Profile";
import UpdateProfile from "../Pages/Dashboard/UpdateProfile/UpdateProfile";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/campDetails/:id',
        element: <CampDetails></CampDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/singleCamp/${params.id}`)
      },
      {
        path: '/joinCamp/:id',
        element: <JoinCamp></JoinCamp>,
        loader: ({params}) => fetch(`http://localhost:5000/joinCamp/${params.id}`)
      }
    ]
  },
  {
    path: 'dashboard',
    element:  <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
    // element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // general user can access
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      

      // Only Admin can access
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addCamp',
        element: <AddCamp></AddCamp>
      },
      {
        path: 'manageCamp',
        element: <ManageCamp></ManageCamp>
      },
      {
        path: 'manageRegisteredCamp',
        element: <ManageRegisteredCamp></ManageRegisteredCamp>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        // updateCamp
        path: 'updateCamp/:id',
        element: <UpdateCamp></UpdateCamp>,
        loader: ({params}) => fetch(`http://localhost:5000/updateCamp/${params.id}`)
      },
      {
        // updateCamp
        path: 'updateProfile/:email',
        element: <UpdateProfile></UpdateProfile>,
        loader: ({params}) => fetch(`http://localhost:5000/updateProfile/${params.email}`)
      }
    ]
  }
]);