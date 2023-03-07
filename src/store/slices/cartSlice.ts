import { IProduct } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
