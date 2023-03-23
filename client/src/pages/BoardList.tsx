import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';

import BoardInfo from '../components/Board/BoardInfo';
import BoardItem from '../components/Board/BoardItem';

import { boardListItemAdd } from '../redux/slice/board/boardListSlice';
import Loading from '../components/UI/Loading';

function BoardList() {
  const [isPage, setPage] = useState(1); // 현재 페이지 저장
  const [isLoading, setIsLoading] = useState(true);
  const isData = useAppSelector((state) => state.boardList.listData);
  const filteredData = useAppSelector((state) => state.boardList.filteredData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 처음 데이터 받아오고 현재 페이지가 바뀔때 데이터 받아오고 items에 저장
    setIsLoading(true);
    const fetchData = async () => {
      const res = await axios.get(`/boards?page=${isPage}&size=16`);

      const { data, likeList } = res.data;

      dispatch(boardListItemAdd({ data, likeList }));
      setIsLoading(false);
    };
    fetchData();
  }, [isPage, dispatch]);

  const handleScroll = () => {
    // 스크롤 위치 감지 콜백 함수
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // 마지막 페이지 조건 추가
    if (scrollTop + clientHeight >= scrollHeight - 500) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <BoardInfo />
          <ListContainer>
            {(filteredData.length === 0 ? isData : filteredData)?.map((el) => {
              return <BoardItem key={el.boardId} data={el} />;
            })}
          </ListContainer>
        </Wrapper>
      )}
    </>
  );
}

export default BoardList;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  margin-bottom: calc(var(--4x-large) * 5);
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
