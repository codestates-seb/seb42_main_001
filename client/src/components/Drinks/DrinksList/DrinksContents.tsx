import React, { useCallback, useEffect, useState } from "react";
import DrinksItem from "./DrinksItem";
import styled from "styled-components";
import axios from "axios";
import { Drinks } from "../../../interfaces/Drinks.inerface";
import { Likes } from "../../../interfaces/Drinks.inerface";
import Pagination from "../../UI/Pagination";

interface ISearchProps {
  search: string;
  searchTag: number;
  page: number;
  setPage: (state: number) => void;
}

function DrinksContents({ search, searchTag, page, setPage }: ISearchProps): any {
  const [drinksData, setDrinksData] = useState<Drinks[]>([])
  const [likesData, setLikesData] = useState<Likes[]>([])
  const [limit, setLimit] = useState<number>(16);
  const offset = (page - 1) * limit;

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
  })

  let drinkTagData: Drinks[] = []
  let drinkTagValue: number | any = 0
  for (let i = 0; i < drinksData.length; i++) {
    if (drinksData[i].tags.length !== 0) {
      const drinkTag = drinksData[i].tags // 태그 잇는 drink들
      for (let j = 0; j < drinkTag.length; j++) { // 태그 잇는 drink 순회
        if (drinkTag[j].tagId === searchTag) { // 요소의 tagid가 searchtag랑 동일하다면
          drinkTagData = [...drinkTagData, drinksData[i]]
          drinkTagValue = drinkTag[j].tagId
          break;
        }
      }
    }
  }

  const filtered: Drinks[] = drinksData.filter((el) => {
    return search.toLowerCase() === ""
      ? el
      : el.drinkName.toLowerCase().includes(search);
  });

  return (
    <>
      <ContentsContainer>

        {searchTag === drinkTagValue && drinkTagValue !== 0
          ? drinkTagData.slice(offset, offset + limit).map(el => {
            return (
              <DrinksItem key={el.drinkId} drinksData={el} likesData={likesData} />
            );
          })
          : filtered.slice(offset, offset + limit).map(el => {
            return (
              <DrinksItem key={el.drinkId} drinksData={el} likesData={likesData} />
            );
          })}

      </ContentsContainer>
      <Pagination
        total={drinkTagData.length !== 0
          ? drinkTagData.length
          : filtered.length
        }
        limit={limit}
        page={page}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
}

export default DrinksContents;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: var(--4x-large);
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

