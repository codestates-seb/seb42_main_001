import React, { useCallback, useEffect, useState } from "react";
import DrinksItem from "./DrinksItem";
import styled from "styled-components";
import axios from "axios";
import { Drinks } from "../../../interfaces/Drinks.inerface";
import { Likes } from "../../../interfaces/Drinks.inerface";

interface ISearchProps {
  search: string;
}

function DrinksContents({ search }: ISearchProps) {
  const [drinksData, setDrinksData] = useState<Drinks[]>([])
  const [likesData, setLikesData] = useState<Likes[]>([])

  const handleDrinksData = useCallback(async () => {
    try {
      const response = await axios.get('/drinks');
      const { data } = response;
      setDrinksData(data.data)
      setLikesData(data.likeList)
    }
    catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    handleDrinksData()
  }, [handleDrinksData])

  const filtered: Drinks[] = drinksData.filter((el) => {
    return search.toLowerCase() === ""
      ? el
      : el.drinkName.toLowerCase().includes(search);
  });

  return (
    <ContentsContainer>
      {
        filtered.map(el => {
          return (
            <DrinksItem key={el.drinkId} drinksData={el} likesData={likesData} />
          )
        })
      }
    </ContentsContainer>
  );
}

export default DrinksContents;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
