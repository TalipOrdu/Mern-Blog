import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const {currentUser} = useSelector((state) => state.user.currentUser);
  const {isAuthenticated} = !!currentUser; // Simple check if currentUser exists

  console.log("currentUser:", currentUser);
  console.log("Is authenticated:", isAuthenticated);
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
}