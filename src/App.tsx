import React, { useEffect } from 'react';
import HeaderForm from './components/Header/HeaderForm';
import SideMenuForm from './components/SideMenu/SideMenuForm';
import { getCookie } from './utils/api/CustomCookies/CustomCookies';
import { LoginType } from './types/LoginType';

// react-router-dom
import { BrowserRouter } from "react-router-dom";

import AdminPages from './pages/AdminPages';
const isLogin = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <AdminPages />
      </BrowserRouter>
    </>
  );
}

export default App;
