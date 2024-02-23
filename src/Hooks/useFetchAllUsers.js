import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../Services/apiUsers';

export const useFetchAllUsers = () => {
  const { data, isLoading } = useQuery({
    queryFn: getUsers,
    queryKey: ['allUsers'],
  });

  return { data, isLoading };
};
