import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/hooks';

import DrinksItem from '../Drinks/DrinksList/DrinksItem';

const TagsDrinksContent = () => {
  const drinksList = useAppSelector(state => state.tag.tagData.drink);

  return (
    <DrinksContentContainer>
      {drinksList
        ? drinksList.map(ele => (
            <DrinksItem
              key={ele.drinkId}
              drinksData={ele}
              likesData={[]}></DrinksItem>
          ))
        : null}
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
