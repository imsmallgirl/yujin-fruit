import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { CartItemProps } from '../../interface/item';
import Icons from '../../assets/icons/icon';
import useFormattedPrice from '../../util/useFormattedPrice';
import { editToCount } from '../../store/cartSlice';

const CartItemWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  img {
    flex: 1;
    width: 10%;
  }
`;

const CartItemInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  dl {
    flex: 1;
    display: flex;
    gap: 20px;
    align-items: center;
    dt {
      font-size: 20px;
    }
    dd {
      display: flex;
      gap: 10px;
      align-items: center;
      border-radius: 5px;
      border: 1px solid #b4b4b4;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 10px;
        background-color: transparent;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  ul.total-price-ul {
    flex: 1;
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
  }
`;

const CartItem = ({ id, name, price, count, image }: CartItemProps) => {
  const [currentTotalPrice, setCurrentTotalPrice] = useState<string>('');
  const dispatch = useDispatch();
  const formattedPrice = useFormattedPrice();

  const handleCount = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { id: currentButtonId } = e.currentTarget;
      if (currentButtonId === 'cart-minus') {
        if (count > 0) {
          const updatedCount = count - 1;
          console.log(updatedCount);
          dispatch(editToCount({ id, updatedCount }));
        }
      } else if (currentButtonId === 'cart-plus') {
        const updatedCount = count + 1;
        dispatch(editToCount({ id, updatedCount }));
      }
    },
    [count, dispatch, id]
  );

  useEffect(() => {
    const totalPrice = count * price;
    const formattedTotalPrice = formattedPrice(totalPrice);
    setCurrentTotalPrice(formattedTotalPrice);
  }, [count]);

  return (
    <CartItemWrap>
      <img src={image} alt={name} />
      <CartItemInfo>
        <dl>
          <dt>{name}</dt>
          <dd>
            <button id="cart-minus" onClick={handleCount}>
              <Icons.HiOutlineMinusSm />
            </button>
            <span>{count}</span>
            <button id="cart-plus" onClick={handleCount}>
              <Icons.HiPlusSm />
            </button>
          </dd>
        </dl>
        <ul className="total-price-ul">
          <li>{currentTotalPrice}</li>
          <li>
            <Icons.HiX />
          </li>
        </ul>
      </CartItemInfo>
    </CartItemWrap>
  );
};

export default CartItem;
