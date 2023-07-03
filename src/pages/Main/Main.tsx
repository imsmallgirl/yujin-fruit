import React from 'react';
import { styled } from 'styled-components';
import item from '../../data/item.json';
import ItemCard from '../../components/Main/ItemCard';

const MainWrap = styled.section`
  padding: 50px 20px;
  display: flex;
  justify-content: space-around;
  gap: 50px;
  flex-wrap: wrap;
  transition: all 0.3s;
`;

const Main = () => {
  return (
    <MainWrap>
      {item.products.map((data) => (
        <ItemCard key={data.id} {...data} />
      ))}
    </MainWrap>
  );
};

export default Main;
