import PrivateRoutes from "./PrivateRoutes";
import {Routes, Route} from "react-router-dom";
// pages
import LoginForm from "../components/Login/LoginForm";
import ForSaleListForm from "../components/Market/ForSaleList/ForSaleListForm";
import ForSaleListDetailForm from "../components/Market/ForSaleListDetail/ForSaleListDetailForm";
import VehicleRegistrationInquriyForm
    from "../components/Market/VehicleRegistrationInquiry/VehicleRegistrationInquriyForm";
import VehicleRegistrationInquiryDetailForm
    from "../components/Market/VehicleRegistrationInquiryDetail/VehicleRegistrationInquiryDetailForm";
import EtcInquiryForm from "../components/Inquiry/EtcInquiryList/EtcInquiryListForm";
import EtcInquiryDetailForm from "../components/Inquiry/EtcInquiryDetail/EtcDetailForm";
import MemberListForm from "components/Member/MemberList/MemberListForm";
import DealerInquiryListForm from "components/Member/DealerInquiryList/DealerInquiryListForm";
import DealerInquiryDetailForm from "components/Member/DealerInquiryDetail/DealerInquiryDetailForm";
import AdminListForm from "components/Member/AdminList/AdminListForm";
import MemberDetailForm from "components/Member/MemberDetail/MemberDetailForm";
import MagazineListForm from "components/Magazine/MagazineList/MagazineListForm";
import MagazineDetailForm from "components/Magazine/MagazineDetail/MagazineDetailForm";
import MagazineTmpListForm from "components/Magazine/MagazineTmpList/MagazineTmpListForm";
import MagazineTmpEditForm from "components/Magazine/MagazineEditor/MagazineTmpEditForm";
import CommunityForm from "components/Community/CommunityList/CommunityForm";
import CommunityDetailForm from "components/Community/CommunityListDetail/CommunityDetailForm";
import CooperationListForm from "components/Cooperation/CooperationList/CooperationListForm";
import CooperationListDetailForm from "components/Cooperation/CooperationListDetail/CooperationListDetailForm";
import CooperationInquiryForm from "components/Cooperation/CooperationInquiry/CooperationInquiryForm";
import CooperationInquiryDetailForm from "components/Cooperation/CooperationInquiryDetail/CooperationInquiryDetailForm";
import BannerListForm from "components/Advertisement/Banner/BannerList/BannerListForm";
import BannerDetailForm from "components/Advertisement/Banner/BannerDetail/BannerDetailForm";
import BannerUpdateForm from "components/Advertisement/Banner/BannerDetail/BannerUpdateForm";
import BannerCreateForm from "components/Advertisement/Banner/BannerDetail/BannerCreateForm";
import AdvertisementListForm from "../components/Advertisement/AdvertisementList/AdvertisementListForm";
import AdvertisementDetailForm from "../components/Advertisement/AdvertisementDetail/AdvertisementDetailForm";
import AdvertisementInquiryListForm
    from "../components/Advertisement/AdvertisementInquiryList/AdvertisementInquiryListForm";
import AdvertisementInquiryDetailForm
  from "../components/Advertisement/AdvertisementInquiryDetail/AdvertisementInquiryDetailForm";
import AdvertisementEditForm from "../components/Advertisement/AdvertisementEdit/AdvertisementEditForm";
import AdvertisementModifyForm from "../components/Advertisement/AdvertisementModify/AdvertisementModifyForm";
const AdminPages = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        {/* 회원 관리 */}
        <Route path="/memberlist" element={<MemberListForm />} />
        <Route path="/memberlist/:dlrSeq" element={<MemberDetailForm />} />
        <Route path="/dealerinquiry" element={<DealerInquiryListForm />} />
        <Route
          path="/dealerinquiry/:dlrSeq"
          element={<DealerInquiryDetailForm />}
        />
        <Route path="/adminlist" element={<AdminListForm />} />
        {/* 매거진 관리 */}
        <Route path="/magazinelist" element={<MagazineListForm />} />
        <Route path="/magazinelist/:brdSeq" element={<MagazineDetailForm />} />
        <Route path="/magazinetmp" element={<MagazineTmpListForm />} />
        <Route path="/magazinetmp/editor" element={<MagazineTmpEditForm />} />
        {/* 매장 관리 */}
        <Route path="/salelist" element={<ForSaleListForm />} />
        <Route path="/salelist/:saleId" element={<ForSaleListDetailForm />} />
        <Route
          path="/saleinquriy"
          element={<VehicleRegistrationInquriyForm />}
        />
        <Route
          path="/saleinquriy/:inquiryId"
          element={<VehicleRegistrationInquiryDetailForm />}
        />
        {/* 커뮤니티 관리 */}
        <Route path="/community" element={<CommunityForm />} />
        <Route
          path="/community/:communityId"
          element={<CommunityDetailForm />}
        />

        {/* 제휴 업체 */}
        <Route path="/cooperationlist" element={<CooperationListForm/>}/>
        <Route path="/cooperationlist/:cooperationlistId" element={<CooperationListDetailForm/>}/>
        <Route path="/cooperationinquirylist" element={<CooperationInquiryForm/>}/>
        <Route path="/cooperationinquirylist/:cooperationlistId" element={<CooperationInquiryDetailForm/>}/>
        {/* 광고 관리*/}
        <Route path="/advertisementlist" element={<AdvertisementListForm/>}/>
        <Route path="/advertisementlist/edit/:brdSeq" element={<AdvertisementModifyForm/>}/>
        <Route path="/advertisementlist/:brdSeq" element={<AdvertisementDetailForm/>}/>
        <Route path="/advertisementlist/add" element={<AdvertisementEditForm/>}/>
        <Route path="/advertisementlist/inquiry" element={<AdvertisementInquiryListForm/>}/>
        <Route path="/advertisementlist/inquiry/:brdSeq" element={<AdvertisementInquiryDetailForm/>}/>
        {/* 배너 관리*/}
        <Route
            path="/bannerlist"
            element={<BannerListForm />}
        />

        <Route
          path="/banner/:id"
          element={<BannerDetailForm />}
        />
        <Route
          path="/banner/update/:id"
          element={<BannerUpdateForm />}
        />
        <Route
          path="/banner/create"
          element={<BannerCreateForm />}
        />
        {/* 문의 하기 */}
        <Route path="/etcinquiry" element={<EtcInquiryForm/>}/>
        <Route path="/etcinquiry/:inquiryId" element={<EtcInquiryDetailForm/>}/>
        </Route>

        {/* Login 아니면 */}
        <Route path="/" element={<LoginForm/>}/>
        </Routes>
    );
};

export default AdminPages;
