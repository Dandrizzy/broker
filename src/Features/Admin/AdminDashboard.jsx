import { Button } from "@radix-ui/themes";
import EditDeposit from "./EditDeposit";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdPayment } from "react-icons/md";


const AdminDashboard = () => {
 const navigate = useNavigate();
 return (
  <div className=" min-h-screen p-4 text-slate-700 bg-neutral-100">
   <div className=" pb-6 text-slate-600 grid gap-2">
    <h1 className="text-sm">Welcome!</h1>
    <h1 className=" font-bold text-lg">Admin</h1>
    <h1 className=" text-xs">Here&apos;s a summary of your account. Have fun!
    </h1>
   </div>
   <div className=" flex gap-3 flex-wrap">
    <EditDeposit />
    <Button variant="soft" onClick={() => navigate('/admin/manage')}><FaCircleUser />Users</Button>
    <Button variant="soft" onClick={() => navigate('/admin/payments')}><MdPayment />Payments</Button>
   </div>



  </div >
 );
};

export default AdminDashboard;