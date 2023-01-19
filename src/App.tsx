import React from 'react';
import LoginForm from './components/Login/LoginForm';
import HeaderForm from './components/Header/HeaderForm';
import SideMenuForm from './components/SideMenu/SideMenuForm';

const isLogin = true;

function App() {
  return (
    <>
      {isLogin ? (
        <>
          <HeaderForm />
          <div style={{ display: "flex", height:"100%" }}>
            <SideMenuForm />
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
