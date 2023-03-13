import styled from 'styled-components';

import { CiSearch } from 'react-icons/ci';

function BoardSearch() {
  return (
    <Wrapper>
      <CiSearch></CiSearch>
    </Wrapper>
  );
}

export default BoardSearch;

const Wrapper = styled.div`
  cursor: pointer;

  > svg {
    width: 40px;
    height: 40px;
  }
`;
