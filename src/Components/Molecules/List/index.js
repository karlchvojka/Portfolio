import styled from 'styled-components';

// Styles.
const StyledList = styled.ul`
  list-style: none;
  padding-left: 0px;

  li {

    p {
      margin: 0px 0px 5px 0px;
    }
  }
`;

function List({ items }) {
  const listMap = items.map((item) => {
    return (
      <li>
        <p>{item}</p>
      </li>
    )
  })
  return (
    <StyledList>
      {listMap}
    </StyledList>
  )
}

export default List;
