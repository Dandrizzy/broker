import { Avatar, Badge, Heading, Table } from "@radix-ui/themes";
import AdminDropDown from "./AdminDropDown";
import { formatCurrency } from "../../Hooks/helpers";
import { useUsers } from "./AdminAuth/useUsers";
import Spinner from "../../ui/Spinner";
import { useGetApi } from "../../Hooks/Get/useGetApi";
import { useGet } from "../../Hooks/Get/useGet";
const AdminUsers = () => {
 const { data, isLoading } = useUsers();
 const { fetch: fn } = useGetApi({ key: 'balance' });
 const { fetch, isFetching } = useGet({ key: ['balance'], fn });

 if (isLoading || isFetching) return <Spinner />;

 const balance = balId => {
  const bal = fetch.filter(item => item.userId === balId);
  return bal[0].balance;
 };

 return (
  <div className=" p-4">
   <Heading>Users List</Heading>

   <p className=" text-xs">Total 5974 User account.</p>

   <div className="hidden lg:block py-8">
    <Table.Root variant="surface">
     <Table.Header>
      <Table.Row>
       <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Balance</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Verified</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Last Login</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
      </Table.Row>
     </Table.Header>

     {data?.users?.map(user => {
      const { avatar, fullName, } = user.user_metadata;
      const { confirmed_at, email } = user;
      const y = new Date(confirmed_at);
      const year = y.getFullYear();
      const month = y.getMonth();
      const day = y.getDate();
      const x = user?.user_metadata?.fullName?.split('')[0].toUpperCase();
      return <Table.Body key={user.id}>
       <Table.Row>
        <Table.RowHeaderCell>
         <div className="flex gap-3 items-center capitalize">
          <Avatar
           size="2"
           src={avatar}
           radius="full"
           fallback={x}
          />
          <p className="">{fullName}</p>
         </div>
        </Table.RowHeaderCell>
        <Table.Cell>
         <p className=" font-semibold">{formatCurrency(balance(user.id))}</p>
        </Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>
         <div className=" flex gap-2 items-center">
          <div className=" flex gap-2 items-center">
           {confirmed_at !== undefined ? <Badge color="green">Verified</Badge> : <Badge color="red">Not Verified</Badge>}
          </div>
         </div>
        </Table.Cell>
        <Table.Cell>{`${year}-${month}-${day}`}</Table.Cell>
        <Table.Cell>
         <Badge color="green">Active</Badge>
        </Table.Cell>
        <Table.Cell>
         <AdminDropDown />
        </Table.Cell>
       </Table.Row>
      </Table.Body>;
     })}
    </Table.Root>


   </div>

   <div className="hidden py-8 sm:block lg:hidden">
    <Table.Root variant="surface">
     <Table.Header>
      <Table.Row>
       <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Balance</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Verified</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
      </Table.Row>
     </Table.Header>

     {data?.users?.map(user => {
      const { avatar, fullName, } = user.user_metadata;
      const { confirmed_at } = user;
      const x = user?.user_metadata?.fullName?.split('')[0].toUpperCase();
      return <Table.Body key={user.id}>
       <Table.Row>
        <Table.RowHeaderCell><Avatar
         size="3"
         src={avatar}
         radius="full"
         fallback={x}
        /> {fullName}</Table.RowHeaderCell>
        <Table.Cell>
         <p className=" font-semibold">{formatCurrency(balance(user.id))}</p>
        </Table.Cell>
        <Table.Cell>
         <div className=" flex gap-2 items-center">
          {confirmed_at !== undefined ? <Badge color="green">Verified</Badge> : <Badge color="red">Not Verified</Badge>}
         </div>
        </Table.Cell>
        <Table.Cell>
         <Badge color="green">Active</Badge>
        </Table.Cell>
        <Table.Cell>
         <AdminDropDown />
        </Table.Cell>
       </Table.Row>
      </Table.Body>;
     })}
    </Table.Root>
   </div>

   <div className="sm:hidden py-8">
    <Table.Root variant="surface">
     <Table.Header>
      <Table.Row>
       <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
      </Table.Row>
     </Table.Header>
     {data?.users?.map(user => {
      const { avatar, fullName } = user.user_metadata;
      const x = user?.user_metadata?.fullName?.split('')[0].toUpperCase();

      return <Table.Body key={user.id}>
       <Table.Row>
        <Table.RowHeaderCell>
         <Avatar
          size="3"
          src={avatar}
          radius="full"
          fallback={x}
         /> {fullName}
        </Table.RowHeaderCell>
        <Table.Cell>
         <AdminDropDown id={user.id} />
        </Table.Cell>
       </Table.Row>


      </Table.Body>;
     })}
    </Table.Root>
   </div>

  </div>
 );
};

export default AdminUsers;