import PrivateRoutes from "./PrivateRoutes";
import { Routes, Route } from "react-router-dom";
// pages
import LoginForm from "../components/Login/LoginForm";
import ForSaleListForm from "../components/Market/ForSaleList/ForSaleListForm";
import ForSaleListDetailForm from "../components/Market/ForSaleListDetail/ForSaleListDetailForm";
import VehicleRegistrationInquriyForm from "../components/Market/VehicleRegistrationInquiry/VehicleRegistrationInquriyForm";
import VehicleRegistrationInquiryDetailForm from "../components/Market/VehicleRegistrationInquiryDetail/VehicleRegistrationInquiryDetailForm";
import EtcInquiryForm from "../components/Inquiry/EtcInquiryList/EtcInquiryListForm";
import EtcInquiryDetailForm from "../components/Inquiry/EtcInquiryDetail/EtcDetailForm";
import MemberListForm from "components/Member/MemberList/MemberListForm";
import DealerInquiryListForm from "components/Member/DealerInquiryList/DealerInquiryListForm";
import AdminListForm from "components/Member/AdminList/AdminListForm";
import MemberDetailForm from "components/Member/MemberDetail/MemberDetailForm";
import DealerInquiryDetailForm from "components/Member/DealerInquiryDetail/DealerInquiryDetailForm";

const AdminPages = () => {
  return (
    <Routes>
        <Route element={<PrivateRoutes />}>
            <Route path="/memberlist" element={<MemberListForm/>}/>
            <Route path="/memberlist/:dlrSeq" element={<MemberDetailForm/>}/>
            <Route path="/dealerinquiry" element={<DealerInquiryListForm/>}/>
            <Route path="/dealerinquiry/:dlrSeq" element={<DealerInquiryDetailForm/>}/>
            <Route path="/adminlist" element={<AdminListForm/>}/>

            <Route path="/salelist" element={<ForSaleListForm />} />
            <Route path="/salelist/:saleId" element={<ForSaleListDetailForm/>} />
            
            <Route path='/saleinquriy' element={<VehicleRegistrationInquriyForm/>} />
            <Route path="/saleinquriy/:inquiryId" element={<VehicleRegistrationInquiryDetailForm/>} />

            <Route path='/etcinquiry' element={<EtcInquiryForm/>} />
            <Route path="/etcinquiry/:inquiryId" element={<EtcInquiryDetailForm/>} />
        </Route>

        {/* Login 아니면 */}
        <Route path="/" element={<LoginForm />} />
    </Routes>
  )
}

export default AdminPages