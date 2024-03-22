import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useToken } from "@/utils/contexts/token";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { token } = useToken();

  const authProtected = ["/login", "/register"];
  const protectedByToken = ["/profile"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
