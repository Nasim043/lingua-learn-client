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
      },
      {
        path: "classes",
        element: <Classes></Classes>
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
      },
      {
        path: "instructormanageclass",
        element: <InstructorManageClass></InstructorManageClass>
      },
      {
        path: "studentselectedclass",
        element: <StudentSelectedClass></StudentSelectedClass>
      },
      {
        path: "studentenrolledclass",
        element: <StudentEnrolledClass></StudentEnrolledClass>
      },
    ]
  }
]);

export default router;