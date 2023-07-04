import React from 'react';
import { styled } from 'styled-components';
import { ItemProps } from '../../interface/item';

const CartItemWrap = styled.div``;

const CartItemInfo = styled.div``;

const CartItem = ({ id, name, price, description, image }: ItemProps) => {
  return (
    <CartItemWrap>
      <img src="" alt="" />
      <CartItemInfo>
        <dl>
          <dt></dt>
        </dl>
      </CartItemInfo>
    </CartItemWrap>
  );
};

export default CartItem;
