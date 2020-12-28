import React from 'react';
import styled from 'styled-components';

// Styles
const StyledLink = styled.a`
  color: #000;
  margin-right: 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
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
