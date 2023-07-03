import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const HeaderWrap = styled.div`
  .header_menu {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 20px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <div className="header_menu">
          <h1>유진과일</h1>
          <button>Cart</button>
        </div>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
