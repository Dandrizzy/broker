import supabase from '../Services/supabase';

export const useUsersApi = () => {
  const fetch = async () => {
    const {
      data: { users },
      error,
    } = await supabase.auth.admin.listUsers();
    if (error) throw new Error(error.message);
    return { users };
  };
  return { fetch };
};
