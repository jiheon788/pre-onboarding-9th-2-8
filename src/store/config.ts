import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import { AppDispatchType, RootStateType } from '@/interface/main';

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();

export default store;
