import styled from 'styled-components';

interface TagsBodyTitleProps {
  text: string;
}

const TagsBodyTitle = ({ text }: TagsBodyTitleProps) => {
  return <BodyTitleContainer>{text}</BodyTitleContainer>;
};

export default TagsBodyTitle;

const BodyTitleContainer = styled.div`
  margin-left: var(--large);
  font-size: var(--text-large);
  font-weight: var(--weight-large);
`;
