import { InfoCircledIcon, PinRightIcon } from "@radix-ui/react-icons";
import { formatCurrency } from "../../Hooks/helpers";
import { Button, Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import DepositPopUp from "../../ui/DepositPopUp";
import { useUser } from "../authentication/useUser";
import { useGet } from "../../Hooks/Get/useGet";
import { useGetApi } from "../../Hooks/Get/useGetApi";
import Spinner from "../../ui/Spinner";
import WithdrawPopUp from "../../ui/WithdrawPopUp";
import CreateAccount from "./CreateAccount";

const UserDashboard = () => {
 const { user } = useUser();

 const { fetch: fn } = useGetApi({ key: 'balance' });
 const { fetch, isFetching } = useGet({ fn, key: ['balance', user.id] });
 const navigate = useNavigate();
 if (isFetching) return <Spinner />;
 const balance = fetch?.filter(item => item.userId === user.id)[0]?.balance;

 return (
  <div className="p-4 text-slate-700 bg-neutral-100 min-h-screen">
   <div className=" text-slate-600 sm:flex grid sm:items-center sm:justify-between gap-2">
    <div className="">
     <h1 className="text-sm">Welcome!</h1>
     <h1 className=" font-bold text-lg uppercase">{user.user_metadata.displayName}</h1>
     <h1 className=" text-xs">Here&apos;s a summary of your account. Have fun!
     </h1>
    </div>
    <div className="pt-3">
     <Button color="cyan" variant="solid" highContrast onClick={() => navigate('/user/plans')}>
      Invest & Earn
     </Button>
    </div>
   </div>
   {!balance && <CreateAccount />}

   {balance && <div className=" py-8 grid gap-8 sm:grid-cols-3">


    <div className="shadow-lg max-w-md p-3 border-b-4 border-blue-500 rounded-md bg-white">
     <div className="flex items-center justify-between">
      <h3 className="">Account Balance</h3>
      <InfoCircledIcon />
     </div>

     <p className=" font-bold text-xl py-4">{formatCurrency(balance)}</p>
     <div className="flex items-center gap-2 ">
      <p className=" text-sm">Investment account</p>
      <InfoCircledIcon />
     </div>
     <p className="pb-8 font-bold text-sm">{formatCurrency(0)}</p>
     <Flex gap="3">
      <DepositPopUp text="Deposit" />
      <WithdrawPopUp />
     </Flex>

    </div>


    <div className=" bg-white shadow-lg max-w-md p-3 border-b-4 border-neutral-800 rounded-md">
     <div className="flex items-center justify-between">
      <h3 className="">Bonus Balance</h3>
      <InfoCircledIcon />
     </div>

     <p className=" font-bold text-xl py-4">{formatCurrency(50)}</p>
     <div className="flex items-center gap-2 ">
      <p className=" text-sm">Investment account</p>
      <InfoCircledIcon />
     </div>
     <p className="pb-4 font-bold text-sm">{formatCurrency(0)}</p>


    </div>


    <div className=" bg-white shadow-lg max-w-md p-3 border-b-4 border-yellow-500 rounded-md">
     <div className="flex items-center justify-between">
      <h3 className="">Investment Balance</h3>
      <InfoCircledIcon />
     </div>

     <p className=" font-bold text-xl py-4">{formatCurrency(0)}</p>
     <div className="flex items-center gap-2 ">
      <p className=" text-sm">Investment account</p>
      <InfoCircledIcon />
     </div>
     <p className="pb-4 font-bold text-sm">{formatCurrency(0)}</p>

    </div>

   </div>}

   <div className=" text-sm">
    <p className=" text-neutral-700 font-semibold pb-3">Recent Activity</p>
    <p className=" cursor-pointer text-green-600 pb-2" onClick={() => navigate('/user/transactions')}>See History</p>
    <div className=" bg-white shadow-lg py-4 px-2 flex items-center justify-between">
     <div className="flex items-center gap-2">
      <div className=" text-green-500 w-8 h-8 rounded-full border border-green-500 flex justify-center items-center">

       <PinRightIcon height='16' width="16" />
      </div>
      <div className="">
       <p>Signup Bonus</p>
       <p className=" text-xs">Feb 16, 2024 | Completed</p>
      </div>
     </div>
     <div className="grid">
      <p className=" text-green-500">+{formatCurrency(50)}</p>
      <p>{formatCurrency(50)}</p>
     </div>
    </div>
   </div>
  </div >
 );
};

export default UserDashboard;