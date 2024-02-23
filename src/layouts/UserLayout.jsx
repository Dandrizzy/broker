import { Outlet } from "react-router-dom";
import UserHeader from "../Features/user dashboard/UserHeader";
import Footer from "../ui/Footer";
import UserSideBar from "../Features/user dashboard/UserSideBar";

const UserLayout = () => {
 return (
  <div className=" lg:grid lg:grid-rows-[auto_1fr_auto]">
   <UserHeader />
   <div className=" lg:grid lg:grid-cols-[350px_auto]">
    <div className="hidden lg:block">
     <UserSideBar />
    </div>
    <div className=" overflow-y-auto">
     <Outlet />
    </div>
   </div>
   <Footer />
  </div>
 );
};

export default UserLayout;