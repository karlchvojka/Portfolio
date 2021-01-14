import styled from 'styled-components';

import hexRepeat from 'images/hexrepeat2.jpg';

const StyledResume = styled.div`
  background-color: #fff;
  color: #000;

  h2 {
    color: #00abdf;
    font-size: 2rem;
    font-family: "Roboto Condensed", sans-serif;
    margin-bottom: 20px;
  }

  .controlWrap {
    background-color: #000;
    color: #fff;
    display: flex;
    padding: 10px;
    justify-content: space-between;

    ul {
      display: flex;
      list-style: none;
      margin: 0px;

      li {
        align-self: center;

        a:link, a:visited {
          background-color: #00abdf;
          border-radius: 5px;
          color: #fff;
          display: block;
          font-family: 'Montserrat',sans-serif;
          font-weight: 700;
          padding: 10px;
          text-decoration: none;
          }

        a:hover {
          text-decoration: underline;
          }
      }
    }
  }

  .headerWrap {
    background-image: url(${hexRepeat});
    border-bottom: 5px solid #00abdf;
    padding: 20px 0px;

    h1, h2 {
      border-bottom: 1px solid #00abdf;
      display: block;
      font-family: "Roboto Condensed",sans-serif;
      width: 250px;
    }

    h1 {
      color: #00abdf;
      font-size: 2.4rem;
      margin-bottom: 0;
      margin-top:0px;
    }

    h2 {
      color: #000;
      font-size: 1.3rem;
      margin: 5px 0;
      padding-bottom: 5px;
    }

    p {
      font-weight: 700;
      margin: 0;
      text-transform: uppercase;

      a:link, a:visited {
        color: #00abdf;
        text-decoration: none;
      }
    }
  }

  .profileWrap {
    border-bottom: 1px solid #00abdf;
    padding-bottom:10px;
  }
  .workExpWrap {
    h2 {
      margin-top: 20px;
    }
    .workPlace {
      margin-bottom: 30px;

      h3 {
        color: #00abdf;
        font-family: "Roboto Condensed",sans-serif;
        font-size: 1.5rem;
        margin: 0px 0px .5rem 0px;
      }

      p {
        margin: 0px 0px 1rem 0px;
        line-height: 1.2rem;
      }

      .workexpHeader {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        h4 {
          color: #000;
          font-family: "Roboto Condensed",sans-serif;
          font-size: 1.2rem;
          margin: 0px 0px .5rem 0px;

        }
        p {
          font-family: "Roboto Condensed",sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          text-align: right;
          text-transform: uppercase;
          margin-bottom: 0;
        }
      }

      .keywords {
        font-size: .8rem;
        font-style: italic;
        line-height: 1rem;
        margin-bottom: 1rem;

        span {
          font-weight: 700;
        }
      }
    }
  }
  .skillsWrap {
    border-top: 1px solid #00abdf;

    .listWrap {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      div {
        max-width: 50%;
        flex: 0 0 50%;

        h3 {
          color:#00abdf;
          font-size:19px;
          margin-top: 0px;
        }

        ul {
          list-style: none;
          padding-left: 0px;

          li {

            p {
              font-weight: 700;
              font-size: 16px;
              line-height:1.5;
              margin: 0px 0px 5px 0px;
            }
          }
        }
      }
    }
  }

  .educationWrap {
    h3 {
      font-family: "Roboto Condensed",sans-serif;
      font-size: 1.5rem;
      color: #00abdf;
      margin: 0px 0px .5rem 0px;

    }

    .edHeader {
      display:flex;
      justify-content: space-between;

      h4 {
        font-family: "Roboto Condensed",sans-serif;
        font-size: 1.2rem;
        color: #000;
        margin: 0px 0px .5rem 0px;
      }
      p {
        margin: 0px;
        font-family: "Roboto Condensed",sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        text-align: right;
        text-transform: uppercase;
      }
    }
  }

  }
  @media print {
    .controlWrap {
      display: none;
    }

    .skillsWrap{

      .listWrap {

        div {
          max-width: 25%;
          flex: 0 0 25%;
        }
      }
    }
  }
`;

export default StyledResume;
