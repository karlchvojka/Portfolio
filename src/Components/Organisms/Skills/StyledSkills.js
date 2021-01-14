import styled from 'styled-components';

const StyledSkills = styled.section`
  border-top: 1px solid #00abdf;

  .listWrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0px;

    li {
      max-width: 50%;
      flex: 0 0 50%;

      h3 {
        color:#00abdf;
        font-size:19px;
        margin-top: 0px;
      }

      li {

        p {
          font-weight: 700;
          font-size: 16px;
          line-height:1.5;
          margin-bottom: 5px;
        }
      }
    }
  }

  @media (min-width: 576px) {
    padding-bottom:20px;

    .listWrap {

      li {
        flex: 0 0 50%;
        max-width: 50%;

        h3 {
          font-size:19px;
        }

        li {

          p {
            font-size: 16px;
            line-height:1.5;
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding-bottom:20px;

    .listWrap {

      li {
        flex: 0 0 25%;
        max-width: 25%;

        h3 {
          font-size:19px;
        }

        li {

          p {
            font-size: 16px;
            line-height:1.5;
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    padding-bottom:20px;

    .listWrap {

      li {
        flex: 0 0 25%;
        max-width: 25%;

        h3 {
          font-size:19px;
        }

        li {

          p {
            font-size: 16px;
            line-height:1.5;
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    padding-bottom:20px;

    .listWrap {

      li {
        flex: 0 0 25%;
        max-width: 25%;

        h3 {
          font-size:22px;
        }

        li {

          p {
            font-size: 18px;
            line-height:1.5;
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media (min-width: 1400px) {
    padding-bottom:20px;

    .listWrap {

    li {
      max-width: 25%;
      flex: 0 0 25%;

      h3 {
        font-size:22px;
      }

      li {
        p {
          font-size: 18px;
          line-height:1.5;
          margin-bottom: 5px;
        }
      }
    }
  }
`;
export default StyledSkills;
