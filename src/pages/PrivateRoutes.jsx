import { Outlet, Navigate } from 'react-router-dom';
import { getCookie } from '../utils/api/CustomCookies/CustomCookies';
import { LoginType } from '../types/LoginType';
import HeaderForm from '../components/Header/HeaderForm';
import SideMenuForm from '../components/SideMenu/SideMenuForm';

import HeaderForm from '../components/Header/HeaderForm';
import SideMenuForm from '../components/SideMenu/SideMenuForm';

const PrivateRoutes = () => {
  const loginStatus = !!getCookie( LoginType.refresh );
  console.log( loginStatus );
  return (
    ( loginStatus ) ? (
      <>
      <HeaderForm />
        <div style={{ display:"flex", height:"100%"}}>
          <SideMenuForm/>
          <Outlet />
      </div>
    </>
    ) : <Navigate to="/" />
}

export default PrivateRoutes;