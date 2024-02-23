import { Button, Flex, Heading } from "@radix-ui/themes";
import BackBtn from "../../ui/BackBtn";
import { formatCurrency } from "../../Hooks/helpers";
import { EnvelopeClosedIcon, TrashIcon } from "@radix-ui/react-icons";
import Spinner from "../../ui/Spinner";
import { useUsers } from "./AdminAuth/useUsers";
import { useParams } from "react-router-dom";
import { useGetById } from "../../Hooks/GetSpecific/useGetById";
import { useGet } from "../../Hooks/Get/useGet";
import EditBalance from "../../ui/EditBalance";

const AdminUser = () => {
 const { userId } = useParams();
 const { getSpecific } = useGetById({ key: 'balance', id: userId, column: 'userId' });
 const { fetch, isFetching } = useGet({ key: ['balance'], fn: getSpecific });

 const balance = fetch?.data?.balance;

 const { data, isLoading } = useUsers();

 const users = data?.users?.filter(user => user.id === userId);
 if (isLoading || isFetching) return <Spinner />;
 const { user_metadata: {
  address, country, dateOfBirth, displayName, fullName, gender, phoneNumber
 } } = users[0];
 return (
  <>
   <div className="p-4 bg-slate-100 text-slate-600">

    <div className=" flex justify-between items-center">
     <div className=" ">
      <Heading>Users / <span className=" text-blue-500">Tony Black</span></Heading>
      <p className=" text-xs pt-3 pb-1">User ID: {users[0]?.id} Email: Verified</p>
      <p className=" text-xs">Account Status: Active</p>
     </div>
     <div className="">
      <BackBtn />
     </div>
    </div>
   </div>

   <div className=" bg-white p-4 text-slate-600">
    <div className="">
     <p className=" font-semibold text-xl">Personal Information</p>
     <p className=" text-sm">Basic info, like name and address etc that used on platform.</p>
    </div>

    <p className=" tracking-widest uppercase font-semibold sm:text-sm text-xs py-3 text-slate-500">Basic Information</p>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">UserName</p>
     <p>{displayName}</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Email</p>
     <p>{users[0]?.email}</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Full Name</p>
     <p>{fullName}</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Display Name</p>
     <p>{displayName}</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Mobile Number</p>
     <p>{phoneNumber}</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Date of Birth</p>
     <p>{dateOfBirth}</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Gender</p>
     <p>{gender}</p>
    </div>

    <p className=" tracking-widest uppercase font-semibold sm:text-sm text-xs py-3 text-slate-500">Main Account</p>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Balance</p>
     <p>{formatCurrency(balance)}</p>
    </div>

    <p className=" tracking-widest uppercase font-semibold sm:text-sm text-xs py-3 text-slate-500">
     Residential Address
    </p>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Address Line</p>
     <p>{address}</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">City</p>
     <p>null</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">State / Province</p>
     <p>Null</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Zip / Postal Code</p>
     <p>Null</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Country</p>
     <p>{country}</p>
    </div>
    <p className=" tracking-widest uppercase font-semibold sm:text-sm text-xs py-3 text-slate-500">
     Additional Information
    </p>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Join Date</p>
     <p>{dateOfBirth}</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Reg Method</p>
     <p>By Email</p>
    </div>

    <div className="text-sm flex justify-between items-center py-2">
     <p className=" text-slate-400 ">Email Verified At</p>
     <p>{users?.email_confirmed_at}</p>
    </div>

   </div>

   <Flex gap="2" py='2' px='4'>
    <EditBalance id={userId} />

    <Button color="orange" variant="solid">
     <EnvelopeClosedIcon />
     Mail
    </Button>
    <Button color="crimson" variant="solid">
     <TrashIcon />
     Delete
    </Button>
    <BackBtn my="0" />
   </Flex>

  </>
 );
};

export default AdminUser;