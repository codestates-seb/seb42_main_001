import customAxios from '../../../api/customAxios';
import { IDrinks } from '../../../util/interfaces/drinks.inerface';

import { useState, useEffect, useCallback } from 'react';
import MainDrinksContentDrink from './MainDrinksContentDrink';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MainDrinksContentDrinks() {
    const [drinksData, setDrinksData] = useState<IDrinks[]>([])

    const handleDrinksData = useCallback(async () => {
        try {
            const res = await customAxios.get('/drinks');
            const { data } = res;
            setDrinksData(data.data);
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        handleDrinksData()
    }, [handleDrinksData])

    return (
        <MainContainer>
            {drinksData.map(drink => {
                return (
                    <Link to={`/drinks/${drink.drinkId}`} key={drink.drinkId}>
                        <MainDrinksContentDrink drinkName={drink.drinkName} drinkImg={drink.drinkImageUrl} />
                    </Link>
                )
            })}
        </MainContainer>
    )
}

export default MainDrinksContentDrinks

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 80px;
`