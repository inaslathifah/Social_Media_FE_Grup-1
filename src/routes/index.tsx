import Home from "@/pages";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./protected-routes";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
