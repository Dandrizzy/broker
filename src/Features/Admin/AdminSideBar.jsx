import { useNavigate } from "react-router-dom";
import { AvatarIcon, DashboardIcon, EnterIcon, ExitIcon, HomeIcon, ReaderIcon } from "@radix-ui/react-icons";

const AdminSideBar = () => {
 const navigate = useNavigate();
 return (
  <div className=" px-8 py-8 min-h-screen border-r border-blue-200">
   <div className=" grid gap-2 p-4">
    <div className="">

     <div className=" p-3 text-black/50 font-bold">
      <div className=" uppercase w-60 text-xs pb-3 tracking-widest text-black/30 font-semibold ">menu</div>

      <div onClick={() => navigate('/admin')} className=" flex gap-2 items-center p-2">
       <DashboardIcon height='22' width='22' />
       Dashboard
      </div>


      <div onClick={() => navigate('/admin/deposit')} className=" flex gap-2 items-center p-2">
       <EnterIcon height='22' width='22' />
       Deposit
      </div>


      <div onClick={() => navigate('/admin/withdraw')} className=" flex gap-2 items-center p-2">
       <ExitIcon height='22' width='22' />
       Withdraw
      </div>


      <div onClick={() => navigate('/admin/transactions')} className=" flex gap-2 items-center p-2">
       <ReaderIcon height='22' width='22' />
       Transaction
      </div>

     </div>

     <div className=" p-3 text-black/50 font-bold">
      <div className=" uppercase w-60 text-xs pb-3 tracking-widest text-black/30 font-semibold ">user management</div>

      <div onClick={() => navigate('/admin/manage')} className=" flex gap-2 items-center p-2">
       <AvatarIcon height='22' width='22' />
       Manage User
      </div>
      <div onClick={() => navigate('/')} className=" flex gap-2 items-center p-2">
       <HomeIcon height='22' width='22' />
       Go to home
      </div>

     </div>


    </div>
   </div>
  </div>
 );
};

export default AdminSideBar;