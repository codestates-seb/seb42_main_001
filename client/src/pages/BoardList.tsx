import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { useInView } from 'react-intersection-observer';

import customAxios from '../api/customAxios';
import BoardInfo from '../components/board/boardList/BoardInfo';
import BoardItem from '../components/board/boardList/BoardItem';
import { boardListItemAdd } from '../redux/slice/board/boardListSlice';
import Loading from '../components/ui/Loading';

function BoardList() {
  const [page, setPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');
  const [ref, inView] = useInView();

  const timer = useRef<boolean>(false);

  const boardListsData = useAppSelector((state) => state.boardList.listData);
  const filteredDatas = boardListsData.filter((data) =>
    data.boardTitle.includes(input)
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(`/boards?page=${page}&size=10`);
      const { data, likeList } = res.data;
      if (data.length !== 0) {
        dispatch(boardListItemAdd({ data, likeList }));
      }
      setEndPage(res.data.pageInfo.totalPage);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, dispatch]);

  useEffect(() => {
    if (inView && endPage >= page && !timer.current) {
      timer.current = true;
      setTimeout(() => {
        setPage((prev) => prev + 1);
        timer.current = false;
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const handleSearchClose = () => {
    setIsSearch(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper onClick={handleSearchClose}>
          <BoardInfo
            isSearch={isSearch}
            setIsSearch={setIsSearch}
            setInput={setInput}
          />
          <ListContainer>
            {filteredDatas.length === 0 ? (
              <div>
                현재 페이지에서 '{input}'란 단어의 검색 결과가 없습니다.
              </div>
            ) : (
              filteredDatas?.map((filteredData) => {
                return (
                  <BoardItem key={filteredData.boardId} data={filteredData} />
                );
              })
            )}
          </ListContainer>
          {filteredDatas.length !== 0 && !isSearch ? (
            <RefContainer ref={ref} />
          ) : null}
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const RefContainer = styled.div`
  height: 1vw;
  margin-top: 20vh;
`;
