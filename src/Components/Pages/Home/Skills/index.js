// Component import
import Header from 'global/Header';
import List from './List';

// Styles
import StyledSkills from './StyledSkills';

// Data
import skills from './skillsData';

function Skills() {
  return (
    <StyledSkills>
      <div className="container">
        <Header type='h2' text='Skills' />
        <ul className="listWrap">
          <li>
            <Header type='h3' text="Languages" />
            <List items={skills[0]} />
          </li>
          <li>
            <Header type='h3' text="Libraries & Frameworks" />
            <List items={skills[1]} />
          </li>
          <li>
            <Header type='h3' text="Database Systems" />
            <List items={skills[2]} />
          </li>
          <li>
            <Header type='h3' text="Software & Design" />
            <List items={skills[3]} />
          </li>
        </ul>
      </div>
    </StyledSkills>
  )
}

export default Skills;
