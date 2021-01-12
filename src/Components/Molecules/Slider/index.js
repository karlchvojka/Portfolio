import React from 'react';
import styled from 'styled-components';
import karlSlider from '../../../Assets/Images/karlSlider.jpg';

// STYLES
const StyledSlider = styled.section`
  background-image:url(${karlSlider});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  display:flex;
  height:300px;
  margin:0 auto;

  div {
    align-self: center;
    margin: 0 30px;
    width: 50%;

    h1 {
      color: #00abdf;
      display: block;
      font-size: 25px;
      text-shadow: 3px 3px 2px #000;
    }

    p {
      color:#fff;
      font-size: 14px;
    }
  }

  @media (min-width: 576px) {
    height:300px;

    div {
      width: 50%;

      h1 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }
  }
  @media (min-width: 768px) {
    height:350px;

    div {
      width: 50%;

      h1 {
        font-size: 25px;
      }

      p {
        font-size: 16px;
      }
    }
  }
  @media (min-width: 992px) {
    height:400px;

    div {
      width: 50%;

      h1 {
        font-size: 30px;
      }

      p {
        font-size: 18px;
      }
    }
  }
  @media (min-width: 1200px) {
    height:600px;

    div {
      width: 50%;

      h1 {
        font-size: 30px;
      }

      p {
        font-size: 18px;
      }
    }
  }
  @media (min-width: 1400px) {
    height:600px;

    div {
      width: 50%;

      h1 {
        font-size: 30px;
      }

      p {
        font-size: 18px;
      }
    }
  }
`;

function Slider() {
  return (
    <StyledSlider>
      <div>
        <h1>Heya! I'm Karl Chvojka.</h1>
        <p>I am a Full-stack developer with 10 years of industry experience building websites, advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines.</p>
        <p> I have an unending curiosity for new ideas and processes that helps expand my work. The advancement of Technology Continues to bewilder and inspire me.</p>
      </div>
    </StyledSlider>
  )
}
export default Slider;
