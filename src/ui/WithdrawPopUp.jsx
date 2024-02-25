import { AlertDialog, Box, Button, Flex, Tabs, Text, TextField } from '@radix-ui/themes';
import { BiSolidBank } from 'react-icons/bi';
import { FaMoneyBill1, FaPaypal, FaWallet } from 'react-icons/fa6';
import { Form } from 'react-router-dom';

const WithdrawPopUp = ({ text = 'Withdraw Profit', variant = 'solid' }) => {
 return (
  <div>
   <AlertDialog.Root>
    <AlertDialog.Trigger>
     <Button color="blue" variant={variant}>{text}</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content style={{ maxWidth: 450 }}>
     <AlertDialog.Title>Withdrawal Portal</AlertDialog.Title>
     <AlertDialog.Description size="2">

      <Tabs.Root defaultValue="bank">
       <Tabs.List>
        <Tabs.Trigger value="bank">Bank Account</Tabs.Trigger>
        <Tabs.Trigger value="paypal">PayPal</Tabs.Trigger>
        <Tabs.Trigger value="wallet">Wallet</Tabs.Trigger>
       </Tabs.List>

       <Box px="4" pt="3" pb="2">
        <Tabs.Content value="bank">
         <Form>
          <Flex direction="column" gap="3">
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Amount
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <FaMoneyBill1 />
             </TextField.Slot>
             <TextField.Input type='number' placeholder="Enter amount" />
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
             <TextField.Input type='text' placeholder="Enter bank account number" />
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
             <TextField.Input type='text' placeholder="Enter bank name" />
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
             <TextField.Input type='text' placeholder="Enter bank routing number" />
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
            <Button variant="solid" color="green">
             Withdraw
            </Button>
           </AlertDialog.Action>
          </Flex>
         </Form>

        </Tabs.Content>

        <Tabs.Content value="paypal">
         <Form>
          <Flex direction="column" gap="3">
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Amount
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <FaMoneyBill1 />
             </TextField.Slot>
             <TextField.Input type='number' placeholder="Enter amount" />
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
             <TextField.Input type='text' placeholder="Enter PayPal ID" />
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
            <Button variant="solid" color="green">
             Withdraw
            </Button>
           </AlertDialog.Action>
          </Flex>
         </Form>
        </Tabs.Content>

        <Tabs.Content value="wallet">
         <Form>
          <Flex direction="column" gap="3">
           <label>
            <Text as="div" size="2" mb="1" weight="bold">
             Amount
            </Text>
            <TextField.Root>
             <TextField.Slot>
              <FaMoneyBill1 />
             </TextField.Slot>
             <TextField.Input type='number' placeholder="Enter amount" />
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
             <TextField.Input type='next' placeholder="Enter wallet name" />
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
             <TextField.Input type='text' placeholder="Enter wallet ID" />
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
            <Button variant="solid" color="green">
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

  </div>
 );
};

export default WithdrawPopUp;