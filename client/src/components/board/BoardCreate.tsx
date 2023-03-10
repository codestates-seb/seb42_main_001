import styled from 'styled-components';

import { CiCirclePlus } from 'react-icons/ci';

function BoardCreate() {
  return (
    <Wrapper>
      <CiCirclePlus></CiCirclePlus>
    </Wrapper>
  );
}

export default BoardCreate;

const Wrapper = styled.div`
  margin-right: 40px;
  cursor: pointer;

  > svg {
    width: 40px;
    height: 40px;
  }
`;
