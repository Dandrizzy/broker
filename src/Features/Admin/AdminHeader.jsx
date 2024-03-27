
import AdminNav from "./AdminNav";
import AdminInfo from "./AdminInfo";

const AdminHeader = () => {
 return (
  <div className="flex justify-between items-center p-4 bg-blue-500 text-blue-50">
   <div className=" flex gap-2 items-center">
    <AdminNav />
    <p>GOLDEN TRADE FX</p>
   </div>
   <AdminInfo />
  </div>
 );
};

export default AdminHeader;