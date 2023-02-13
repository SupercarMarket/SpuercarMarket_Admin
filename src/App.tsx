import React from "react";
import LoginForm from "./components/Login/LoginForm";
import HeaderForm from "./components/Header/HeaderForm";
import SideMenuForm from "./components/SideMenu/SideMenuForm";

import MemberListForm from "components/Member/MemberList/MemberListForm";
import DealerDetailForm from "components/Member/MemberListDetail/DealerDetailForm";
import DealerInquiryDetailForm from "components/Member/DealerInquiryDetail/DealerInquiryDetailForm";
import AdminListForm from "components/Member/AdminList/AdminListForm";
import DealerInquiryListForm from "components/Member/DealerInquiry/DealerInquiryListForm";

const isLogin = true;

function App() {
  return (
    <>
      {isLogin ? (
        <>
          <HeaderForm />
          <div style={{ display: "flex", height: "100%" }}>
            <SideMenuForm />
            <DealerInquiryListForm />
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
