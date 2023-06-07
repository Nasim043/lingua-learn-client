import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Dashboard from "../Layout/Dashboard";
import AdminClasses from "../Pages/Dashboard/Admin/AdminClasses";
import AdminUsers from "../Pages/Dashboard/Admin/AdminUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "adminclasses",
        element: <AdminClasses></AdminClasses>
      },
      {
        path: "adminusers",
        element: <AdminUsers></AdminUsers>
      }
    ]
  }
]);

export default router;