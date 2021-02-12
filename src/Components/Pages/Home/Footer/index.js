import styled from 'styled-components';

// Styles
const StyledFooter = styled.footer`
  background-color: #FFF;
  border-top: 1px solid #00abdf;
  padding:20px;

  p {
    font-size:15px;
    font-weight:700;
    margin: 2px;
    text-transform:uppercase;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Copyright &copy;2021 Karl Chvojka</p>
    </StyledFooter>
  )
}

export default Footer;
