import productApi from '@/api/product';
import { IProduct } from '@/interface/product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<IProduct[]>(
  'product/getProducts',
  productApi.getProducts,
);

const initialState: IProduct[] = [
  {
    idx: '',
    name: '',
    mainImage: '',
    description: '',
    spaceCategory: '',
    price: '',
    maximumPurchases: '',
    registrationDate: '',
  },
];
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (_, action) => action.payload);
  },
});

export default productSlice.reducer;
