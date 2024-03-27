import { CaretRightIcon, ExclamationTriangleIcon, LockClosedIcon, PersonIcon, SewingPinIcon } from "@radix-ui/react-icons";
import { FaMale } from 'react-icons/fa';
import { Box, Button, Callout, DropdownMenu, Flex, Grid, Heading, Tabs, TextField } from "@radix-ui/themes";
import { FaBuildingColumns, FaPaypal, FaWallet } from "react-icons/fa6";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "../authentication/useUpdateUser";
import toast from "react-hot-toast";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUser } from "../authentication/useUser";
const UserProfile = () => {
 const { updateUser, isUpdating } = useUpdateUser();
 const {
  user: {
   user_metadata: { fullName, gender, displayName, country, address },
  },
 } = useUser();
 const { register, handleSubmit, reset } = useForm();
 const onSubmit = (data) => {
  updateUser(
   data,
   {
    onSuccess: () => {
     reset();
     toast.success('Successful');
    },
    onError: () => {
     reset();
     toast.error('Encountered an error');
    },
   }
  );
 };
 return (
  <div className=" p-4 bg-slate-50 min-h-screen max-w-2xl">
   <div className="grid gap-3">
    <Heading>Profile Info</Heading>
    <p className=" text-xs">You have full control to manage your own account setting.
    </p>
   </div>
   <div className=" py-6">
    <Tabs.Root defaultValue="profile">
     <Tabs.List>
      <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
      <Tabs.Trigger value="accounts">Accounts</Tabs.Trigger>
      <Tabs.Trigger value="edit">Edit Account</Tabs.Trigger>
     </Tabs.List>

     <Box px="4" pt="3" pb="2">
      <Tabs.Content value="profile">
       <div className="grid gap-3">
        <Heading size="4">Personal Information</Heading>
        <p className=" text-xs">Basic info, like your name and address, that you use on our platform.
        </p>
       </div>
       <div className=" mt-6 border rounded bg-white">
        <div className=" p-4 flex justify-between items-center border-b">
         <div className="grid gap-2">
          <p className=" text-gray-400">Full Name</p>
          <p className=" text-gray-500 text-sm">Daniel Jones</p>
         </div>
         <div className="">
          <CaretRightIcon />
         </div>
        </div>
        <div className=" p-4 flex justify-between items-center border-b">
         <div className="grid gap-2">
          <p className=" text-gray-400">Email</p>
          <p className=" text-gray-500 text-sm">lukaandrea556@gmail.com</p>
         </div>
         <div className="">
          <LockClosedIcon />
         </div>
        </div>
        <div className=" p-4 flex justify-between items-center border-b">
         <div className="grid gap-2">
          <p className=" text-gray-400">Phone Number</p>
          <p className=" text-gray-500 text-sm">+1 234 345 7789</p>
         </div>
         <div className="">
          <LockClosedIcon />
         </div>
        </div>
        <div className=" p-4 flex justify-between items-center border-b">
         <div className="grid gap-2">
          <p className=" text-gray-400">Gender</p>
          <p className=" text-gray-500 text-sm">Male</p>
         </div>
         <div className="">
          <CaretRightIcon />
         </div>
        </div>
        <div className=" p-4 flex justify-between items-center border-b">
         <div className="grid gap-2">
          <p className=" text-gray-400">Date of Birth</p>
          <p className=" text-gray-500 text-sm">Daniel Jones</p>
         </div>
         <div className="">
          <LockClosedIcon />
         </div>
        </div>
        <div className=" p-4 flex justify-between items-center border-b">
         <div className="grid gap-2">
          <p className=" text-gray-400">Country</p>
          <p className=" text-gray-500 text-sm">United states</p>
         </div>
         <div className="">
          <LockClosedIcon />
         </div>
        </div>
        <div className=" p-4 flex justify-between items-center border-b">
         <div className="grid gap-2">
          <p className=" text-gray-400">Address</p>
          <p className=" text-gray-500 text-sm">Not yet added</p>
         </div>
         <div className="">
          <CaretRightIcon />
         </div>
        </div>
        <div className=" p-4 flex justify-between items-center">
         <div className="grid gap-2">
          <p className=" text-gray-400">Display Name</p>
          <p className=" text-gray-500 text-sm">Daniel Jones</p>
         </div>
         <div className="">
          <CaretRightIcon />
         </div>
        </div>
       </div>
      </Tabs.Content>

      <Tabs.Content value="accounts">
       <Callout.Root color="yellow" role="alert">
        <Callout.Icon>
         <ExclamationTriangleIcon />
        </Callout.Icon>
        <Callout.Text weight='bold'>
         You have not added any withdraw account yet in your account.
        </Callout.Text>
        <Callout.Text>
         Please add the personal or GOLDEN TRADE FX accounts that you&apos;d like to withdraw funds.
        </Callout.Text>
        <div className="pt-5">
         <Grid columns="2" gap="3" display="inline-grid">
          <DropdownMenu.Root>
           <DropdownMenu.Trigger>
            <Button>
             Add Account
            </Button>
           </DropdownMenu.Trigger>
           <DropdownMenu.Content variant="solid">
            <DropdownMenu.Item >
             <div className=" flex gap-4 text-slate-500 hover:text-white my-2">
              <FaPaypal /> PayPal Account
             </div>

            </DropdownMenu.Item>
            <DropdownMenu.Item >
             <div className=" flex gap-4 text-slate-500 hover:text-white">
              <FaWallet /> Crypto Wallet
             </div>

            </DropdownMenu.Item>
            <DropdownMenu.Item>
             <div className=" flex gap-4 text-slate-500 hover:text-white">
              <FaBuildingColumns /> Bank Account
             </div>
            </DropdownMenu.Item>
           </DropdownMenu.Content>
          </DropdownMenu.Root>
         </Grid>


        </div>

       </Callout.Root>

      </Tabs.Content>

      <Tabs.Content value="edit">
       <Form onSubmit={handleSubmit(onSubmit)}>

        <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>

         <TextField.Root>
          <TextField.Slot>
           <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input required placeholder="Full Name" size="3" defaultValue={fullName}
           {...register('fullName')} id="fullName"
          />
         </TextField.Root>



         <TextField.Root>
          <TextField.Slot>
           <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input required placeholder="Display Name" size="3"
           {...register('displayName')} defaultValue={displayName} id="displayName"
          />
         </TextField.Root>

         <TextField.Root>
          <TextField.Slot>
           <SewingPinIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input required placeholder="Country" size="3"
           {...register('country')} defaultValue={country} id="country"
          />
         </TextField.Root>

         {/* <TextField.Root>
          <TextField.Slot>
           <SewingPinIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input required placeholder="State" size="3"
           defaultValue={state}
           {...register('state')} id="state"
          />
         </TextField.Root> */}

         <TextField.Root>
          <TextField.Slot>
           <SewingPinIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input required placeholder="Address" size="3"
           {...register('address')} id="address" defaultValue={address}
          />
         </TextField.Root>

         <TextField.Root>

          <select required
           className=" py-1.5 px-4 rounded-lg bg-transparent border border-gray-300 " defaultValue={gender || 'male'} {...register('gender')} id="gender" >
           <option value="male">Male</option>
           <option value="female">Female</option>
          </select>

          <TextField.Slot>
           <FaMale height="16" width="16" />
          </TextField.Slot>
         </TextField.Root>

        </Flex>

        <Flex gap="3" mt='5'>
         <Button disabled={isUpdating} color="blue" variant="soft" type="submit">
          {isUpdating ? <SpinnerMini /> : 'Edit Account'}
         </Button>
         {/* <Button color="cyan" variant="soft">
         Edit profile
        </Button> */}
         <Button disabled={isUpdating} color="yellow" variant="soft" type="reset">
          Cancel
         </Button>
         {/* <Button color="crimson" variant="soft">
         Edit profile
        </Button> */}
        </Flex>

       </Form>

      </Tabs.Content>
     </Box>
    </Tabs.Root>

   </div>

  </div>
 );
};

export default UserProfile;