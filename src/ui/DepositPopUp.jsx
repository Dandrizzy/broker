import { AlertDialog, Box, Button, Flex, Tabs, Text, TextField } from '@radix-ui/themes';
import { useGet } from '../Hooks/Get/useGet';
import { useGetApi } from '../Hooks/Get/useGetApi';
import Spinner from './Spinner';
import { useUser } from '@/Features/authentication/useUser';
import { Form } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const DepositPopUp = ({ text = 'Make a Deposit', variant = 'solid', arrow = '' }) => {
 const { register, handleSubmit, reset } = useForm();
 const { fetch: fn } = useGetApi({ key: 'wallet' });
 const { fetch: wallet, isFetching } = useGet({ key: ['wallet'], fn });
 const { user } = useUser();
 if (isFetching) return <Spinner />;
 const submit = data => {
  console.log(data);
  reset();
 };
 return (
  <div>
   <AlertDialog.Root>
    <AlertDialog.Trigger>
     <Button color="blue" disabled={!user} variant={variant}>{text} {arrow}</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content style={{ maxWidth: 450 }}>
     <AlertDialog.Title>Deposit Portal</AlertDialog.Title>
     <AlertDialog.Description size="2">
      <Tabs.Root defaultValue="wallet">
       <Tabs.List>
        <Tabs.Trigger value="wallet">Wallet</Tabs.Trigger>
        <Tabs.Trigger value="paypal">PayPal</Tabs.Trigger>
        {/* <Tabs.Trigger value="trust">Trust</Tabs.Trigger> */}
       </Tabs.List>

       <Box px="4" pt="3" pb="2">
        <Tabs.Content value="wallet">
         <Tabs.Root defaultValue="btc">
          <Tabs.List>
           <Tabs.Trigger value="btc">BTC</Tabs.Trigger>
           <Tabs.Trigger value="usdt">USDT</Tabs.Trigger>
           <Tabs.Trigger value="eth">ETH</Tabs.Trigger>
          </Tabs.List>

          {wallet.map(item => <Box px="4" pt="3" pb="2" key={item.id}>
           <Tabs.Content value="btc">
            <Text size="2">{item.btc}</Text>
           </Tabs.Content>

           <Tabs.Content value="usdt">
            <Text size="2">{item.usdt}</Text>
           </Tabs.Content>

           <Tabs.Content value="eth">
            <Text size="2">{item.eth}</Text>
           </Tabs.Content>
          </Box>)}
         </Tabs.Root>

        </Tabs.Content>

        <Tabs.Content value="paypal">
         <div className="">
          <p>Account Details</p>
          <Text size="2">{wallet[0].paypal}</Text>
         </div>

        </Tabs.Content>

       </Box>
      </Tabs.Root>

     </AlertDialog.Description>
     <Form onSubmit={handleSubmit(submit)}>
      <Flex direction="column" gap="3">
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Amount
        </Text>
        <TextField.Input
         {...register('amount')}
         required
         type='number'
         defaultValue="2000"
         placeholder="Enter deposit amount"
        />
       </label>

      </Flex>

      <Flex gap="3" mt="4" justify="end">
       <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
         Cancel
        </Button>
       </AlertDialog.Cancel>
       <AlertDialog.Action>
        <Button variant="solid" type='submit' color="green">
         Payed
        </Button>
       </AlertDialog.Action>
      </Flex>
     </Form>
    </AlertDialog.Content>
   </AlertDialog.Root>

  </div>
 );
};

export default DepositPopUp;