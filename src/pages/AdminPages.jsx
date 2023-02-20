import PrivateRoutes from "./PrivateRoutes";
import { Routes, Route } from "react-router-dom";

// pages
import LoginForm from "../components/Login/LoginForm";

const AdminPages = () => {
  return (
    <Routes>
        {/* Login 아니면 */}
        <Route path="/" element={<LoginForm />} />
    </Routes>
  )
}

export default AdminPages