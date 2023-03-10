import { ICartItem } from '@/interface/product';

export const getTotalPaymentAmount = (cart: ICartItem[]) =>
  cart.reduce((acc, item) => acc + item.price * item.qty, 0);

export const getTotalQty = (cart: ICartItem[]) =>
  cart.reduce((acc, item) => acc + item.qty, 0);
