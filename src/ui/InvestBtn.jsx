import { useUser } from '@/Features/authentication/useUser';
import { useCreate } from '@/Hooks/Create/useCreate';
import { useCreateApi } from '@/Hooks/Create/useCreateApi';
import { useGet } from '@/Hooks/Get/useGet';
import { useGetApi } from '@/Hooks/Get/useGetApi';
import { formatCurrency } from '@/Hooks/helpers';
import { Button, Dialog, Flex } from '@radix-ui/themes';
import Spinner from './Spinner';
import toast from 'react-hot-toast';
import { useEditApi } from '@/Hooks/Edit/useEditApi';
import { useEdit } from '@/Hooks/Edit/useEdit';

const InvestBtn = ({ plan }) => {
 const { user } = useUser();
 const id = user?.id;
 const { editFn } = useEditApi({ key: 'balance', column: 'userId' });
 const { edit, isEditing } = useEdit({ key: ['balance'], fn: editFn });
 const { create: createFn } = useCreateApi({ key: 'investments' });
 const { create, isCreating } = useCreate({ key: ['investments'], fn: createFn });
 const { fetch: fn } = useGetApi({ key: 'balance' });
 const { fetch: balances, isFetching } = useGet({ key: ['balance', user.id], fn });
 const bal = balances.find(b => b.userId === user.id)?.balance;
 if (isFetching || isCreating || isEditing) return <Spinner />;
 const { name, period, amount, interest } = plan;
 const balanced = bal - amount;
 const invest = () => {
  create({ userId: user?.id, interest, amount, period, name }, {
   onSuccess: () => {
    edit({ data: { balance: +balanced, userId: user?.id }, id });
    toast.success(name + ' Invested Successfully!');
   },
   onError: () => toast.error('An error occurred while processing your request')
  });
 };
 return (
  <div >
   <Dialog.Root >
    <Dialog.Trigger>
     <Button color="blue" size='3'>Invest Now</Button>
    </Dialog.Trigger>

    <Dialog.Content style={{ maxWidth: 450 }} className=' text-neutral-600'>
     <Dialog.Title>Confirm Investment</Dialog.Title>
     <Dialog.Description size="2" mb="4" >
      Are you sure? This application will no longer be accessible and any
      existing sessions will be expired.
     </Dialog.Description>
     <div className=" grid gap-3">
      <div className="">Your Balance: <span className=' font-bold'>{formatCurrency(bal)}</span></div>
      <div className="">Name: <span className=' font-bold'>{name}</span></div>
      <div className="">Amount: <span className=' font-bold'>{formatCurrency(amount)}</span></div>
      <div className="">Interest: <span className=' font-bold'>{interest + '%'}</span></div>
      <div className="">Period: <span className=' font-bold'>{period}</span></div>
      {bal < amount && <span className=" text-center bg-rose-300 text-rose-800 text-xs px-4 py-1 rounded-full">You don&apos;t have enough balance</span>}
     </div>




     <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
       <Button variant="soft" color="gray">
        Cancel
       </Button>
      </Dialog.Close>
      <Dialog.Close >
       <Button disabled={bal < amount} onClick={invest}>Confirm</Button>
      </Dialog.Close>
     </Flex>
    </Dialog.Content>
   </Dialog.Root>

  </div>
 );
};

export default InvestBtn;