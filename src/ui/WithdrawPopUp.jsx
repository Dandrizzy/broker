import { AlertDialog, Box, Button, Flex, Heading, Tabs, Text, TextField } from '@radix-ui/themes';
import { BiSolidBank } from 'react-icons/bi';
import { FaMoneyBill1, FaPaypal, FaWallet } from 'react-icons/fa6';
import { Form } from 'react-router-dom';
import { formatCurrency } from '../Hooks/helpers';
import { useUser } from '../Features/authentication/useUser';
import Spinner from './Spinner';
import { useGetApi } from '../Hooks/Get/useGetApi';
import { useGet } from '../Hooks/Get/useGet';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const WithdrawPopUp = ({ text = 'Withdraw Profit', variant = 'solid' }) => {
 const { user, isLoading } = useUser();
 const { register, handleSubmit, reset } = useForm();
 const { fetch: fn } = useGetApi({ key: 'balance' });
 const { fetch: userBalance, isFetching } = useGet({ key: ['balance'], fn });
 console.log(userBalance);
 if (isLoading || isFetching) return <Spinner />;
 const balance = userBalance?.find(bal => bal?.userId === user?.id)?.balance;

 const bank = data => {
  if (!data) return toast.error('error while requesting for withdrawal');
  if (data.amount > balance) return toast.error("Withdrawal amount should not be greater than account balance");
  console.log(data);
  reset();
  toast.success('Successfully placed withdrawal');
 };
 const paypal = data => {
  if (!data) return toast.error('error while requesting for withdrawal');
  if (data.amount > balance) return toast.error("Withdrawal amount should not be greater than account balance");
  console.log(data);
  reset();
  toast.success('Successfully placed withdrawal');
 };
 const wallet = data => {
  if (!data) return toast.error('error while requesting for withdrawal');
  if (data.amount > balance) return toast.error("Withdrawal amount should not be greater than account balance");
  console.log(data);
  reset();
  toast.success('Successfully placed withdrawal');
 };
 return (
  <>
   <AlertDialog.Root>
    <AlertDialog.Trigger>
     <Button color="blue" disabled={!user} variant={variant}>{text}</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content style={{ maxWidth: 450 }}>
     <AlertDialog.Title>Withdrawal Portal</AlertDialog.Title>
     <AlertDialog.Description size="2">
      <Heading size='2'>Account Balance: {formatCurrency(balance)}</Heading>
      <Tabs.Root defaultValue="bank">
       <Tabs.List>
        <Tabs.Trigger value="bank">Bank Account</Tabs.Trigger>
        <Tabs.Trigger value="paypal">PayPal</Tabs.Trigger>
        <Tabs.Trigger value="wallet">Wallet</Tabs.Trigger>
       </Tabs.List>

       <Box px="4" pt="3" pb="2">
        <Tabs.Content value="bank">
         <Form onSubmit={handleSubmit(bank)}>
          <Flex direction="column" gap="3">
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Amount
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <FaMoneyBill1 />
             </TextField.Slot>
             <TextField.Input required {...register('amount')} id='amount' type='number' placeholder="Enter amount" />
            </TextField.Root>
           </label>
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Account Number
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <BiSolidBank />
             </TextField.Slot>
             <TextField.Input {...register('bankAccount')} id='bankAccount' required type='text' placeholder="Enter bank account number" />
            </TextField.Root>
           </label>
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Bank Name
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <BiSolidBank />
             </TextField.Slot>
             <TextField.Input {...register('bankName')} id='bankName' required type='text' placeholder="Enter bank name" />
            </TextField.Root>
           </label>
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Routing Number
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <BiSolidBank />
             </TextField.Slot>
             <TextField.Input {...register('routingNumber')} id='amount' required type='text' placeholder="Enter bank routing number" />
            </TextField.Root>
           </label>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
           <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
             Cancel
            </Button>
           </AlertDialog.Cancel>
           <AlertDialog.Action>

            <Button type='submit' variant="solid" color="green">
             Withdraw
            </Button>
           </AlertDialog.Action>

          </Flex>
         </Form>

        </Tabs.Content>

        <Tabs.Content value="paypal">
         <Form onSubmit={handleSubmit(paypal)}>
          <Flex direction="column" gap="3">
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Amount
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <FaMoneyBill1 />
             </TextField.Slot>
             <TextField.Input {...register('amount')} id='amount' required type='number' placeholder="Enter amount" />
            </TextField.Root>
           </label>
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             PayPal email or username
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <FaPaypal />
             </TextField.Slot>
             <TextField.Input {...register('paypalId')} id='paypalId' required type='text' placeholder="Enter PayPal ID" />
            </TextField.Root>
           </label>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
           <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
             Cancel
            </Button>
           </AlertDialog.Cancel>
           <AlertDialog.Action>
            <Button type='submit' variant="solid" color="green" disabled={!user}>
             Withdraw
            </Button>
           </AlertDialog.Action>
          </Flex>
         </Form>
        </Tabs.Content>

        <Tabs.Content value="wallet">
         <Form onSubmit={handleSubmit(wallet)}>
          <Flex direction="column" gap="3">
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Amount
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <FaMoneyBill1 />
             </TextField.Slot>
             <TextField.Input {...register('amount')} id='amount' required type='number' placeholder="Enter amount" />
            </TextField.Root>
           </label>
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Wallet Name
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <FaWallet />
             </TextField.Slot>
             <TextField.Input {...register('walletName')} id='walletName' required type='next' placeholder="Enter wallet name" />
            </TextField.Root>
           </label>
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Wallet
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <FaWallet />
             </TextField.Slot>
             <TextField.Input {...register('walletId')} id='walletId' required type='text' placeholder="Enter wallet ID" />
            </TextField.Root>
           </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
           <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
             Cancel
            </Button>
           </AlertDialog.Cancel>
           <AlertDialog.Action>
            <Button disabled={!user} type='submit' variant="solid" color="green">
             Withdraw
            </Button>
           </AlertDialog.Action>
          </Flex>
         </Form>

        </Tabs.Content>
       </Box>
      </Tabs.Root>


     </AlertDialog.Description>
    </AlertDialog.Content>
   </AlertDialog.Root>

  </>
 );
};

export default WithdrawPopUp;