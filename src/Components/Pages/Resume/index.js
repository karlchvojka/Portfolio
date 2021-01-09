import React from 'react';
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
`;

function Resume() {
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
      <section>
        <h2>Profile</h2>
        <p>I am a Fullstack Web Developer with 10 Years of industry experience building websites, being part of advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines. I specialize in Frontend Technologies (JavaScript, Responsive design libraries, React, HTML5, CSS3) with knowledge and understanding of backend Technologies (Node.js,  Ruby on Rails, Relational and Document databases like PostgreSQL, MongoDB, mySQL, etc). </p>
        <p>I also have experience in Project Management, project budgeting, SEO techniques, Online and Traditional advertising, web, graphic, and traditional media design, and how all the parts can work together in an advertising campaign.</p>
      </section>
      <section>
        <h2>Work Experience</h2>
        <h3>Lighthouse Labs</h3>
        <h4>Front-End Developer</h4>
        <p>Aug 2019 - Mar 2020</p>
        <p className="keywords"><span>Noteable Keywords:</span> Customer serivce, Student Mentorship, Project Management, Marketing, Front End Development (HTML5, CSS3, CSS Grid, Flexbox), JavaScript, jQuery, Bootstrap, React, Ruby on Rails, JSX, Active Record </p>
        <p>Working with the Marketing team to plan and execute the building of Static ReactJs sites for marketing and promotional purposes. Working with the internal staff to maintain and upgrade internal systems in React, Ruby on Rails, etc.</p>

        <h3>Freelance Work</h3>
        <h4>Full Stack Developer</h4>
        <p>Aug 2010 - Present</p>
        <p className="keywords"><span>Noteable Keywords:</span> Business Management, Client Interaction, Client relations, Customer serivce, Project Management, Self Employment, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, JavaScript, jQuery, Bootstrap, Photography, User Guide Creation.</p>
        <p>Managing and completing websites for a variety of clients. Projects are handled from initial contact with the client to the final launch including Concepts, Wireframing, Design, Development, Migration, Content Management, Testing, and Launching. Supplying clients with Hosting and Host maintenance, including Server updates, and Hosting provider interaction when needed.</p>

        <h3>FreeCodeCamp</h3>
        <h4>Global Community Manager</h4>
        <p>Aug 2017 - Present</p>
        <p className="keywords"><span>Noteable Keywords:</span> Social Media Management, Facebook Group moderation, Community Organizing, Public speaking</p>
        <p>FreeCodeCamp is an online learning resource for Fullstack Development learning. FreeCodeCamp has broken learning Web Development into digestible chunks to allow people to learn how to code in their spare time.</p>
        <p>I am a Global Community Manager and my biggest input into the FCC ecosystem is managing the moderators for the Facebook Groups and other social media.</p>

        <h3>MediaFace, Toronto</h3>
        <h4>Fullstack Web Developer</h4>
        <p>June 2017 - Oct 2017</p>
        <p className="keywords"><span>Noteable Keywords:</span> Client Research, Client relations, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO Implementation.</p>
        <p>Building Responsive Worpdress Themes with Bootstrap. Tasks included building full websites, and Wordpress Plugins. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing. </p>

        <h3>Digital Shift Marketing, Toronto</h3>
        <h4>Front End Developer</h4>
        <p>Feb 2016 - Oct 2016</p>
        <p className="keywords"><span>Noteable Keywords:</span> Development Team Management Training, Process writing, Client Research, Client relations, Customer service Project Management, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO Implementation.</p>
        <p>Building Responsive Worpdress Themes with Bootstrap. Tasks included building full websites to building landing pages for SEO A/B Testing. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing. Management duties included heading projects, as well as writing processes and procedures to be used by the development department and managing the IT needs of the company.</p>

        <h3>VentureWeb, Toronto</h3>
        <h4>Web Consultant, Front End Developer</h4>
        <p>Sept 2013  –  Dec 2014</p>
        <p className="keywords"><span>Noteable Keywords:</span> Development Team Management Training, Process writing, Client Research, Client relations, Customer service Project Management, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO Implementation.</p>
        <p>Working as a web consultant through VentureWeb for Accenture, as a site manager for Accenture's Careers Websites.</p>
        <p>Tasks included building full websites to building landing pages for SEO A/B Testing. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing.</p>

        <h3>Northlands, Edmonton</h3>
        <h4>Sr. Front End Developer</h4>
        <p>Sept 2012  –  Apr 2013</p>
        <p className="keywords"><span>Noteable Keywords:</span> Front End Development (HTML5, CSS3), JavaScript, jQuery, PHP, Wordpress, Drupal, Joomla!, User guide creation, Content Management, Web Platform Maintenance, Server Maintenance, Enterprise Level Company</p>
        <p>Primary responsibility for position was the updating and maintenance of the 13 web properties for Northlands. Acted as the primary contact for the hosting companies, and IT service providers that Northlands works with. This included managing, updating and maintaining the web servers, as well as working with the hosting companies to coordinate hardware maintenance and downtime. Additionally, responsible for internal system creation for managing new content to be added to the web properties.</p>

        <h3>Edmonton Arts College, Edmonton</h3>
        <h4>Teacher/Instructor - Digital Media Production Program</h4>
        <p>July 2012  –  Sept 2012</p>
        <p>Taught basic HTML, CSS, CSS3, JavaScript, Github and etc in the Digital Media Production Program.</p>
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
