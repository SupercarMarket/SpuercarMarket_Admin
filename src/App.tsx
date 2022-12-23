import React from 'react';
import LoginForm from './components/Login/LoginForm';
import HeaderForm from './components/Header/HeaderForm';
import SideMenuForm from './components/SideMenu/SideMenuForm';
import CommunityForm from './components/Community/CommunityForm';

const isLogin = true;

function App() {
  return (
    <>
      {isLogin ? (
        <>
          <HeaderForm />
          <div style={{ display: "flex" }}>
            <SideMenuForm />
            <CommunityForm />
          </div>
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </>
  );
}

export default App;
