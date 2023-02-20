import { Outlet, Navigate } from 'react-router-dom';
import { getCookie } from '../utils/api/CustomCookies/CustomCookies';
import { LoginType } from '../types/LoginType';

const PrivateRoutes = () => {
  const loginStatus = getCookie( LoginType.refresh );
    
  return (
    ( loginStatus !== null ) ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRoutes;