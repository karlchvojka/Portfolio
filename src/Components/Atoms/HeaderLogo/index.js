import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 50px;
  width: auto;
`;

function HeaderLogo({ source, alter }) {
  return (
    <StyledLogo src={source} alt={alter} />
  )
}

export default HeaderLogo;
