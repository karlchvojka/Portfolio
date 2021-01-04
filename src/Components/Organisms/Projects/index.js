import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import weathPic from '../../../Assets/Images/Projects/weather_app.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Component import
import Header from '../../Atoms/Header';

// Styles
const StyledProjects = styled.section`
  border-top: 1px solid #00abdf;
`;

function Projects() {
  const [projects, setProjects] = useState([
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
      name: 'Tiny App',
      img: 'https://github.com/karlchvojka/lhl-tinyApp-project/raw/master/docs/tinyapp1.png',
      desc: <p>Tiny App is a URL shortner. This project was completed while at Lighthouse Labs.</p>,
      tech: 'JavaScript, NPM',
      git: 'https://github.com/karlchvojka/lhl-tinyApp-project/raw/master/docs/tinyapp1.png'
    },
    {
      name: 'Tweeter App',
      img: 'https://github.com/karlchvojka/tweeter/raw/master/docs/screenshot1.png',
      desc: <p>Tweeter is a Twitter clone, built to practice JavaScript and MongoDB</p>,
      tech: 'JavaScript, MongoDB',
      git: 'https://github.com/karlchvojka/tweeter/raw/master/docs/screenshot1.png'
    },
    {
      name: 'Chatty App',
      img: 'https://github.com/karlchvojka/chatty_app/raw/master/docs/home2.png',
      desc: <p>Chatty App is a simple chatroom utilizing websockets</p>,
      tech: 'JavaScript, WebSockets, ReactJS',
      git: 'https://github.com/karlchvojka/chatty_app/raw/master/docs/home2.png'
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
      <article className="cardWrap">
        <div className="imgWrap">
          <img src={proj.img} />
        </div>
        <h3>{proj.name}</h3>
        {proj.desc}
        <h4>Technology Used:</h4>
        <p>{proj.tech}</p>
        <p><a href={proj.git}><FontAwesomeIcon icon={faGithub}/> View project</a></p>
      </article>
    )
  })

  return (
    <StyledProjects>
      <div className="container">
        <Header type="h2" text="Projects" />
        {projMap}
      </div>
    </StyledProjects>
  )
}

export default Projects;
