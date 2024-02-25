import { AlertDialog, Box, Button, Flex, Tabs, Text } from '@radix-ui/themes';
import { useGet } from '../Hooks/Get/useGet';
import { useGetApi } from '../Hooks/Get/useGetApi';
import Spinner from './Spinner';

const DepositPopUp = ({ text = 'Make a Deposit', variant = 'solid', arrow = '' }) => {
 const { fetch: fn } = useGetApi({ key: 'wallet' });
 const { fetch: wallet, isFetching } = useGet({ key: ['wallet'], fn });
 if (isFetching) return <Spinner />;
 return (
  <div>
   <AlertDialog.Root>
    <AlertDialog.Trigger>
     <Button color="blue" variant={variant}>{text} {arrow}</Button>
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

        {/* <Tabs.Content value="trust">
         <Tabs.Root defaultValue="btc">
          <Tabs.List>
           <Tabs.Trigger value="btc">BTC</Tabs.Trigger>
           <Tabs.Trigger value="usdt">USDT</Tabs.Trigger>
           <Tabs.Trigger value="eth">ETH</Tabs.Trigger>
          </Tabs.List>

          <Box px="4" pt="3" pb="2">
           <Tabs.Content value="btc">
            <Text size="2">Make changes to your account.</Text>
           </Tabs.Content>

           <Tabs.Content value="usdt">
            <Text size="2">Access and update your documents.</Text>
           </Tabs.Content>

           <Tabs.Content value="eth">
            <Text size="2">Edit your profile or update contact information.</Text>
           </Tabs.Content>
          </Box>
         </Tabs.Root>

        </Tabs.Content> */}
       </Box>
      </Tabs.Root>

     </AlertDialog.Description>

     <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
       <Button variant="soft" color="gray">
        Cancel
       </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
       <Button variant="solid" color="green">
        Payed
       </Button>
      </AlertDialog.Action>
     </Flex>
    </AlertDialog.Content>
   </AlertDialog.Root>

  </div>
 );
};

export default DepositPopUp;