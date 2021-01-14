import styled from 'styled-components';

// Asset imports
import hexaLogo from '../../../Assets/Images/Navbar/hexapixel_logo.jpg';

// Component imports
import HeaderLogo from '../../Atoms/HeaderLogo';
import NavBar from '../../Molecules/NavBar';

// Styles
const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #000;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  justify-content: space-between;
  padding: 10px;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderLogo source={hexaLogo} alter="Logo" />
      <NavBar />
    </StyledHeader>
  )
}

export default Header;
