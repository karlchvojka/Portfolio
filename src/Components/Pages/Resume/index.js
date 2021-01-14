// Component Includes
import Workplace from './Workplace';

// Styled Component Includes
import StyledResume from './StyledResume';

// Asset Includes
import expData from './expData';

function Resume() {
  const workMap = expData.map(work => <Workplace {...work} />);

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
      <section className="skillsWrap">
        <h2>Skills</h2>
        <div className="listWrap">
          <div>
            <h3>Languages</h3>
            <ul>
              <li><p>HTML5</p></li>
              <li><p>CSS3</p></li>
              <li><p>JavaScript</p></li>
              <li><p>ES6</p></li>
              <li><p>PHP</p></li>
            </ul>
          </div>
          <div>
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
          </div>
          <div>
            <h3>Database Systems</h3>
            <ul>
              <li><p>MySQL</p></li>
              <li><p>PostgreSQL</p></li>
              <li><p>MongoDB</p></li>
              <li><p>Restful API's</p></li>
            </ul>
          </div>
          <div>
            <h3>Software & Design</h3>
            <ul>
              <li><p>Git/Github</p></li>
              <li><p>Adobe Software Collection</p></li>
              <li><p>Responsive Design</p></li>
              <li><p>Web Design</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="educationWrap">
        <h2>Education</h2>

        <article className="edWrap">
          <h3>Lighthouse Labs, Toronto</h3>
          <section className="edHeader">
            <h4>Web Development Bootcamp</h4>
            <p>Apr 2019  –  June 2019</p>
          </section>
          <p>The Web Development Bootcamp is a 12 week, 40+ hours/week bootcamp. It covers the most popular and marketable languages and frameworks used in Web Development today.</p>
          <p>The topics covered are: JavaScript, Node.js, Express, PostgreSQL, MongoDB, React, Ruby on Rails, Automated Testing, and Computer Science Fundamentals.</p>
        </article>

        <article className="edWrap">
          <h3>Edmonton Arts College</h3>
          <section className="edHeader">
            <h4>Digital Media Production Program</h4>
            <p>June 2010</p>
          </section>
          <p className="keywords"><span>Noteable Keywords:</span> Education, Student Instruction, Front End Development (HTML5, CSS3), JavaScript, jQuery, Wordpress, Drupal, Joomla!, Design Interpretation, Career Guidence</p>
        </article>
      </section>
    </StyledResume>
  )
}

export default Resume;
