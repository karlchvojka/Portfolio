import styled from 'styled-components';

const StyledProjects = styled.section`
  border-top: 1px solid #00abdf;
  margin-bottom:30px;

  .projWrap {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-right: 5%;
    margin-left: 5%;

    article {
      flex: 0 0 90%;
      max-width: 90%;
    }
  }

  @media (min-width: 576px) {
    .projWrap {
      margin-right: 5%;
      margin-left: 5%;

      article {
        flex: 0 0 90%;
        max-width: 90%;
      }
    }
  }

  @media (min-width: 768px) {
    .projWrap {
      margin-right: 0%;
      margin-left: 0%;

      article {
        flex: 0 0 46%;
        max-width: 46%;
      }
    }
  }

  @media (min-width: 992px) {
    .projWrap {
      margin-right: 0;
      margin-left: 0;

      article {
        flex: 0 0 30%;
        max-width: 30%;
      }
    }
  }

  @media (min-width: 1200px) {
    .projWrap {
      margin-right: 0;
      margin-left: 0;

      article {
        flex: 0 0 30%;
        max-width: 30%;
      }
    }
  }

  @media (min-width: 1400px) {
    .projWrap {
      margin-right: 0;
      margin-left: 0;

      article {
        flex: 0 0 30%;
        max-width: 30%;
      }
    }
  }
`;

export default StyledProjects;
