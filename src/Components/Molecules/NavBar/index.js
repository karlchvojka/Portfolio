import React from 'react';
import styled from 'styled-components';

// Components imports
import NavLink from '../../Atoms/NavLink';

// Styles
const StyledUl = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

function NavBar() {
  return (
    <StyledUl>
      <NavLink
        href='/'
        text="Home"
      />
      <NavLink
        href='/resume'
        text="Resume"
      />
    </StyledUl>
  )
}

export default NavBar;
