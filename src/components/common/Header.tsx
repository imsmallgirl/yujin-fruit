import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Container from './Container';
import Icons from '../../assets/icons/icon';

const HeaderWrap = styled.div`
  padding: 20px;
  .header_menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 28px;
      color: #023d28;
    }
    p {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      color: #2c2c2c;
      svg {
        font-size: 24px;
      }
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrap>
      <Container>
        <div className="header_menu">
          <h1>유진과일</h1>
          <p onClick={() => navigate('/cart')}>
            <Icons.HiOutlineShoppingCart />
            Cart
          </p>
        </div>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
