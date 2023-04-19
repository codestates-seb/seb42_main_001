import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/hooks';

function BoardDetailTitle() {
  const { boardTitle } = useAppSelector(
    (state) => state.boardDetail.detailData
  );
  return <TitleContainer>{boardTitle}</TitleContainer>;
}

export default BoardDetailTitle;

const TitleContainer = styled.div`
  font-weight: var(--weight-large);
  font-size: var(--text-large);

  @media only screen and (max-width: 768px) {
    font-weight: var(--weight-large);
    font-size: 5vw;
  }
`;
