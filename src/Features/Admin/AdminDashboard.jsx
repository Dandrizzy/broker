import EditDeposit from "./EditDeposit";


const AdminDashboard = () => {
 return (
  <div className=" min-h-screen p-4 text-slate-700 bg-neutral-100">
   <div className=" pb-6 text-slate-600 grid gap-2">
    <h1 className="text-sm">Welcome!</h1>
    <h1 className=" font-bold text-lg">Admin</h1>
    <h1 className=" text-xs">Here&apos;s a summary of your account. Have fun!
    </h1>
   </div>
   <EditDeposit />


  </div >
 );
};

export default AdminDashboard;