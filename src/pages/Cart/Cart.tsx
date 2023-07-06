import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import CartItem from '../../components/Cart/CartItem';
import { CartItemProps } from '../../interface/item';
import useFormattedPrice from '../../util/useFormattedPrice';
import { RootState } from '../../app/store';

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
  .cart-list {
    .cart-list-length {
      margin-bottom: 30px;
      span {
        font-size: 20px;
        margin-right: 5px;
        font-weight: bold;
        color: green;
      }
    }
    ul.cart-list-content {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .cart-list-content > li {
        padding: 10px 0;
        width: 100%;
      }
    }
  }
`;

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState<string>('');
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const formattedPrice = useFormattedPrice();

  useEffect(() => {
    const cartPrice = cartList
      .map((item: CartItemProps) => item.price * item.count)
      .reduce((prev: number, curr: number) => prev + curr, 0);

    const formattedTotalPrice = formattedPrice(cartPrice);
    setTotalPrice(formattedTotalPrice);
  }, [cartList]);

  return (
    <CartWrap>
      <CartHeader>
        <h2>장바구니</h2>
        <p>장바구니에 추가한 상품들을 확인하고 결제하세요.</p>
      </CartHeader>
      <CartContent>
        <div className="cart-list">
          <p className="cart-list-length">
            <span>{cartList.length}</span>개의 상품이 장바구니에 있습니다.
          </p>
          <ul className="cart-list-content">
            {cartList.map((list: CartItemProps) => (
              <li key={list.id}>
                <CartItem {...list} />
              </li>
            ))}
          </ul>
        </div>
        <div className="cart-total-price">
          <p>
            결제예정금액 <span>{totalPrice}</span>
          </p>
        </div>
      </CartContent>
    </CartWrap>
  );
};

export default Cart;
