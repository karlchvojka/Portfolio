import styled from 'styled-components';

import karlSlider from 'images/karlSlider.jpg';

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

export default StyledSlider;
