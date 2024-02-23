import { useSelector } from 'react-redux';

export const useTeam = () => {
  const { team, isLoading, error } = useSelector((store) => store.team);

  return { team, isLoading, error };
};
