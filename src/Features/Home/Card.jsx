import { Flex } from "@radix-ui/themes";
import { FaBtc, FaEthereum, FaLitecoinSign } from "react-icons/fa6";
import DepositPopUp from "../../ui/DepositPopUp";
import WithdrawPopUp from "../../ui/WithdrawPopUp";

const Card = () => {

 return (
  <div className="p-4 mx-auto place-items-center grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">

   <div className="bg-white min-w-[350px] max-w-md text-blue-950 shadow-md">
    <div className=" grid place-items-center gap-4  p-4">
     <img src="/deposit.png" alt="deposit" />
     <h1 className=" text-sm font-bold">Deposit fund and invest</h1>
     <p className=" text-xs">Just top up your balance & select your desired plan.</p>
     <Flex align="center" gap="3">
      <DepositPopUp variant="outline" />
     </Flex>
    </div>
   </div>

   <div className="bg-white min-w-[350px] max-w-md text-blue-950 shadow-md">
    <div className=" grid place-items-center gap-4  p-4">
     <img src="/payout.png" alt="deposit" />
     <h1 className=" text-sm font-bold">Payout your profits</h1>
     <p className=" text-xs">Withdraw your funds to your account once earn profit.</p>
     <Flex align="center" gap="3">
      <WithdrawPopUp variant="outline" />
     </Flex>
    </div>
   </div>

   <div className="bg-white min-w-[350px] max-w-md text-blue-950 shadow-md">
    <div className=" grid place-items-center gap-4  p-4">
     <h1 className=" text-sm font-bold">Payment processors we accept</h1>
     <p className=" text-xs">We accept cashapp, cryptocurrencies such as Bitcoin, Litecoin, Ethereum more.</p>

     <div className="flex gap-4 items-center">
      <FaEthereum />
      <FaBtc />
      <FaLitecoinSign />
     </div>

     <Flex align="center" gap="3">
      <DepositPopUp />
     </Flex>
    </div>
   </div>

  </div>
 );
};

export default Card;