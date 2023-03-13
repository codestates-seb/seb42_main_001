import styled from "styled-components";
import TagsDrinksItem from "./TagsDrinksItem";

const TagsDrinksContent = () => {
  return (
    <DrinksContentContainer>
      <TagsDrinksItem />
      <TagsDrinksItem />
      <TagsDrinksItem />
      <TagsDrinksItem />
      <TagsDrinksItem />
      <TagsDrinksItem />
      <TagsDrinksItem />
      <TagsDrinksItem />
      <TagsDrinksItem />
    </DrinksContentContainer>
  );
};

export default TagsDrinksContent;

const DrinksContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: var(--large);
  padding-left: var(--large);
`;
