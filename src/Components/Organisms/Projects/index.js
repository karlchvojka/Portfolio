// Component import
import Header from 'atoms/Header';
import Project from 'molecules/Project';

// Styles
import StyledProjects from './StyledProjects.js';

// Data
import projects from './projData.js';

function Projects() {
  return (
    <StyledProjects>
      <div className="container">
        <Header type="h2" text="Projects" />
        <div className="projWrap">
          {projects.map(proj => <Project
                desc={proj.desc}
                git={proj.git}
                img={proj.img}
                name={proj.name}
                tech={proj.tech}
              />
          )}
        </div>
      </div>
    </StyledProjects>
  )
}

export default Projects;
