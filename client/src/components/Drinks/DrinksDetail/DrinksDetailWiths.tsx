import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import DrinksDetailWith from "./DrinksDetailWith";
import DrinksDetailWithTitle from "./DrinksDetailWithTitle";
import { Drinks } from '../../../interfaces/Drinks.inerface'
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'


interface TagsProps {
  tagId: number;
  tagName?: string;
}

function DrinksDetailWiths({ drinksDetail }: DrinksDetailProps) {
  const [drinksData, setDrinksData] = useState<Drinks[]>([])

  // const handleDrinksData = useCallback(async () => {
  //   try {
  //     const response = await axios.get('/drinks');
  //     const { data } = response;
  //     setDrinksData(data.data)
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }, [])

  // useEffect(() => {
  //   handleDrinksData()
  // }, [handleDrinksData])

  // drinksDetail 단일 객체 Tags 개별 추출
  // const TagIds = drinksDetail?.tags!.map(tag => tag.tagId)
  // console.log(TagIds)   // [24, 9, 33, 1]

  // 
  // const dataTagIds = drinksData.flatMap(drink => drink.tags.map(tag => tag.tagId))
  // console.log(dataTagIds)

  // let drinkTagData: Drinks[] = []

  // for (let i = 0; i < drinksData.length; i++) {
  //   if (drinksData[i].tags) {
  //     const drinkTag = drinksData[i].tags // 태그 잇는 drink들
  //     for (let j = 0; j < drinkTag.length; j++) { // 태그 잇는 drink 순회
  //       if (drinkTag[j].tagId !== 9) { // 요소의 tagid가 9가 아니라면
  //         drinkTagData = [...drinkTagData, drinksData[i]]
  //         break;
  //       }
  //     }
  //   }
  // }
  // console.log(drinkTagData)

  return (
    <div>
      <DrinksDetailWithTitle />
      <WithContainer>
        <DrinksDetailWith />
        <DrinksDetailWith />
        <DrinksDetailWith />
        <DrinksDetailWith />
        <DrinksDetailWith />
        <DrinksDetailWith />
      </WithContainer>
    </div>
  );
}

export default DrinksDetailWiths;

const WithContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
`;
