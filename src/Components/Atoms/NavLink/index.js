import React from 'react';
import styled from 'styled-components';

// Styles
const StyledLink = styled.a`
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-right: 10px;
  text-decoration: none;
  text-transform: uppercase;
`;

function NavLink({ href, target, text }) {
  return (
    <StyledLink
      href={href}
      target={target}
      >
        {text}
    </StyledLink>
  )
}

export default NavLink;
