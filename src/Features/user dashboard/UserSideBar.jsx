import { Button } from "@radix-ui/themes";
import { formatCurrency } from "../../Hooks/helpers";
import { useNavigate } from "react-router-dom";
import { DashboardIcon, HomeIcon, PersonIcon, Share1Icon, SymbolIcon } from "@radix-ui/react-icons";

const UserSideBar = () => {
 const navigate = useNavigate();
 return (
  <div className=" px-8 py-8 min-h-screen border-r border-blue-200">
   <div className=" grid gap-2 p-4">
    <p className=" uppercase text-xs text-black/50 w-60"><span className=" hidden lg:inline">main</span> account balance</p>
    <p className=" text-xl font-bold text-blue-500">{formatCurrency(500)}</p>
    <p className=" text-slate-500 text-sm">0.1789 ETH</p>
    <div className=" text-slate-500 text-xs flex justify-between">
     <p>Profits</p>
     <p className=" font-semibold">{formatCurrency(0)}</p>
    </div>
    <div className=" py-4 flex gap-3">
     <Button color="blue">
      DEPOSIT
     </Button>
     <Button color="yellow" style={{ color: '#fff' }}>
      WITHDRAW
     </Button>

    </div>
    <div className="">

     <div className=" p-3 text-black/50 font-bold">
      <div className=" uppercase w-60 text-xs pb-3 tracking-widest text-black/30 font-semibold ">menu</div>

      <div onClick={() => navigate('/user')} className=" flex gap-2 items-center p-2">
       <DashboardIcon height='22' width='22' />
       Dashboard
      </div>


      <div onClick={() => navigate('/user/transactions')} className=" flex gap-2 items-center p-2">
       <Share1Icon height='22' width='22' />
       Transaction
      </div>


      <div onClick={() => navigate('/user/investment')} className=" flex gap-2 items-center p-2">
       <SymbolIcon height='22' width='22' />
       Investment
      </div>


      <div onClick={() => navigate('/user/plans')} className=" flex gap-2 items-center p-2">
       <SymbolIcon height='22' width='22' />
       Our plans
      </div>


      <div onClick={() => navigate('/user/profile')} className=" flex gap-2 items-center p-2">
       <PersonIcon height='22' width='22' />
       My profile
      </div>

     </div>

     <div className=" p-3 text-black/50 font-bold">
      <div className=" uppercase w-60 text-xs pb-3 tracking-widest text-black/30 font-semibold ">additional</div>

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

export default UserSideBar;