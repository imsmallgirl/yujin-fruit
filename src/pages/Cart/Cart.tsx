import React from 'react';
import { styled } from 'styled-components';

const CartWrap = styled.div`
  padding: 50px 20px;
`;

const CartHeader = styled.div`
  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
  padding: 30px 0;
  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    color: #666766;
  }
`;

const CartContent = styled.div`
  display: flex;
`;

const Cart = () => {
  return (
    <CartWrap>
      <CartHeader>
        <h2>장바구니</h2>
        <p>장바구니에 추가한 상품들을 확인하고 결제하세요.</p>
      </CartHeader>
      <CartContent>
        <div className="cart-list">
          <p>1개가 장바구니에 있습니다.</p>
        </div>
        <div className="cart-total-price"></div>
      </CartContent>
    </CartWrap>
  );
};

export default Cart;
