import Home from "@/pages";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import ProfilePage from "@/pages/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./protected-routes";
import PostWithComment from "@/pages/postWithComment";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/post/:postID", element: <PostWithComment /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
