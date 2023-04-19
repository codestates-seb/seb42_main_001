import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/hooks';

const TagsTitle = () => {
  const { tagName } = useAppSelector(state => state.tag.tagData);

  return <TitleContainer>{`#${tagName}`}</TitleContainer>;
};

export default TagsTitle;

const TitleContainer = styled.div`
  margin-bottom: var(--4x-large);
  font-size: var(--2x-large);
  font-weight: var(--weight-x-large);
`;
