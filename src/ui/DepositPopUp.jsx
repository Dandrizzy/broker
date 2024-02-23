import { AlertDialog, Button, Flex } from '@radix-ui/themes';

const DepositPopUp = ({ text = 'Make a Deposit', variant = 'solid', arrow = '' }) => {
 return (
  <div>
   <AlertDialog.Root>
    <AlertDialog.Trigger>
     <Button color="blue" variant={variant}>{text} {arrow}</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content style={{ maxWidth: 450 }}>
     <AlertDialog.Title>Deposit Portal</AlertDialog.Title>
     <AlertDialog.Description size="2">
      Wallet Address
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