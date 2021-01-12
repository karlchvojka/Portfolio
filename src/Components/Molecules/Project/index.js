import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const StyledProject = styled.article`
  background-color: #fff;
  border: 1px solid #00abdf;
  border-radius: 5px;
  flex: 0 0 29%;
  height: auto;
  margin: 20px auto 0 auto;
  min-height:510px;
  max-width: 29%;
  padding: 10px;
  position: relative;

  h3, h4 {
    margin-top: 0px;
    margin-bottom: 20px;
  }

  h4 {
    font-size:16px;
  }

  p {
    margin: 0px 0px 20px 0px;
  }

  .imgWrap {
    overflow: hidden;
    max-height: 200px;
    margin-bottom: 20px;

    img {
      height: auto;
      min-height: 200px;
      width: 100%;
    }
  }

  .gitLink{
    bottom: 0;
    margin-bottom: 10px;
    position: absolute;

    a:link, a:visited {
      color: #007bff;
      text-decoration: none;
    }

    a:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }
`;

function Project({ name, img, desc, tech, git }) {
  return (
    <StyledProject>
      <div className="imgWrap">
        <img src={img} />
      </div>
      <h3>{name}</h3>
      {desc}
      <h4>Technology Used:</h4>
      <p>{tech}</p>
      <p className="gitLink">
        <a href={git}>
          <FontAwesomeIcon icon={faGithub}/>
          View project
        </a>
      </p>
    </StyledProject>
  )
};

export default Project;
