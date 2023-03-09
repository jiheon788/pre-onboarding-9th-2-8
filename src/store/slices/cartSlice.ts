import { ICartItem } from '@/interface/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICartItem[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      const { idx, name, price, maximumPurchases, commandType } =
        action.payload;
      const INDEX = state.findIndex(
        (tempItem: ICartItem) => tempItem.idx === idx,
      );

      switch (commandType) {
        case 'INCREASE':
          if (INDEX === -1) {
            state.push({
              idx,
              name,
              price,
              maxQty: maximumPurchases,
              qty: 1,
            });
          } else {
            if (state[INDEX].qty >= state[INDEX].maxQty) return;
            state[INDEX].qty += 1;
          }
          break;
        case 'DECREASE':
          if (INDEX === -1) return;
          if (state[INDEX].qty <= 1) return;
          state[INDEX].qty -= 1;
          break;
        default:
          break;
      }
    },
    deleteItem(state, action) {
      return state.filter((item) => item.idx !== action.payload);
    },
  },
});

export const { setCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
