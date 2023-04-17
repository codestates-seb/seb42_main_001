import { useState } from "react";
import DrinksItem from "./drinksContent/DrinksItem";
import styled from "styled-components";
import { IDrinks } from "../../../util/interfaces/drinks.inerface";
import Pagination from "../../UI/Pagination";

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store'

interface ISearchProps {
  search: string;
  searchTag: number;
  page: number;
  setPage: (state: number) => void;
}

interface Tags {
  tags: { tagId: number }[];
}

function DrinksContents({ search, searchTag, page, setPage }: ISearchProps): any {
  const [limit, setLimit] = useState<number>(8);
  const offset = (page - 1) * limit;

  const { drinksData } = useSelector((state: RootState) => state.drinkslist);
  const { tagData } = useSelector((state: RootState) => state.drinksTags);

  const drinkTagData: IDrinks[] = drinksData.filter((drink: Tags) => drink.tags.some(tag => tag.tagId === searchTag));
  const filteredDrinks = drinksData.filter((drink) => search.toLowerCase() === "" || drink.drinkName.toLowerCase().includes(search.toLowerCase()));
  const displayedDrinks = filteredDrinks.slice(offset, offset + limit);

  const drinkTagValue = drinkTagData.length > 0 ? drinkTagData[0].tags.find(tag => tag.tagId === searchTag)?.tagId : null;
  const drinksToShow = searchTag === drinkTagValue ? drinkTagData.slice(offset, offset + limit) : (searchTag !== 0 && drinkTagValue === null) ? [] : displayedDrinks;

  /** Tag 클릭 시 해당하는 Tag가 Drinks에 없을 경우 div 반환 */
  const text = tagData.find(item => item.tagId === searchTag)?.tagName;

  return (
    <ContentsContainer>
      {drinksToShow.length > 0 ? (
        <>
          {drinksToShow.map((drink) => <DrinksItem key={drink.drinkId} drinksData={drink} />)}
          {drinksToShow.length > 7 && (
            <Pagination
              total={drinkTagData.length || filteredDrinks.length}
              limit={limit}
              page={page}
              setPage={setPage}
              setLimit={setLimit}
            />
          )}
        </>
      ) : (
        <div>{drinkTagValue === null ? `현재 페이지에서 '${text}'의 검색 결과가 없습니다.` : `현재 페이지에서 '${search}'란 단어의 검색 결과가 없습니다.`}</div>
      )}
    </ContentsContainer>
  );
}

export default DrinksContents;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: calc(var(--4x-large) * 2);
  justify-content: center;

    @media only screen and (max-width: 768px) {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media only screen and (max-width: 479px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;
