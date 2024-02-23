import { FilePlusIcon, InfoCircledIcon, PlusIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import { formatCurrency } from "../../Hooks/helpers";
import { useNavigate } from "react-router-dom";

const UserInvest = () => {
 const navigate = useNavigate();
 return (
  <div className="p-4 min-h-screen bg-slate-100">
   <div className="p-4 text-slate-500">
    <div className=" sm:flex grid sm:justify-between sm:items-end">
     <div className=" grid gap-3">
      <p className="">Investment</p>
      <p className=" text-xl font-semibold">Invested Plans</p>
      <p className=" text-xs pb-3">At a glance summary of your investment.
      </p>
     </div>

     <Flex gap="3" align="center">
      <Button variant="outline" highContrast>
       Deposit Funds &rarr;
      </Button>
      <Button variant="solid" onClick={() => navigate('/user/plans')}>
       Invest & Earn &rarr;
      </Button>
     </Flex>
    </div>
    <div className="grid sm:grid-cols-2 gap-8">
     <div className=" mt-4">
      <div className=" shadow-md grid gap-3 p-3 pb-6 bg-white border-l-4 border-blue-500 rounded-md text-slate-500">
       <div className="flex items-center gap-2 ">
        <p className=" text-lg">Investment account</p>
        <InfoCircledIcon />
       </div>
       <div className="">
        <p className=" font-bold text-xl">{formatCurrency(0)}</p>
        <p className=" text-xs">Available Funds</p>
       </div>
       <PlusIcon width='22' height='22' />
       <div className=" pb-3">
        <p className=" font-bold text-xl">0.00%</p>
        <p className=" text-xs">Locked</p>
       </div>
       <Flex gap="3" align="center">
        <Button variant="solid" highContrast>
         Transfer Funds &rarr;
        </Button>
       </Flex>
      </div>
     </div>

     <div className=" mt-4">
      <div className=" shadow-md grid gap-3 p-3 pb-6 bg-white border-l-4 border-yellow-500 rounded-md text-slate-500">
       <div className="flex items-center gap-2 ">
        <p className=" text-lg">Amount Invested</p>
        <InfoCircledIcon />
       </div>
       <div className="">
        <p className=" font-bold text-xl">{formatCurrency(0)}</p>
        <p className=" text-xs">Currently Invested</p>
       </div>
       <PlusIcon width='22' height='22' />
       <div className=" pb-3">
        <p className=" font-bold text-xl">0.00%</p>
        <p className=" text-xs">Approx Profit</p>
       </div>
       <Flex gap="3" align="center">
        <Button variant="soft" highContrast onClick={() => navigate('/user/transactions')}>
         <ReaderIcon width="16" height="16" /> Transaction
        </Button>
        <Button variant="soft" highContrast onClick={() => navigate('/user/transactions')}>
         <FilePlusIcon width="16" height="16" /> History
        </Button>
       </Flex>
      </div>
     </div>

    </div>
   </div>
  </div>
 );
};

export default UserInvest;