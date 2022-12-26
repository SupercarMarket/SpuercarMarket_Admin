import React from "react";
import LoginForm from "./components/Login/LoginForm";
import HeaderForm from "./components/Header/HeaderForm";
import SideMenuForm from "./components/SideMenu/SideMenuForm";

import MemberListForm from "components/Member/MemberList/MemberListForm";

const isLogin = true;

function App() {
  return (
    <>
      {isLogin ? (
        <>
          <HeaderForm />
          <div style={{ display: "flex", height: "100%" }}>
            <SideMenuForm />
            <MemberListForm />
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
