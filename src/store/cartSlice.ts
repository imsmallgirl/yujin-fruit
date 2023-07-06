import { createSlice } from '@reduxjs/toolkit';
import { CartItemProps } from '../interface/item';

const initialState = {
  cartList: JSON.parse(`${localStorage.getItem('cart')}`) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartList: (state) => {
      return {
        ...state,
        cartList: JSON.parse(`${localStorage.getItem('cart')}`),
      };
    },
    addToCart: (state, action) => {
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([action.payload]));
        state.cartList.push(action.payload);
      } else {
        const cartItem: CartItemProps[] = JSON.parse(`${localStorage.getItem('cart')}`) || [];
        if (cartItem.some((item: CartItemProps) => item.id === action.payload.id)) {
          const newItemIndex = cartItem.findIndex((item) => item.id === action.payload.id);
          cartItem[newItemIndex].count = action.payload.count;
          localStorage.setItem('cart', JSON.stringify(cartItem));
          return {
            ...state,
            cartList: cartItem,
          };
        }
        const updatedCart = [...cartItem, action.payload];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        state.cartList.push(action.payload);
      }
    },
    editToCount: (state, action) => {
      const { id, updatedCount } = action.payload;
      const cartList = JSON.parse(`${localStorage.getItem('cart')}`);
      const editIndex = cartList.findIndex((item: CartItemProps) => item.id === id);
      cartList[editIndex].count = updatedCount;
      localStorage.setItem('cart', JSON.stringify(cartList));
      return {
        ...state,
        cartList,
      };
    },
    // remove: (state, action) => {},
  },
});

export const { updateCartList, addToCart, editToCount } = cartSlice.actions;

export default cartSlice.reducer;
