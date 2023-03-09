import styled from "styled-components";

import Card from "../UI/Card";

function MyContent() {
  return (
    <Card>
      <MyContentContainer></MyContentContainer>
    </Card>
  );
}

export default MyContent;

const MyContentContainer = styled.div`
  width: 940px;
`;
