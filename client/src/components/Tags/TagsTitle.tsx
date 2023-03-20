import styled from "styled-components";

const TagsTitle = () => {
  return <TitleContainer>#단맛</TitleContainer>;
};

export default TagsTitle;

const TitleContainer = styled.div`
  margin-bottom: var(--4x-large);
  font-size: var(--2x-large);
  font-weight: var(--weight-x-large);
`;
