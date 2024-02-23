import { Button, Flex } from "@radix-ui/themes";
import { formatCurrency } from "../../Hooks/helpers";
import InvestBtn from "../../ui/InvestBtn";

const Cards = () => {
 return (
  <div className="p-4 mx-auto place-items-center grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
   <div className="bg-blue-950 min-w-[350px] max-w-md rounded-2xl text-blue-50 shadow-xl">

    <div className=" grid place-items-center gap-4  p-4">
     <h1 className=" uppercase font-bold">Professional Plan</h1>
     <p className=" font-semibold">141.25% ROI</p>
     <div className=" rounded-full h-32 w-32 border-8 border-blue-500 flex flex-col justify-center items-center mt-3">
      <p className=" font-semibold">2.75%</p>
      <p className=" text-sm text-blue-300">DAILY</p>
     </div>

    </div>
    <div className="p-4 grid gap-3 text-sm">
     <div className="flex justify-between items-center">
      <div>Investment Period</div>
      <div>15 days</div>
     </div>
     <div className="flex justify-between items-center">
      <div>Investment</div>
      <div>{formatCurrency(500)}-{formatCurrency(2500)}</div>
     </div>
     <div className="flex justify-between items-center">
      <div>Capital Return</div>
      <div>End of Term</div>
     </div>
    </div>
    <div className=" pt-4 pb-8 flex items-center justify-center">
     <Flex align="center" gap="3">
      <InvestBtn />
     </Flex>
    </div>

   </div>


   <div className="bg-white min-w-[350px] max-w-md rounded-2xl text-blue-950 shadow-xl">
    <div className=" grid place-items-center gap-4  p-4">
     <h1 className=" uppercase font-bold">Standard Plan</h1>
     <p className=" font-semibold">17.5% ROI</p>
     <div className=" rounded-full h-32 w-32 border-8 border-blue-500 flex flex-col justify-center items-center mt-3">
      <p className=" font-semibold">2.5%</p>
      <p className=" text-sm text-blue-300">DAILY</p>
     </div>

    </div>
    <div className="p-4 grid gap-3 text-sm">
     <div className="flex justify-between items-center">
      <div>Investment Period</div>
      <div>7 days</div>
     </div>
     <div className="flex justify-between items-center">
      <div>Investment</div>
      <div>{formatCurrency(100)}-{formatCurrency(500)}</div>
     </div>
     <div className="flex justify-between items-center">
      <div>Capital Return</div>
      <div>End of Term</div>
     </div>
    </div>
    <div className=" pt-4 pb-8 flex items-center justify-center">
     <Flex align="center" gap="3">
      <InvestBtn />
     </Flex>
    </div>

   </div>


   <div className="bg-white min-w-[350px] max-w-md rounded-2xl text-blue-950 shadow-xl">
    <div className=" grid place-items-center gap-4  p-4">
     <h1 className=" uppercase font-bold">Mercury Plan</h1>
     <p className=" font-semibold">0.45% ROI</p>
     <div className=" rounded-full h-32 w-32 border-8 border-blue-500 flex flex-col justify-center items-center mt-3">
      <p className=" font-semibold">1.5%</p>
      <p className=" text-sm text-blue-300">DAILY</p>
     </div>

    </div>
    <div className="p-4 grid gap-3 text-sm">
     <div className="flex justify-between items-center">
      <div>Investment Period</div>
      <div>1 day</div>
     </div>
     <div className="flex justify-between items-center">
      <div>Investment</div>
      <div>{formatCurrency(100)}-{formatCurrency(150000)}</div>
     </div>
     <div className="flex justify-between items-center">
      <div>Capital Return</div>
      <div>End of Term</div>
     </div>
    </div>
    <div className=" pt-4 pb-8 flex items-center justify-center">
     <Flex align="center" gap="3">
      <InvestBtn />
     </Flex>
    </div>

   </div>

   <div className="bg-white min-w-[350px] max-w-md rounded-2xl text-blue-950 shadow-xl">
    <div className=" grid place-items-center gap-4  p-4">
     <h1 className=" uppercase font-bold">Professional Plan</h1>
     <p className=" font-semibold">141.25% ROI</p>
     <div className=" rounded-full h-32 w-32 border-8 border-blue-500 flex flex-col justify-center items-center mt-3">
      <p className=" font-semibold">2.75%</p>
      <p className=" text-sm text-blue-300">DAILY</p>
     </div>

    </div>
    <div className="p-4 grid gap-3 text-sm">
     <div className="flex justify-between items-center">
      <div>Investment Period</div>
      <div>15 days</div>
     </div>
     <div className="flex justify-between items-center">
      <div>Investment</div>
      <div>{formatCurrency(500)}-{formatCurrency(2500)}</div>
     </div>
     <div className="flex justify-between items-center">
      <div>Capital Return</div>
      <div>End of Term</div>
     </div>
    </div>
    <div className=" pt-4 pb-8 flex items-center justify-center">
     <Flex align="center" gap="3">
      <Button variant="surface" size='3'>Invest Now</Button>
     </Flex>
    </div>

   </div>
  </div>
 );
};

export default Cards;