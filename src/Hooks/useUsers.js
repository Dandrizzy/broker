import { useQuery } from '@tanstack/react-query';
import { useUsersApi } from './useUsersApi';

export const useUsers = () => {
  const { fetch } = useUsersApi();
  const { data, isLoading } = useQuery({
    queryKey: ['allUsers'],
    queryFn: fetch,
  });
  return { data, isLoading };
};
