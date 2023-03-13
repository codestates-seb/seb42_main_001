import styled from "styled-components";
import TagsBodyBoard from "./TagsBodyBoard";
import TagsBodyDrinks from "./TagsBodyDrinks";

const TagsBody = () => {
  return (
    <BodyContainer>
      <TagsBodyDrinks />
      <TagsBodyBoard />
    </BodyContainer>
  );
};

export default TagsBody;

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
