import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks/hooks';
import Card from '../../UI/Card';
import { IBoardSearch } from '../../../util/interfaces/boards.interface';

function BoardSearch({ isInput, setIsInput, setInput }: IBoardSearch) {
  const data = useAppSelector((state) => state.boardList.listData);

  const handleDataFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data) {
      setInput(e.target.value.toString());
      setIsInput(e.target.value.toString());
    }
  };

  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <SearchContainer onClick={handlePropagation}>
      <Card>
        <input
          placeholder='Search'
          value={isInput}
          onChange={handleDataFilter}
        />
      </Card>
    </SearchContainer>
  );
}

export default BoardSearch;

const SearchContainer = styled.div`
  width: 92%;

  input {
    width: 100%;
    height: 60px;
    border: none;
    outline: none;
    border-radius: var(--2x-small);
    padding-left: var(--medium);
  }
`;
