import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalData: {
    idx: '',
    name: '',
    mainImage: '',
    description: '',
    spaceCategory: '',
    price: '',
    maximumPurchases: '',
    registrationDate: '',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpen: (state, action) => {
      state.isOpen = true;
      state.modalData = action.payload;
    },
    onClose: (state) => {
      state.isOpen = false;
      state.modalData = {
        idx: '',
        name: '',
        mainImage: '',
        description: '',
        spaceCategory: '',
        price: '',
        maximumPurchases: '',
        registrationDate: '',
      };
    },
  },
});

export const { onOpen, onClose } = modalSlice.actions;

export default modalSlice.reducer;
