import productApi from '@/api/product';
import { IProduct, IProductReducer } from '@/interface/product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<IProduct[]>(
  'product/getProducts',
  productApi.getProducts,
);

const initialState: IProductReducer = {
  isLoading: true,
  error: null,
  products: [
    {
      idx: 0,
      name: '',
      mainImage: '',
      description: '',
      spaceCategory: '',
      price: 0,
      maximumPurchases: 0,
      registrationDate: '',
    },
  ],
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      state.error = '상품 목록을 가져올 수 없습니다.';
    });
  },
});

export default productSlice.reducer;
