import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import DefaultLayout from "./layouts/DefaultLayout";
import MainLayout from "./layouts/MainLayout";
import Schedule from "./pages/schedule/Schedule";

//layout

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <DefaultLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Schedule />,
      },
    ],
  },
]);

export default router;
