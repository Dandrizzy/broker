import { Box, Button, Flex, Popover, TextField } from "@radix-ui/themes";
import { FaMessage } from "react-icons/fa6";
import { useCreateApi } from "../../Hooks/Create/useCreateApi";
import { useCreate } from "../../Hooks/Create/useCreate";
import { useGetChatApi } from "../../Hooks/chat/useGetChatApi";
import { useGet } from "../../Hooks/Get/useGet";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminMessages = ({ id }) => {
 const { register, handleSubmit, reset } = useForm();
 const { create } = useCreateApi({ key: 'chats' });
 const { create: createChat, isCreating } = useCreate({ key: ['chats'], fn: create });
 const { getChatHistory } = useGetChatApi({ id: id });
 const { fetch: fetchChat, isFetching } = useGet({ key: ['chats'], fn: getChatHistory });
 if (isFetching) return <Spinner />;
 const onSubmit = (data) => {
  createChat({ ...data, chatId: id, author: 'admin' });
  reset();
 };
 return (
  <div className=" max-h-40">
   <Popover.Root>
    <Popover.Trigger>
     <Button color="indigo" variant="solid">
      <FaMessage />
      Message
     </Button>
    </Popover.Trigger>
    <Popover.Content style={{ width: 360 }}>
     {fetchChat.map(chat => <div key={chat.id} className=" pb-3 flex flex-col gap-2 text-neutral-700">
      <span className={chat.author === 'admin' ? " bg-yellow-100  py-1 px-3 rounded-2xl" : " bg-blue-100  py-1 px-3 rounded-2xl"}>{chat.message}</span>

     </div>)}
     <Form onSubmit={handleSubmit(onSubmit)}>

      <Flex gap="3">
       {/* <Avatar
        size="2"
        src=""
        fallback="A"
        radius="full"
       /> */}
       <Box grow="1">
        <TextField.Root>
         <TextField.Slot>
          <FaMessage height="16" width="16" />
         </TextField.Slot>
         <TextField.Input {...register('message')} required id="message" placeholder="Send message…" />
        </TextField.Root>

        <Flex gap="3" mt="3" justify="between">
         <Flex align="center" gap="2" asChild>

         </Flex>


         <Popover.Close>
          <Button color="gray" variant="outline" disabled={isCreating}>Cancel</Button>

         </Popover.Close>
         <Button type="submit" disabled={isCreating}>{isCreating ? <SpinnerMini /> : 'Send'}</Button>
        </Flex>
       </Box>
      </Flex>

     </Form>
    </Popover.Content>
   </Popover.Root>


  </div>
 );
};

export default AdminMessages;