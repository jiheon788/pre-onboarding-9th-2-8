import { ICartItem } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICartItem[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { idx, name, price, maximumPurchases } = action.payload;
      const copiedState = JSON.parse(JSON.stringify(state));
      const INDEX = copiedState.findIndex(
        (tempItem: ICartItem) => tempItem.idx === idx,
      );

      if (INDEX === -1) {
        copiedState.push({
          idx,
          name,
          price,
          maxQty: maximumPurchases,
          qty: 1,
        });
      } else {
        if (copiedState[INDEX].qty === copiedState[INDEX].maxQty) return;
        copiedState[INDEX].qty += 1;
      }

      return copiedState;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
