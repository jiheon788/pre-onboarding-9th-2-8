import { Commands, NON_EXIST, Units } from '@/constants/system';
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
      const targetIndex = state.findIndex(
        (tempItem: ICartItem) => tempItem.idx === idx,
      );

      switch (commandType) {
        case Commands.INCREASE:
          if (targetIndex === NON_EXIST) {
            state.push({
              idx,
              name,
              price,
              maxQty: maximumPurchases,
              qty: Units.QTY_DEFAULT,
            });
          } else {
            if (state[targetIndex].qty >= state[targetIndex].maxQty) return;
            state[targetIndex].qty += Units.QTY_STEP;
          }
          break;
        case Commands.DECREASE:
          if (targetIndex === NON_EXIST) return;
          if (state[targetIndex].qty <= Units.QTY_DEFAULT) return;
          state[targetIndex].qty -= Units.QTY_STEP;
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
