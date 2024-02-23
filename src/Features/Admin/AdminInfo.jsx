import { DropdownMenu, } from "@radix-ui/themes";
import { FaUser } from "react-icons/fa6";
import { CardStackMinusIcon, CardStackPlusIcon, ExitIcon, PersonIcon, } from "@radix-ui/react-icons";

const AdminInfo = () => {
 return (
  <div className="">
   <DropdownMenu.Root>
    <DropdownMenu.Trigger>

     <div className=" bg-white text-blue-500 p-2 rounded-full">
      <FaUser />
     </div>

    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
     <DropdownMenu.Item >
      <div className=" flex gap-3 items-center" onClick={() => console.log('click')}>
       <CardStackPlusIcon width="16" height="16" /> Deposit funds
      </div>
     </DropdownMenu.Item>
     <DropdownMenu.Separator />
     <DropdownMenu.Item >
      <div className=" flex gap-3 items-center" onClick={() => console.log('click')}>
       <CardStackMinusIcon width="16" height="16" /> Withdraw funds
      </div>
     </DropdownMenu.Item>
     <DropdownMenu.Separator />
     <DropdownMenu.Item >
      <div className=" flex gap-3 items-center" onClick={() => console.log('click')}>
       <PersonIcon width="16" height="16" /> View profile
      </div>
     </DropdownMenu.Item>
     <DropdownMenu.Separator />
     <DropdownMenu.Item color="red">
      <div className=" flex gap-3 items-center" onClick={() => console.log('click')}>
       <ExitIcon width="16" height="16" /> Sign out
      </div>

     </DropdownMenu.Item>
    </DropdownMenu.Content>
   </DropdownMenu.Root>
  </div>
 );
};

export default AdminInfo;