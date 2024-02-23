import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { useDeleteUser } from "./AdminAuth/useDeleteUser";
import { useDeleteUserApi } from "./AdminAuth/useDeleteUserApi";
import { useDeleteApi } from "../../Hooks/Delete/useDeleteApi";
import { useDelete } from "../../Hooks/Delete/useDelete";
import SpinnerMini from "../../ui/SpinnerMini";

const AdminDropDown = ({ id }) => {
 const { DeleteUser } = useDeleteUserApi({ id });
 const { deleteUser, isDeleting } = useDeleteUser({ fn: DeleteUser });
 const { deleteFn } = useDeleteApi({ key: 'balance', id, column: 'userId' });
 const { deleteItem, isDeleting: deleting } = useDelete({ fn: deleteFn, key: ['balance'] });

 const navigate = useNavigate();

 if (isDeleting || deleting) return <SpinnerMini />;

 return (
  <div>
   <DropdownMenu.Root>
    <DropdownMenu.Trigger>
     <Button variant="soft" radius="full" style={{ padding: '8px' }}>
      <DotsHorizontalIcon height='16' width='16' />
     </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
     <DropdownMenu.Item shortcut="⌘ E" onClick={() => navigate(`/admin/user/${id}`)}>View Details</DropdownMenu.Item>
     <DropdownMenu.Item shortcut="⌘ D">Send an Email</DropdownMenu.Item>
     <DropdownMenu.Item shortcut="⌘ N">Suspend User</DropdownMenu.Item>
     <DropdownMenu.Separator />
     <DropdownMenu.Item color="red" shortcut="⌘ N" onClick={() => {
      deleteUser();
      deleteItem();
     }}>Delete User</DropdownMenu.Item>
    </DropdownMenu.Content>
   </DropdownMenu.Root>

  </div>
 );
};

export default AdminDropDown;