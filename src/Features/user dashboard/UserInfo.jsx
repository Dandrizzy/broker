import { DropdownMenu, } from "@radix-ui/themes";
import { FaUser } from "react-icons/fa6";
import { formatCurrency } from "../../Hooks/helpers";
import { CardStackMinusIcon, CardStackPlusIcon, ExitIcon, PersonIcon, } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../authentication/useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import { useGetApi } from "@/Hooks/Get/useGetApi";
import { useGet } from "@/Hooks/Get/useGet";
import { useUser } from "../authentication/useUser";
import Spinner from "@/ui/Spinner";

const UserInfo = () => {
 const { user } = useUser();
 const { fetch: fn } = useGetApi({ key: 'balance' });
 const { fetch: balances, isFetching } = useGet({ key: ['balance', user.id], fn });
 const bal = balances.find(b => b.userId === user.id)?.balance;
 const navigate = useNavigate();
 const { isLoading, logout } = useLogout();
 if (isFetching) return <Spinner />;
 if (isLoading) return <SpinnerMini />;
 return (
  <div className="">
   <DropdownMenu.Root>
    <DropdownMenu.Trigger>

     <div className=" bg-white text-blue-500 p-2 rounded-full">
      <FaUser />
     </div>

    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
     <div className=" grid gap-2 p-4">
      <p className=" uppercase text-xl font-bold text-black/50 w-60">account balance</p>
      <p className=" text-xl font-bold text-green-400">{formatCurrency(bal)}</p>
     </div>
     <DropdownMenu.Separator />
     <DropdownMenu.Item >
      <div className=" flex gap-3 items-center" onClick={() => navigate('/user')}>
       <CardStackPlusIcon width="16" height="16" /> Deposit funds
      </div>
     </DropdownMenu.Item>
     <DropdownMenu.Separator />
     <DropdownMenu.Item >
      <div className=" flex gap-3 items-center" onClick={() => navigate('/user')}>
       <CardStackMinusIcon width="16" height="16" /> Withdraw funds
      </div>
     </DropdownMenu.Item>
     <DropdownMenu.Separator />
     <DropdownMenu.Item >
      <div className=" flex gap-3 items-center" onClick={() => navigate('/user/profile')}>
       <PersonIcon width="16" height="16" /> View profile
      </div>
     </DropdownMenu.Item>
     <DropdownMenu.Separator />
     <DropdownMenu.Item color="red">
      <div className=" flex gap-3 items-center" onClick={() => logout()}>
       <ExitIcon width="16" height="16" /> Sign out
      </div>

     </DropdownMenu.Item>
    </DropdownMenu.Content>
   </DropdownMenu.Root>
  </div>
 );
};

export default UserInfo;