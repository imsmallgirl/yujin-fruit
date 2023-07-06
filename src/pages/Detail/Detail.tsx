import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import item from '../../data/item.json';
import useFormattedPrice from '../../util/useFormattedPrice';
import Icons from '../../assets/icons/icon';
import { addToCart } from '../../store/cartSlice';

const DetailWrap = styled.section`
  padding: 50px 20px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`;

const DetailImage = styled.div`
  width: 100%;
  max-width: 600px;
  img {
    width: 100%;
  }
`;

const DetailContentWrap = styled.div`
  .detail-content {
    margin-bottom: 50px;
    dl {
      dt {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      dd {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
    p {
      font-size: 30px;
      color: green;
      font-weight: bold;
    }
  }
`;

const DetailSelectedItem = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eee;
    border-radius: 30px;
    padding: 10px 20px;

    li {
      button {
        border: none;
        background-color: transparent;
        width: 40px;
        height: 40px;
        cursor: pointer;
        svg {
          color: green;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

const DetailFooter = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 40px;
  p {
    font-size: 20px;
  }
  button {
    border: 1px solid green;
    background-color: transparent;
    padding: 10px 20px;

    cursor: pointer;
  }
`;

const Detail = () => {
  const dispatch = useDispatch<any>();
  const { id: detailId } = useParams<{ id: string }>();
  const index = parseInt(String(detailId), 10);
  const { name, price, description, image } = item.products[index];

  /** 현재 선택한 수량 */
  const [count, setCount] = useState<number>(1);

  const formattedPrice = useFormattedPrice();
  const newPrice = formattedPrice(price);

  /** 갯수 올리는 함수 */
  const handleCount = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = e.currentTarget;
      if (id === 'minus') {
        if (count !== 1) {
          setCount((prev) => prev - 1);
        }
        return;
      }
      setCount((prev) => prev + 1);
    },
    [count]
  );
  /** 카트에 상품 추가하는 함수 */
  const handleAddCart = useCallback(() => {
    const addCartItem = {
      id: index,
      name,
      image,
      price,
      count,
    };
    dispatch(addToCart(addCartItem));
  }, [count]);

  return (
    <DetailWrap>
      <DetailImage>
        <img src={image} alt={name} />
      </DetailImage>
      <DetailContentWrap>
        <div className="detail-content">
          <dl>
            <dt>{name}</dt>
            <dd>{description}</dd>
          </dl>
          <p>{newPrice}</p>
        </div>
        <DetailSelectedItem>
          <ul>
            <li>
              <button id="minus" onClick={handleCount}>
                <Icons.HiMinusCircle />
              </button>
            </li>
            <li>{count}</li>
            <li>
              <button id="plus" onClick={handleCount}>
                <Icons.HiPlusCircle />
              </button>
            </li>
          </ul>
        </DetailSelectedItem>
        <DetailFooter>
          <p>총 금액 : {formattedPrice(price * count)}</p>
          <button onClick={handleAddCart}>Add to Cart</button>
        </DetailFooter>
      </DetailContentWrap>
    </DetailWrap>
  );
};

export default Detail;
