import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Navbar></Navbar>
        }
      ]
    },
  ]);

export default router;