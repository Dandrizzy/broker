import { DashboardIcon, HamburgerMenuIcon, HomeIcon, PersonIcon, Share1Icon, SymbolIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const UserNav = () => {
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
       <div onClick={() => navigate('/user')} className=" flex gap-2 items-center p-2">
        <DashboardIcon height='22' width='22' />
        Dashboard
       </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/user/transactions')} className=" flex gap-2 items-center p-2">
        <Share1Icon height='22' width='22' />
        Transaction
       </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/user/investment')} className=" flex gap-2 items-center p-2">
        <SymbolIcon height='22' width='22' />
        Investment
       </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/user/plans')} className=" flex gap-2 items-center p-2">
        <SymbolIcon height='22' width='22' />
        Our plans
       </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/user/profile')} className=" flex gap-2 items-center p-2">
        <PersonIcon height='22' width='22' />
        My profile
       </div>
      </DropdownMenu.Item>
     </div>

     <div className=" p-3 text-black/50 font-bold">
      <div className=" uppercase w-60 text-xs pb-3 tracking-widest text-black/30 font-semibold ">additional</div>
      <DropdownMenu.Item>
       <div onClick={() => navigate('/')} className=" flex gap-2 items-center p-2">
        <HomeIcon height='22' width='22' />
        Go to home
       </div>
      </DropdownMenu.Item>
     </div>

    </DropdownMenu.Content>
   </DropdownMenu.Root>

  </div>
 );
};

export default UserNav;