import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import hexRepeat from '../../../Assets/Images/hexrepeat2.jpg';

// Styles
const StyledResume = styled.div`
  background-color:#fff;
  color: #000;
  h2 {
    font-size: 2rem;
    color: #00abdf;
    font-family: "Roboto Condensed",sans-serif;
    margin-bottom: 20px;
  }
  .controlWrap {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #000;
    color: #fff;

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
      width: 250px;
      font-family: "Roboto Condensed",sans-serif;
    }

    h1 {
      color: #00abdf;
      margin-bottom: 0;
      margin-top:0px;
      font-size: 2.4rem;
    }

    h2 {
      margin: 5px 0;
      font-size: 1.3rem;
      color: #000;
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

  .workExpWrap {
    .workPlace {
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
          text-align: right;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 1.2rem;
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

  @media print {
    .controlWrap {
      display: none;
    }
  }
`;

function Resume() {
  const [workExp, setWorkExp] = useState([
    {
      placementName: "Lighthouse Labs",
      position: "Front-End Developer",
      dates: "Aug 2019 - Mar 2020",
      keywords: "Customer serivce, Student Mentorship, Project Management, Marketing, Front End Development (HTML5, CSS3, CSS Grid, Flexbox), JavaScript, jQuery, Bootstrap, React, Ruby on Rails, JSX, Active Record",
      desc: "Working with the Marketing team to plan and execute the building of Static ReactJs sites for marketing and promotional purposes. Working with the internal staff to maintain and upgrade internal systems in React, Ruby on Rails, etc."
    },
    {
      placementName: "Freelance Work",
      position: "Full Stack Developer",
      dates: "Aug 2010 - Present",
      keywords: "Business Management, Client Interaction, Client relations, Customer serivce, Project Management, Self Employment, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, JavaScript, jQuery, Bootstrap, Photography, User Guide Creation.",
      desc: "Managing and completing websites for a variety of clients. Projects are handled from initial contact with the client to the final launch including Concepts, Wireframing, Design, Development, Migration, Content Management, Testing, and Launching. Supplying clients with Hosting and Host maintenance, including Server updates, and Hosting provider interaction when needed."
    },
    {
      placementName: "FreeCodeCamp",
      position: "Global Community Manager",
      dates: "Aug 2017 - Apr 2020",
      keywords: "Social Media Management, Facebook Group moderation, Community Organizing, Public speaking",
      desc: "FreeCodeCamp is an online learning resource for Fullstack Development learning. FreeCodeCamp has broken learning Web Development into digestible chunks to allow people to learn how to code in their spare time. As a Global Community Manager, my biggest input into the FCC ecosystem is managing the moderators for the Facebook Groups and other social media."
    },
    {
      placementName: "MediaFace, Toronto",
      position: "Fullstack Web Developer",
      dates: "June 2017 - Oct 2017",
      keywords: "Client Research, Client relations, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO Implementation.",
      desc: "Building Responsive Worpdress Themes with Bootstrap. Tasks included building full websites, and Wordpress Plugins. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing. "
    },
    {
      placementName: "Digital Shift Marketing, Toronto",
      position: "Front End Developer",
      dates: "Feb 2016 - Oct 2016",
      keywords: "Development Team Management Training, Process writing, Client Research, Client relations, Customer service Project Management, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO Implementation.",
      desc: "Building Responsive Worpdress Themes with Bootstrap. Tasks included building full websites to building landing pages for SEO A/B Testing. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing. Management duties included heading projects, as well as writing processes and procedures to be used by the development department and managing the IT needs of the company."
    },
    {
      placementName: "VentureWeb, Toronto",
      position: "Web Consultant, Front End Developer",
      dates: "Sept 2013  –  Dec 2014",
      keywords: "Development Team Management Training, Process writing, Client Research, Client relations, Customer service Project Management, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO Implementation.",
      desc: "Working as a web consultant through VentureWeb for Accenture, as a site manager for Accenture's Careers Websites. My tasks included building full websites to building landing pages for SEO A/B Testing. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing."
    },
    {
      placementName: "Northlands, Edmonton",
      position: "Sr. Front End Developer",
      dates: "Sept 2012  –  Apr 2013",
      keywords: "Front End Development (HTML5, CSS3), JavaScript, jQuery, PHP, Wordpress, Drupal, Joomla!, User guide creation, Content Management, Web Platform Maintenance, Server Maintenance, Enterprise Level Company",
      desc: "Primary responsibility for position was the updating and maintenance of the 13 web properties for Northlands. Acted as the primary contact for the hosting companies, and IT service providers that Northlands works with. This included managing, updating and maintaining the web servers, as well as working with the hosting companies to coordinate hardware maintenance and downtime. Additionally, responsible for internal system creation for managing new content to be added to the web properties."
    }
  ]);

  const workMap = workExp.map((work) => {
    return (
      <article className="workPlace">
        <h3>{work.placementName}</h3>
        <section className="workexpHeader">
s          <p>{work.dates}</p>
        </section>
        <p className="keywords"><span>Noteable Keywords: </span>
          {work.keywords}
        </p>
        <p>{work.desc}</p>
      </article>
    )
  });
  return (
    <StyledResume>
      <section className="controlWrap">
        <div>
          <p>To save as pdf:&nbsp;&nbsp; 1. Right click, click 'Print'&nbsp;&nbsp; 2. Change Destination to 'Save as PDF'&nbsp;&nbsp; 3. Press Save</p>
        </div>
        <ul>
          <li><a href="/" target="_blank">Go Back</a></li>
        </ul>
      </section>
      <section className="headerWrap">
        <h1>Karl Chvojka</h1>
        <h2>Front End Web Developer</h2>
        <p>Portfolio: <a href="http://karlchvojka.com">karlchvojka.com</a></p>
        <p>Github: <a href="https://github.com/karlchvojka">https://github.com/karlchvojka</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/karlchvojka/">https://www.linkedin.com/in/karlchvojka/</a></p>
        <p>Email: <a href="mailto:karl.chvojka@protonmail.com">karl.chvojka@protonmail.com</a></p>
      </section>
      <section className="profileWrap">
        <h2>Profile</h2>
        <p>I am a Fullstack Web Developer with 10 Years of industry experience building websites, being part of advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines. I specialize in Frontend Technologies (JavaScript, Responsive design libraries, React, HTML5, CSS3) with knowledge and understanding of backend Technologies (Node.js,  Ruby on Rails, Relational and Document databases like PostgreSQL, MongoDB, mySQL, etc). </p>
        <p>I also have experience in Project Management, project budgeting, SEO techniques, Online and Traditional advertising, web, graphic, and traditional media design, and how all the parts can work together in an advertising campaign.</p>
      </section>
      <section className="workExpWrap">
        <h2>Work Experience</h2>
        {workMap}
      </section>
      <section>
        <h2>Skills</h2>

        <h3>Languages</h3>
        <ul>
          <li><p>HTML5</p></li>
          <li><p>CSS3</p></li>
          <li><p>JavaScript</p></li>
          <li><p>ES6</p></li>
          <li><p>PHP</p></li>
        </ul>

        <h3>Libraries & Frameworks</h3>
        <ul>
          <li><p>jQuery</p></li>
          <li><p>Bootstrap 4</p></li>
          <li><p>Ajax</p></li>
          <li><p>Express.js</p></li>
          <li><p>React</p></li>
          <li><p>Ruby on Rails</p></li>
          <li><p>Knex</p></li>
          <li><p>Wordpress</p></li>
        </ul>

        <h3>Database Systems</h3>
        <ul>
          <li><p>MySQL</p></li>
          <li><p>PostgreSQL</p></li>
          <li><p>MongoDB</p></li>
          <li><p>Restful API's</p></li>
        </ul>

        <h3>Software & Design</h3>
        <ul>
          <li><p>Git/Github</p></li>
          <li><p>Adobe Software Collection</p></li>
          <li><p>Responsive Design</p></li>
          <li><p>Web Design</p></li>
        </ul>
      </section>
      <section>
        <h2>Education</h2>

        <h3>Lighthouse Labs, Toronto</h3>
        <h4>Web Development Bootcamp</h4>
        <p>Apr 2019  –  June 2019</p>
        <p>The Web Development Bootcamp is a 12 week, 40+ hours/week bootcamp. It covers the most popular and marketable languages and frameworks used in Web Development today.</p>
        <p>The topics covered are: JavaScript, Node.js, Express, PostgreSQL, MongoDB, React, Ruby on Rails, Automated Testing, and Computer Science Fundamentals.</p>

        <h3>Edmonton Arts College</h3>
        <h4>Digital Media Production Program</h4>
        <p>June 2010</p>
        <p className="keywords"><span>Noteable Keywords:</span> Education, Student Instruction, Front End Development (HTML5, CSS3), JavaScript, jQuery, Wordpress, Drupal, Joomla!, Design Interpretation, Career Guidence</p>

      </section>
    </StyledResume>
  )
}

export default Resume;
