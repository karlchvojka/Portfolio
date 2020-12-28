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
        target="_blank"
        text="Home"
      />
      <NavLink
        href='#about'
        target="_blank"
        text="About"
      />
      <NavLink
        href='/resume'
        target="_blank"
        text="Resume"
      />
    </StyledUl>
  )
}

export default NavBar;
