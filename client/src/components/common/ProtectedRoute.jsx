import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // wait while auth state loads
  if (loading) {
    return <LoadingSpinner />;
  }

  // if not logged in redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // if logged in show the page
  return children;
};

export default ProtectedRoute;