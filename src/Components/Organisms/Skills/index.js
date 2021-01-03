import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component import
import Header from '../../Atoms/Header';
import List from '../../Molecules/List';

// Styles
const StyledSkills = styled.section`
  max-width: 1140px;
  margin: 0 auto;

  .listWrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
      max-width: 25%;
      flex: 0 0 25%;

      h3 {
        color:#00abdf;
        font-size:22px;
      }

      li {
        p {
          font-weight: 700;
          font-size: 18px;
          line-height:20px;
          margin-bottom: 5px;
        }
      }
    }
  }
`;

function Skills() {
  const [skills, setSkills] = useState([
    ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'PHP'],
    ['jQuery', 'Bootstrap 4', 'Ajax', 'Express.js', 'React', 'Ruby on Rails', 'Knex', 'Wordpress'],
    ['MySQL', 'PostgreSQL', 'MongoDB', "Restful API's"],
    ['Git/Github', 'Adobe Software Collection', 'Responsive Design', 'UI/UX Design']
  ])
  return (
    <StyledSkills>
      <Header type='h2' text='Skills' />
      <div className="listWrap">
        <div>
          <Header type='h3' text="Languages" />
          <List items={skills[0]} />
        </div>
        <div>
          <Header type='h3' text="Libraries & Frameworks" />
          <List items={skills[1]} />
        </div>
        <div>
          <Header type='h3' text="Database Systems" />
          <List items={skills[2]} />
        </div>
        <div>
          <Header type='h3' text="Software & Design" />
          <List items={skills[3]} />
        </div>
      </div>
    </StyledSkills>
  )
}

export default Skills;
