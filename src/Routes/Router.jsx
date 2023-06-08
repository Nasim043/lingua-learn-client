import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Dashboard from "../Layout/Dashboard";
import AdminClasses from "../Pages/Dashboard/Admin/AdminClasses";
import AdminUsers from "../Pages/Dashboard/Admin/AdminUsers";
import ErrorPage from "../Pages/Error/ErrorPage";
import InstructorAddClass from "../Pages/Dashboard/Instructors/InstructorAddClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "adminclasses",
        element: <AdminClasses></AdminClasses>
      },
      {
        path: "adminusers",
        element: <AdminUsers></AdminUsers>
      },
      {
        path: "instructoraddclass",
        element: <InstructorAddClass></InstructorAddClass>
      }
    ]
  }
]);

export default router;