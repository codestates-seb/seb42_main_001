import styled from 'styled-components';

import Card from '../UI/Card';

function BoardTagSearch() {
  return (
    <Container>
      <Card>
        <input placeholder="Search"></input>
      </Card>
    </Container>
  );
}

export default BoardTagSearch;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 10px;

  input {
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: var(--xx-small);
    padding-left: var(--medium);
  }
`;
