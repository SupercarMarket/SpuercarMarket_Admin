import PrivateRoutes from "./PrivateRoutes";
import { Routes, Route } from "react-router-dom";

// pages
import LoginForm from "../components/Login/LoginForm";

const AdminPages = () => {
  return (
    <Routes>
        <Route element={<PrivateRoutes />}>
            <Route path="/salelist" element={<ForSaleListForm />}>
                <Route path=":saleId" element={<ForSaleListDetailForm/>} />
            </Route>
            <Route path='/saleinquriy' element={<VehicleRegistrationInquriyForm/>} >
                <Route path=":inquriyId" element={<VehicleRegistrationInquiryDetailForm/>} />
            </Route>
        </Route>

        {/* Login 아니면 */}
        <Route path="/" element={<LoginForm />} />
    </Routes>
  )
}

export default AdminPages