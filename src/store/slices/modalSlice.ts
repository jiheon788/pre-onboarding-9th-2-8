import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalData: {
    idx: 0,
    name: '',
    mainImage: '',
    description: '',
    spaceCategory: '',
    price: 0,
    maximumPurchases: 0,
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
        idx: 0,
        name: '',
        mainImage: '',
        description: '',
        spaceCategory: '',
        price: 0,
        maximumPurchases: 0,
        registrationDate: '',
      };
    },
  },
});

export const { onOpen, onClose } = modalSlice.actions;

export default modalSlice.reducer;
