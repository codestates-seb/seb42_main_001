import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTag, } from '../../../../redux/slice/drinks/drinksListSlice';
import { RootState } from '../../../../redux/store/store';

interface Tags {
  tagId: number;
  tagName?: string;
  onClick?: () => void;
  setPage: (state: number) => void;
  selected?: boolean;
};

interface TagsProps {
  selected?: boolean;
}

function DrinksTags({ tagId, tagName, setPage }: Tags) {
  const dispatch = useDispatch()
  const { searchTag } = useSelector((state: RootState) => state.drinkslist);

  const handleTagSearchValueChange = () => {
    dispatch(setSearchTag(tagId))
    setPage(1)
  }

  return (
    <TagsContainer>
      <TagsWarp selected={tagId === searchTag} onClick={handleTagSearchValueChange}>{tagName}</TagsWarp>
    </TagsContainer>
  );
}

export default DrinksTags;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TagsWarp = styled.div<TagsProps>`
  cursor: pointer;
  border: 1px solid var(--color-main);
  color: ${(props) => (props.selected ? `var(--color-white)` : `var(--color-main)`)};
  background-color: ${(props) => (props.selected ? `var(--color-main)` : `var(--color-sub-light-gray)`)};
  border-radius: 200px;
  font-size: var(--text-x-small);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s;
  
  &:hover {
    transition: .5s;
    color: ${(props) => (props.selected ? `var(--color-white)` : `var(--color-main)`)};
    background-color: ${(props) => (props.selected ? `var(--color-main)` : `var(--color-white)`)};
  }
`
