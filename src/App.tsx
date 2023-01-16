import React from 'react';
import LoginForm from './components/Login/LoginForm';
import HeaderForm from './components/Header/HeaderForm';
import SideMenuForm from './components/SideMenu/SideMenuForm';
// import ForSaleListDetailForm from './components/Market/ForSaleListDetail/ForSaleListDetailForm';

const isLogin = true;

function App() {
  return (
    <>
      {isLogin ? (
        <>
          <HeaderForm />
          <div style={{ display: "flex", height:"100%" }}>
            <SideMenuForm />
            {/* <ForSaleListDetailForm /> */}
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
