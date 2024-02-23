import { AlertDialog, Button, Flex, TextField } from '@radix-ui/themes';

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
      <TextField.Root>
       <TextField.Slot>
        💰
       </TextField.Slot>
       <TextField.Input type='number' placeholder="Enter amount" />
      </TextField.Root>

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

export default WithdrawPopUp;