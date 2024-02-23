import { Heading } from "@radix-ui/themes";
import { formatCurrency } from "../../Hooks/helpers";
import InvestBtn from "../../ui/InvestBtn";

const plans = [
 {
  id: 1, name: 'Mercury', period: '1', interest: 0.45, amount: 100, type: 'Fixed'
 },
 {
  id: 2, name: 'Venus', period: '3', interest: 5.75, amount: 250, type: 'Fixed'
 },
 {
  id: 3, name: 'Standard Plan', period: '7', interest: 2.5, amount: 100, type: 'Fixed'
 },
 {
  id: 4, name: 'Premium Plan', period: '1', interest: 1.5, amount: 1500, type: 'Fixed'
 },
 {
  id: 5, name: 'Professional Plan', period: '15', interest: 2.75, amount: 500, type: 'Fixed'
 },
 {
  id: 6, name: 'Silver Plan', period: '2', interest: 7.5, amount: 1000, type: 'Fixed'
 },
 {
  id: 7, name: 'Diamond Plan', period: '7', interest: 5, amount: 1500, type: 'Fixed'
 },
 {
  id: 8, name: 'Jupiter', period: '1', interest: 9.5, amount: 5000, type: 'Fixed'
 },
 {
  id: 9, name: 'Platinum Plan', period: '1', interest: 1.5, amount: 250, type: 'Flexible'
 },
];

const UserPlan = () => {
 return (
  <div className=" bg-blue-50 p-4 min-h-screen">
   <div className=" text-slate-600">
    <Heading m="4" size="5" align='center'>Typographic principles</Heading>
    <p className=" text-center">Here is our several investment plans. You can invest daily, weekly or monthly and get higher returns in your investment.</p>

    <p className=" text-xs text-center py-4">Choose your favorite plan and start earning now.</p>

    <div className=" grid gap-4 sm:grid-cols-2 px-4 lg:grid-cols-3">

     {plans.map((plan) => <div key={plan.id} className="border shadow-md max-w-sm">
      <div className=" border-b bg-white py-3">
       <p className="text-center font-semibold text-lg">{plan.name}</p>

       <div className="flex justify-around items-center py-4">
        <div className=" text-center">
         <p className=" font-semibold text-xl">{plan.interest}%</p>
         <p className=" text-xs">Hourly Interest</p>
        </div>
        <div className="text-center">
         <p className=" font-semibold text-xl">{plan.period}</p>
         <p className="  text-xs">Term Days</p>
        </div>
       </div>

      </div>
      <div className=" p-4 grid gap-2 text-sm text-neutral-500 bg-white">
       <div className=" flex justify-between items-center">
        <p>Deposit Amount</p>
        {/* <p>-</p> */}
        <p className=" font-semibold">{formatCurrency(plan.amount)}</p>
       </div>
       <div className=" flex justify-between items-center">
        <p>Deposit Type</p>
        {/* <p>-</p> */}
        <p className="">{plan.type}</p>
       </div>
       <div className=" flex justify-between items-center">
        <p>Capital Return</p>
        {/* <p>-</p> */}
        <p className="">End of Term</p>
       </div>
      </div>
      <div onClick={() => console.log(plan.id)} className=" bg-white pt-3 pb-6 flex justify-center">
       <InvestBtn plan={plan.amount} id={plan.id} />

      </div>
     </div>)}
    </div>



   </div>
  </div>
 );
};

export default UserPlan;