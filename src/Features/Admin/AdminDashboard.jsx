import { InfoCircledIcon, PinRightIcon } from "@radix-ui/react-icons";
import { formatCurrency } from "../../Hooks/helpers";
import { Button, Flex } from "@radix-ui/themes";

const AdminDashboard = () => {
 return (
  <div className="p-4 text-slate-700 bg-neutral-100">
   <div className=" text-slate-600 grid gap-2">
    <h1 className="text-sm">Welcome!</h1>
    <h1 className=" font-bold text-lg">#Name#</h1>
    <h1 className=" text-xs">Here&apos;s a summary of your account. Have fun!
    </h1>
   </div>

   <div className=" py-8 grid gap-8 sm:grid-cols-3">


    <div className="shadow-lg max-w-md p-3 border-b-4 border-blue-500 rounded-md bg-white">
     <div className="flex items-center justify-between">
      <h3 className="">Account Balance</h3>
      <InfoCircledIcon />
     </div>

     <p className=" font-bold text-xl py-4">{formatCurrency(500)}</p>
     <div className="flex items-center gap-2 ">
      <p className=" text-sm">Investment account</p>
      <InfoCircledIcon />
     </div>
     <p className="pb-8 font-bold text-sm">{formatCurrency(0)}</p>
     <Flex gap="3">
      <Button color="blue" variant="solid">
       Deposit &rarr;
      </Button>
      <Button color="cyan" variant="solid" highContrast>
       Invest & Earn
      </Button>
     </Flex>

    </div>


    <div className=" bg-white shadow-lg max-w-md p-3 border-b-4 border-neutral-800 rounded-md">
     <div className="flex items-center justify-between">
      <h3 className="">Account Balance</h3>
      <InfoCircledIcon />
     </div>

     <p className=" font-bold text-xl py-4">{formatCurrency(500)}</p>
     <div className="flex items-center gap-2 ">
      <p className=" text-sm">Investment account</p>
      <InfoCircledIcon />
     </div>
     <p className="pb-4 font-bold text-sm">{formatCurrency(0)}</p>


    </div>


    <div className=" bg-white shadow-lg max-w-md p-3 border-b-4 border-yellow-500 rounded-md">
     <div className="flex items-center justify-between">
      <h3 className="">Account Balance</h3>
      <InfoCircledIcon />
     </div>

     <p className=" font-bold text-xl py-4">{formatCurrency(500)}</p>
     <div className="flex items-center gap-2 ">
      <p className=" text-sm">Investment account</p>
      <InfoCircledIcon />
     </div>
     <p className="pb-4 font-bold text-sm">{formatCurrency(0)}</p>

    </div>

   </div>

   <div className=" text-sm">
    <p className=" text-neutral-700 font-semibold pb-3">Recent Activity</p>
    <p className=" text-green-600 pb-2">See History</p>
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
      <p className=" text-green-500">+{formatCurrency(500)}</p>
      <p>{formatCurrency(500)}</p>
     </div>
    </div>
   </div>
  </div >
 );
};

export default AdminDashboard;