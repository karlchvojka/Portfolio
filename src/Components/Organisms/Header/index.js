import React from 'react';
import styled from 'styled-components';

// Asset imports
import hexaLogo from '../../../Assets/Images/Navbar/hexapixel_logo.jpg';

// Component imports
import Image from '../../Atoms/Image';
import NavBar from '../../Molecules/NavBar';

// Styles
const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

function Header() {
  return (
    <StyledHeader>
      <Image source={hexaLogo} alter="Logo" />
      <NavBar />
    </StyledHeader>
  )
}

export default Header;
