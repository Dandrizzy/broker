import { useSelector } from 'react-redux';

export const useOrder = () => {
  const { cart, menus, category, ticket, faq } = useSelector(
    (store) => store.order
  );

  return { cart, menus, category, ticket, faq };
};
