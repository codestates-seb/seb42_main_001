import styled from 'styled-components';
import TagsBodyTitle from './TagsBodyTitle';
import TagsDrinksContent from './TagsDrinksContent';

const TagsBodyDrinks = () => {
  return (
    <BodyDrinksContainer>
      <TagsBodyTitle text={'Drinks'} />
      <TagsDrinksContent />
    </BodyDrinksContainer>
  );
};

export default TagsBodyDrinks;

const BodyDrinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
