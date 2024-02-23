import { PinLeftIcon, PinRightIcon } from "@radix-ui/react-icons";
import { Box, Tabs } from "@radix-ui/themes";
import { formatCurrency } from "../../Hooks/helpers";

const UserTransaction = () => {
 return (
  <div className=" min-h-screen">
   <div className=" p-4 grid gap-3 text-slate-500">
    <p className="">History</p>
    <p className=" text-xl font-semibold">Transactions</p>
    <p className=" text-xs">List of transactions in your account.
    </p>
   </div>
   <Tabs.Root defaultValue="history">
    <Tabs.List>
     <Tabs.Trigger value="history">History</Tabs.Trigger>
     <Tabs.Trigger value="deposit">Deposit</Tabs.Trigger>
     <Tabs.Trigger value="withdraw">Withdraw</Tabs.Trigger>
    </Tabs.List>

    <Box px="4" pt="3" pb="2">
     <Tabs.Content value="history">
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
     </Tabs.Content>

     <Tabs.Content value="deposit">
      <div className=" bg-white shadow-lg py-4 px-2 flex items-center justify-between">
       <div className="flex items-center gap-2">
        <div className=" text-green-500 w-8 h-8 rounded-full border border-green-500 flex justify-center items-center">

         <PinRightIcon height='16' width="16" />
        </div>
        <div className="">
         <p>Deposit</p>
         <p className=" text-xs">Feb 16, 2024 | Completed</p>
        </div>
       </div>
       <div className="grid">
        <p className=" text-green-500">+{formatCurrency(500)}</p>
        <p>{formatCurrency(500)}</p>
       </div>
      </div>
     </Tabs.Content>

     <Tabs.Content value="withdraw">
      <div className=" bg-white shadow-lg py-4 px-2 flex items-center justify-between">
       <div className="flex items-center gap-2">
        <div className=" text-red-500 w-8 h-8 rounded-full border border-red-500 flex justify-center items-center">

         <PinLeftIcon height='16' width="16" />
        </div>
        <div className="">
         <p>Withdraw</p>
         <p className=" text-xs">Feb 16, 2024 | Completed</p>
        </div>
       </div>
       <div className="grid">
        <p className=" text-red-500">-{formatCurrency(500)}</p>
        <p>{formatCurrency(500)}</p>
       </div>
      </div>
     </Tabs.Content>
    </Box>
   </Tabs.Root>

  </div>
 );
};

export default UserTransaction;