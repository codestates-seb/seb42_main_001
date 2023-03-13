import styled from 'styled-components';

import { RiMoreLine } from 'react-icons/ri';

function More() {
  return (
    <IconWrapper>
      <RiMoreLine></RiMoreLine>
    </IconWrapper>
  );
}

export default More;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 20px;
    height: 20px;
  }
`;
