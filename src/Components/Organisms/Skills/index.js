import styled from 'styled-components';

// Component import
import Header from '../../Atoms/Header';
import List from '../../Molecules/List';

// Styles
const StyledSkills = styled.section`
  border-top: 1px solid #00abdf;

  .listWrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0px;

    li {
      max-width: 50%;
      flex: 0 0 50%;

      h3 {
        color:#00abdf;
        font-size:19px;
        margin-top: 0px;
      }

      li {

        p {
          font-weight: 700;
          font-size: 16px;
          line-height:1.5;
          margin-bottom: 5px;
        }
      }
    }
  }

  @media (min-width: 576px) {
    padding-bottom:20px;

    .listWrap {

      li {
        flex: 0 0 50%;
        max-width: 50%;

        h3 {
          font-size:19px;
        }

        li {

          p {
            font-size: 16px;
            line-height:1.5;
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding-bottom:20px;

    .listWrap {

      li {
        flex: 0 0 25%;
        max-width: 25%;

        h3 {
          font-size:19px;
        }

        li {

          p {
            font-size: 16px;
            line-height:1.5;
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    padding-bottom:20px;

    .listWrap {

      li {
        flex: 0 0 25%;
        max-width: 25%;

        h3 {
          font-size:19px;
        }

        li {

          p {
            font-size: 16px;
            line-height:1.5;
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    padding-bottom:20px;

    .listWrap {

      li {
        flex: 0 0 25%;
        max-width: 25%;

        h3 {
          font-size:22px;
        }

        li {

          p {
            font-size: 18px;
            line-height:1.5;
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media (min-width: 1400px) {
    padding-bottom:20px;

    .listWrap {

    li {
      max-width: 25%;
      flex: 0 0 25%;

      h3 {
        font-size:22px;
      }

      li {
        p {
          font-size: 18px;
          line-height:1.5;
          margin-bottom: 5px;
        }
      }
    }
  }
`;

function Skills() {
  const [skills, setSkills] = React.useState([
    ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'PHP'],
    ['jQuery', 'Bootstrap 4', 'Ajax', 'Express.js', 'React', 'Ruby on Rails', 'Knex', 'Wordpress'],
    ['MySQL', 'PostgreSQL', 'MongoDB', "Restful API's"],
    ['Git/Github', 'Adobe Software Collection', 'Responsive Design', 'UI/UX Design']
  ])
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
