import React from 'react';
import styled from 'styled-components';
import karlSlider from '../../../Assets/Images/karlSlider.jpg';

// STYLES
const StyledSlider = styled.section`
  background-image:url(${karlSlider});
  background-position:center;
  background-repeat:no-repeat;
  height:600px;
  margin:0 auto;
  display:flex;

  div {
    align-self: center;
    width: 40%;
    margin: 0 30px;


    h1 {
      text-shadow: 3px 3px 2px #000;
      color: #00abdf;
      display: block;
    }
    p {
      font-size: 18px;
      color:#fff;
    }
  }
`;

function Slider() {
  return (
    <StyledSlider>
      <div>
        <h1>Heya! I'm Karl Chvojka.</h1>
        <p>I am a Full-stack developer with 10 years of industry experience building websites, advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines.</p>
        <p> I have an unending curiosity for new ideas and processes that helps expand my work. The advancement of Technology Continues to bewilder and inspires me.</p>
      </div>
    </StyledSlider>
  )
}
export default Slider;
