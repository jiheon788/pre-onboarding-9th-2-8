import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartItem {
  itemNo: number;
  price: number;
  quantity: number;
  maxQuantity: number;
}

export interface ICart {
  cart: ICartItem[];
}

const initialState: ICart = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<ICartItem[]>) {
      state.cart = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice;
