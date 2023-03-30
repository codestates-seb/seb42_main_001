import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';

import customAxios from '../api/customAxios';
import BoardInfo from '../components/Board/BoardInfo';
import BoardItem from '../components/Board/BoardItem';
import { boardListItemAdd } from '../redux/slice/board/boardListSlice';
import Loading from '../components/UI/Loading';

function BoardList() {
  const [isPage, setPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const [search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');

  const datas = useAppSelector((state) => state.boardList.listData);
  const filteredDatas = datas.filter((data) => data.boardTitle.includes(input));

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await customAxios.get(`/boards?page=${isPage}&size=10`);
      const { data, likeList } = res.data;
      if (data.length !== 0) {
        dispatch(boardListItemAdd({ data, likeList }));
      }
      setEndPage(res.data.pageInfo.totalPage);
      setIsLoading(false);
    };

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100 && endPage >= isPage) {
        setPage((prev) => prev + 1);
      }
    };

    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPage, dispatch]);

  const handleSearchClose = () => {
    setSearch(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper onClick={handleSearchClose}>
          <BoardInfo
            search={search}
            setSearch={setSearch}
            setInput={setInput}
          />
          <ListContainer>
            {filteredDatas.length === 0 ? (
              <ListText>{`현재 페이지에서 '${input}'란 단어의 검색 결과가 없습니다.`}</ListText>
            ) : (
              filteredDatas?.map((filteredData) => {
                return (
                  <BoardItem key={filteredData.boardId} data={filteredData} />
                );
              })
            )}
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
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  margin-bottom: calc(var(--4x-large) * 5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ListText = styled.div`
  font-size: var(--text-large);
  font-weight: var(--weight-medium);
`;
