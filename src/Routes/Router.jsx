import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Dashboard from "../Layout/Dashboard";
import AdminClasses from "../Pages/Dashboard/Admin/AdminClasses";
import AdminUsers from "../Pages/Dashboard/Admin/AdminUsers";
import ErrorPage from "../Pages/Error/ErrorPage";
import Classes from "../Pages/Classes/Classes";
import InstructorAddClass from "../Pages/Dashboard/Instructors/InstructorAddClass";
import InstructorManageClass from "../Pages/Dashboard/Instructors/InstructorManageClass";
import StudentSelectedClass from "../Pages/Dashboard/Student/StudentSelectedClass";
import StudentEnrolledClass from "../Pages/Dashboard/Student/StudentEnrolledClass";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import Feedback from "../Pages/Dashboard/Admin/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "classes",
        element: <Classes></Classes>
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "adminclasses",
        element: <AdminRoute><AdminClasses></AdminClasses></AdminRoute>,
      },
      {
        path: "adminusers",
        element: <AdminRoute><AdminUsers></AdminUsers></AdminRoute>,
      },
      {
        path: "adminfeedback",
        element: <AdminRoute><Feedback></Feedback></AdminRoute>
      },
      {
        path: "instructoraddclass",
        element: <InstructorRoute><InstructorAddClass></InstructorAddClass></InstructorRoute>
      },
      {
        path: "instructormanageclass",
        element: <InstructorRoute><InstructorManageClass></InstructorManageClass></InstructorRoute>
      },
      {
        path: "studentselectedclass",
        element: <StudentRoute><StudentSelectedClass></StudentSelectedClass></StudentRoute>
      },
      {
        path: "studentenrolledclass",
        element: <StudentRoute><StudentEnrolledClass></StudentEnrolledClass></StudentRoute>
      },
    ]
  }
]);

export default router;