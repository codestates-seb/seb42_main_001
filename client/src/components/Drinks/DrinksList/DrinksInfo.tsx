import { useState, Dispatch, SetStateAction } from "react";
import DrinksTagList from "./drinksinfo/DrinksTagList";
import DrinkSearch from "./drinksinfo/DrinksSearch";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../../UI/Button";
import { useDispatch } from 'react-redux';
import { setSearchTag } from '../../../redux/slice/drinks/drinksListSlice'

interface ISearchProps {
  tagData: { tagId: number; tagName?: string; }[]
  search?: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setPage: (state: number) => void;
}

function DrinksInfo({ tagData, search, setSearch, setPage }: ISearchProps) {
  const [searchButton, setSearchButton] = useState<boolean>(false);
  const dispatch = useDispatch()

  // searchButton on/off
  const handleSearchChange = () => {
    setSearch('')
    setPage(1)
    dispatch(setSearchTag(0))
    setSearchButton((prev) => !prev);
  };

  return (
    <InfoContainer>
      {searchButton
        ? <DrinkSearch search={search} setSearch={setSearch} />
        : <DrinksTagList tagData={tagData} />
      }
      <ButtonMargin>
        <Button
          type="button"
          width={`--x-large`}
          radius={`--large`}
          color={`--color-white`}
          bgColor={`--color-main`}
          borderColor={`--color-main`}
          onClick={handleSearchChange}
        >
          <SvgSize>
            <AiOutlineSearch />
          </SvgSize>
        </Button>
      </ButtonMargin>
    </InfoContainer>
  );
}

export default DrinksInfo;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  margin: var(--3x-large) 0;
  align-items: center;
  justify-content: space-between;

    @media only screen and (max-width: 768px) {
    margin: var(--large);
    justify-content: flex-end;
    }
`;

const SvgSize = styled.div`
  font-size: var(--small);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--2x-small) 0;
`;

const ButtonMargin = styled.div`
  margin: calc(var(--2x-small) * 2)  0;
  margin-left: 10px;
`