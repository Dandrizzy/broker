import { Button } from "@radix-ui/themes";
import { useCreateApi } from "../../Hooks/Create/useCreateApi";
import { useCreate } from "../../Hooks/Create/useCreate";
import Spinner from "../../ui/Spinner";
import { useUser } from "../authentication/useUser";
import SpinnerMini from "../../ui/SpinnerMini";

const CreateAccount = () => {
 const { user } = useUser();
 const { create: createFn } = useCreateApi({ key: 'balance' });
 const { create, isCreating } = useCreate({ key: ['balance'], fn: createFn });
 if (isCreating) return <Spinner />;
 const activate = () => {
  create({ balance: 50, userId: user.id });
 };
 return (
  <div className="py-4">

   <Button onClick={activate} disabled={isCreating}>
    {isCreating ? <SpinnerMini /> : 'Activate Account'}
   </Button>
  </div>
 );
};

export default CreateAccount;