import { Outlet } from "react-router-dom";
import AdminHeader from "../Features/Admin/AdminHeader";
import Footer from "../ui/Footer";
import AdminSideBar from "../Features/Admin/AdminSideBar";


const AdminLayout = () => {
 return (
  <div className=" lg:grid lg:grid-rows-[auto_1fr_auto]">
   <AdminHeader />
   <div className=" lg:grid lg:grid-cols-[350px_auto]">
    <div className="hidden lg:block">
     <AdminSideBar />
    </div>
    <div className=" overflow-y-auto">
     <Outlet />
    </div>
   </div>
   <Footer />
  </div>
 );
};

export default AdminLayout;