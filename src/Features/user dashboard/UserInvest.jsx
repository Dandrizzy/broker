import { InfoCircledIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import EditBalance from "@/ui/EditBalance";
import { useGetApi } from "@/Hooks/Get/useGetApi";
import { useGet } from "@/Hooks/Get/useGet";
import Spinner from "@/ui/Spinner";
import { formatCurrency } from "@/Hooks/helpers";
import { useUser } from "../authentication/useUser";

const UserInvest = () => {
 const { fetch } = useGetApi({ key: 'investments' });
 const { fetch: investments, isFetching } = useGet({ key: ['investments'], fn: fetch });
 const { user } = useUser();
 const navigate = useNavigate();
 if (isFetching) return <Spinner />;
 const invests = investments.filter(invest => invest.userId === user?.id);
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
      <Button variant="outline" highContrast onClick={() => navigate('/user')}>
       Deposit Funds &rarr;
      </Button>
      <Button variant="solid" onClick={() => navigate('/user/plans')}>
       Invest & Earn &rarr;
      </Button>
     </Flex>
    </div>
    <div className="grid sm:grid-cols-2 gap-8">
     {invests.map(invest => <div key={invest.id} className=" mt-4">
      <div className=" shadow-md grid gap-3 p-3 pb-6 bg-white border-l-4 border-blue-500 rounded-md text-slate-500">
       <div className="flex items-center gap-2 ">
        <p className=" text-lg">{invest.name}</p>
        <InfoCircledIcon />
       </div>
       <div className="">
        <p className=" font-bold text-xl">{formatCurrency(invest.amount + (invest.amount * (+invest.interest / 100)))}</p>
        <p className=" text-xs">Total Profit</p>
       </div>
       <PlusIcon width='22' height='22' />
       <div className=" pb-3">
        <p className=" font-bold text-xl">{invest.interest}%</p>
        <p className=" text-xs">Locked</p>
       </div>
       <Flex gap="3" align="center">
        <EditBalance id={user.id} text="Transfer Funds &rarr;" />
       </Flex>
      </div>
     </div>)}
    </div>
   </div>
  </div>
 );
};

export default UserInvest;