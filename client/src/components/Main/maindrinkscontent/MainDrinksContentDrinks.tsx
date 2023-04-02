import customAxios from '../../../api/customAxios';

import { useState, useEffect, useCallback } from 'react';
import MainDrinksContentDrink from './MainDrinksContentDrink';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IDrinks {
  drinkId: number;
  drinkName: string;
  imageUrl: string;
}

function MainDrinksContentDrinks() {
  const [drinksData, setDrinksData] = useState<IDrinks[]>([]);

  const handleDrinksData = useCallback(async () => {
    try {
      const res = await customAxios.get('/drinks/best');
      setDrinksData(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleDrinksData();
  }, [handleDrinksData]);

  return (
    <MainContainer>
      {drinksData.map((drink) => {
        return (
          <Link to={`/drinks/${drink.drinkId}`} key={drink.drinkId}>
            <MainDrinksContentDrink
              drinkName={drink.drinkName}
              drinkImg={drink.imageUrl}
            />
          </Link>
        );
      })}
    </MainContainer>
  );
}

export default MainDrinksContentDrinks;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 80px;

  @media only screen and (max-width: 1024px) {
    margin-right: 0;
    height: auto;
  }
`;
