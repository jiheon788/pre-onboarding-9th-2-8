import { ICartItem } from '@/interface/product';

export const getTotalPaymentAmount = (cart: ICartItem[]) =>
  cart.reduce((acc, item) => acc + item.price * item.qty, 0);
