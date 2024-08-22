import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function OnlyAdminPrivateRoute() {
  const currentUser = useSelector((state) => state.user.currentUser);

  // console.log("currentUser:", currentUser);
  
  return currentUser && currentUser.isAdmin ? <Outlet /> : <Navigate to="/" />;
}