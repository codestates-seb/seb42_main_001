import styled from "styled-components";

import Card from "../UI/Card";

const TagsDrinksItem = () => {
  return (
    <Wrapper>
      <Card>
        <DrinksItemContainer />
      </Card>
    </Wrapper>
  );
};

export default TagsDrinksItem;

const Wrapper = styled.div`
  margin-bottom: var(--large);
  margin-right: var(--large);
`;

const DrinksItemContainer = styled.div`
  width: 255px;
  height: 340px;
`;
