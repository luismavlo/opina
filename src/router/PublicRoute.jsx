import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, isAuthenticated }) => {
  return !isAuthenticated ? children : <Navigate to="/opina/clipping" />;
};

export default PublicRoute;
