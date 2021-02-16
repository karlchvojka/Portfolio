import styled from 'styled-components';

// Styles
const StyledFooter = styled.footer`
  background-color: #FFF;
  border-top: 1px solid #00abdf;
  padding:20px;

  p {
    font-size:10px;
    font-weight:700;
    margin: 0px;
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
