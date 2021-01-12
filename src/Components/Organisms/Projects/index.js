import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import weathPic from '../../../Assets/Images/Projects/weather_app.png';
import portPic from '../../../Assets/Images/Projects/portfolio.png';

// Component import
import Header from '../../Atoms/Header';
import Project from '../../Molecules/Project';

// Styles
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

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: 'Portfolio Rebuild',
      img: portPic,
      desc: <p>This is a Portfolio rebuild for the site your currently on. Site was updated, code reviewed and updated.</p>,
      tech: 'ReactJS, Styled-Components, React-Helmet',
      git: 'https://github.com/karlchvojka/weather-app'
    },
    {
      name: 'Weather App',
      img: weathPic,
      desc: <p>This project was used specifically for practice passing props, and interacting with a third party API</p>,
      tech: 'ReactJS',
      git: 'https://github.com/karlchvojka/weather-app'
    },
    {
      name: 'Squabble: Final',
      img: 'https://github.com/karlchvojka/lhl-final-project/raw/master/docs/budget.png',
      desc: <p>Squabble is a budget splitting app. It allows users to view, record, and evenly split budgets while tracking infrequent purchases.</p>,
      tech: 'ReactJS, Ruby on Rails, Bootstrap 4',
      git: 'https://github.com/karlchvojka/lhl-final-project'
    },
    {
      name: 'The Wall: Midterm',
      img: 'https://github.com/basktballer/TheWallMidterm/raw/master/docs/desktop-home.png',
      desc: <p>The Wall is a lot like Trello/Pinterest. It allows you to post and organize Resources, like links, todos, etc.</p>,
      tech: 'ReactJS, Ruby on Rails, Bootstrap 4',
      git: 'https://github.com/basktballer/TheWallMidterm/raw/master/docs/desktop-home.png'
    },
    {
      name: 'Tweeter App',
      img: 'https://github.com/karlchvojka/tweeter/raw/master/docs/screenshot1.png',
      desc: <p>Tweeter is a Twitter clone, built to practice JavaScript and MongoDB</p>,
      tech: 'JavaScript, MongoDB',
      git: 'https://github.com/karlchvojka/tweeter/raw/master/docs/screenshot1.png'
    },
    {
      name: 'Jungle App',
      img: 'https://github.com/karlchvojka/jungle-rails/raw/master/docs/jungle1.png',
      desc: <p>A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails.</p>,
      tech: 'Ruby on Rails, Stripe',
      git: 'https://github.com/karlchvojka/jungle-rails/raw/master/docs/jungle1.png'
    }
  ]);

  const projMap = projects.map((proj) => {
    return (
      <Project
        desc={proj.desc}
        git={proj.git}
        img={proj.img}
        name={proj.name}
        tech={proj.tech}
      />
    )
  })

  return (
    <StyledProjects>
      <div className="container">
        <Header type="h2" text="Projects" />
        <div className="projWrap">
          {projMap}
        </div>
      </div>
    </StyledProjects>
  )
}

export default Projects;
