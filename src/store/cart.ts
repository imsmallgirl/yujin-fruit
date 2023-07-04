import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ItemProps } from '../interface/item';

export const addToCart = createAsyncThunk('cart/add', async (data: Object) => {
  const cartStorage = await localStorage.getItem('cart');
  console.log(data);
  if (!cartStorage) {
    throw new Error('No saved cart');
  }

  const cartItems: ItemProps[] = JSON.parse(cartStorage);
  const updatedCart = [...cartItems, data];
  localStorage.setItem('cart', JSON.stringify(updatedCart));
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {},
});

export default cartSlice.reducer;
