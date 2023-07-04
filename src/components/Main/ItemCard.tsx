import React, { useCallback } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ItemProps } from '../../interface/item';
import useFormattedPrice from '../../util/useFormattedPrice';

const ItemCardWrap = styled.div`
  width: 100%;
  max-width: 350px;
  min-width: 200px;
`;

const ItemCardContainer = styled.div`
  img {
    width: 100%;
    height: 350px;
    border-radius: 10px;
    margin-bottom: 15px;
    cursor: pointer;
  }
`;

const ItemCardContent = styled.div`
  color: #2d2d2d;
  dl {
    dt {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    dd {
      &:nth-child(2) {
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 10px;
      }
      &:nth-child(3) {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 30px;
    border: 2px solid #147756;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    color: #147756;
  }
`;

const ItemCard = ({ id, name, price, description, image }: ItemProps) => {
  const formattedPrice = useFormattedPrice();
  const newPrice = formattedPrice(price);
  const navigate = useNavigate();

  const onClickDetail = useCallback(() => {
    navigate(`/detail/${id}`);
  }, [id, navigate]);

  return (
    <ItemCardWrap>
      <ItemCardContainer>
        <img src={image} alt={name} onClick={onClickDetail} />
        <ItemCardContent>
          <dl>
            <dt>{name}</dt>
            <dd>{description}</dd>
            <dd>{newPrice}</dd>
          </dl>
          <button>Add to Cart</button>
        </ItemCardContent>
      </ItemCardContainer>
    </ItemCardWrap>
  );
};

export default ItemCard;
