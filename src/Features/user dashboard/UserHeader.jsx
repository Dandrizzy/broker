
import UserNav from "./UserNav";
import UserInfo from "./UserInfo";

const UserHeader = () => {
 return (
  <div className="flex justify-between items-center p-4 bg-blue-500 text-blue-50">
   <div className=" flex gap-2 items-center">
    <UserNav />
    <p>Company</p>
   </div>
   <UserInfo />
  </div>
 );
};

export default UserHeader;