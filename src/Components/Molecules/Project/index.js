import React from 'react';
import styled from 'styled-components';

// Styled
import StyledProject from './StyledProject.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


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
