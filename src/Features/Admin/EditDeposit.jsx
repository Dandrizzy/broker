import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { useEditApi } from '../../Hooks/Edit/useEditApi';
import { useEdit } from '../../Hooks/Edit/useEdit';
import SpinnerMini from '../../ui/SpinnerMini';
import { useGetApi } from '../../Hooks/Get/useGetApi';
import { useGet } from '../../Hooks/Get/useGet';
import Spinner from '../../ui/Spinner';

const EditDeposit = () => {
 const { register, handleSubmit } = useForm();
 const { fetch: fn } = useGetApi({ key: 'wallet' });
 const { fetch, isFetching } = useGet({ key: ['wallet'], fn });
 const { editFn } = useEditApi({ key: 'wallet' });
 const { edit, isEditing } = useEdit({ key: ['wallet'], fn: editFn });
 if (isFetching) return <Spinner />;
 const onSubmit = data => {
  edit({ data, id: 1 });
 };
 return (
  <div>
   <Dialog.Root>
    <Dialog.Trigger>
     <Button>
      <Pencil2Icon width="16" height="16" /> Edit Deposit Accounts
     </Button>
    </Dialog.Trigger>

    <Dialog.Content style={{ maxWidth: 450 }}>
     <Dialog.Title>Edit Deposit Account</Dialog.Title>
     <Dialog.Description size="2" mb="4">
      Make changes to your deposit accounts.
     </Dialog.Description>
     <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="3">
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         BTC
        </Text>
        <TextField.Input required
         defaultValue={fetch[0].btc}
         {...register('btc')} id='btc'
         placeholder="Enter your full name"
        />
       </label>
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         USDT
        </Text>
        <TextField.Input required
         defaultValue={fetch[0].usdt}
         {...register('usdt')} id='usdt'
         placeholder="Enter your full name"
        />
       </label>
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         ETH
        </Text>
        <TextField.Input required
         defaultValue={fetch[0].eth}
         {...register('eth')} id='eth'
         placeholder="Enter your full name"
        />
       </label>
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         PayPal
        </Text>
        <TextField.Input type='email' required
         defaultValue={fetch[0].paypal}
         {...register('paypal')} id='paypal'
         placeholder="Enter your email"
        />
       </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
       <Dialog.Close>
        <Button variant="soft" color="gray">
         Cancel
        </Button>
       </Dialog.Close>

       <Button type='submit' disabled={isEditing}>{isEditing ? <SpinnerMini /> : 'Save'}</Button>
      </Flex>
     </Form>
    </Dialog.Content>
   </Dialog.Root>


  </div>
 );
};

export default EditDeposit;