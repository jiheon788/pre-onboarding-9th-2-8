import { ICart, ICartItem } from '@/interface/main';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
