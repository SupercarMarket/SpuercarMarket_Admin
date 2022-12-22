import React from 'react';
import LoginForm from './components/Login/LoginForm';
import HeaderForm from './components/Header/HeaderForm';
import SideMenuForm from './components/SideMenu/SideMenuForm';
import ForSaleListForm from './components/Market/ForSaleList/ForSaleListForm';
import VehicleRegistrationInquriyForm from './components/Market/VehicleRegistrationInquiry/VehicleRegistrationInquriyForm';
import VehicleRegistrationInquiryDetailForm from './components/Market/VehicleRegistrationInquiryDetail/VehicleRegistrationInquiryDetailForm';

const isLogin = true;

function App() {
  return (
    <>
      {isLogin ? (
        <>
          <HeaderForm />
          <div style={{ display: "flex", height:"100%" }}>
            <SideMenuForm />
            <ForSaleListForm />
            {/* <ForSaleListDetailForm /> */}
            {/* <VehicleRegistrationInquriyForm /> */}
            {/* <VehicleRegistrationInquiryDetailForm /> */}
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
