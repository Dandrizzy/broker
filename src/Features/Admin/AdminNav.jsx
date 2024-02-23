import { AvatarIcon, CheckCircledIcon, DashboardIcon, EnterIcon, ExitIcon, HamburgerMenuIcon, ReaderIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
 const navigate = useNavigate();
 return (
  <div className="">
   <DropdownMenu.Root>
    <DropdownMenu.Trigger>
     <Button variant="solid" radius="full">
      <HamburgerMenuIcon style={{ color: '#fff' }} />
     </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
     <div className=" p-3 text-black/50 font-bold">
      <div className=" uppercase w-60 text-xs pb-3 tracking-widest text-black/30 font-semibold ">menu</div>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/admin')} className=" flex gap-2 items-center p-2">
        <DashboardIcon height='22' width='22' />
        Dashboard
       </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/admin/deposit')} className=" flex gap-2 items-center p-2">
        <EnterIcon height='22' width='22' />
        Deposit
       </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/admin/withdraw')} className=" flex gap-2 items-center p-2">
        <ExitIcon height='22' width='22' />
        Withdraw
       </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/admin/transactions')} className=" flex gap-2 items-center p-2">
        <ReaderIcon height='22' width='22' />
        Transaction
       </div>
      </DropdownMenu.Item>
      `
     </div>

     <div className=" p-3 text-black/50 font-bold">
      <div className=" uppercase w-60 text-xs pb-3 tracking-widest text-black/30 font-semibold ">user management</div>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/admin/manage')} className=" flex gap-2 items-center p-2">
        <AvatarIcon height='22' width='22' />
        Manage User
       </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/admin/verify')} className=" flex gap-2 items-center p-2">
        <CheckCircledIcon height='22' width='22' />
        Verification Center
       </div>
      </DropdownMenu.Item>
     </div>

     {/* <div className=" p-3 text-black/50 font-bold">
      <div className=" uppercase w-60 text-xs pb-3 tracking-widest text-black/30 font-semibold ">additional</div>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/')} className=" flex gap-2 items-center p-2">
        <HomeIcon height='22' width='22' />
        Go to home
       </div>
      </DropdownMenu.Item>
     </div> */}

    </DropdownMenu.Content>
   </DropdownMenu.Root>

  </div>
 );
};

export default AdminNav;