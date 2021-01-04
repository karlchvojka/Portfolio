import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const StyledProject = styled.article`
  margin: 20px auto 0 auto;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #00abdf;
  border-radius: 5px;
  min-height:510px;
  height: auto;
  flex: 0 0 29%;
  max-width: 29%;

  .imgWrap {
    overflow: hidden;
    max-height: 200px;
    margin-bottom: 20px;

    img {
      width: 100%;
      min-height: 200px;
      height: auto;
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
      <p><a href={git}><FontAwesomeIcon icon={faGithub}/> View project</a></p>
    </StyledProject>
  )
};

export default Project;
