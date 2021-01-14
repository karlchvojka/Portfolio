import Header from 'global/Header';
// Styles
import StyledProject from './StyledProject.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Project({ name, img, desc, tech, git }) {
  return (
    <StyledProject>
      <div className="imgWrap">
        <img src={img} />
      </div>
      <Header type='h3' text={name} />
      {desc}
      <Header type='h4' text={'Technology Used:'} />
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
