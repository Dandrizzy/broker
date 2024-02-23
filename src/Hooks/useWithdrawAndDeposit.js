import { useNavigate } from 'react-router-dom';

export const useWithdraw = () => {
  const navigate = useNavigate();
  const withdraw = () => navigate('/user/withdraw');
  return { withdraw };
};
export const useDeposit = () => {
  const navigate = useNavigate();
  const deposit = () => navigate('/user/deposit');
  return { deposit };
};
