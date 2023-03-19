import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import BoardInfo from "../components/Board/BoardInfo";
import BoardItem from "../components/Board/BoardItem";
import { BoardDataProps } from "../interfaces/Boards.interface";

function BoardList() {
  const [items, setItems] = useState<BoardDataProps[]>([]); // axios로 받아온 데이터 저장
  const [isPage, setPage] = useState(1); // 현재 페이지 저장
  const [filterItems, setFilterItems] = useState<BoardDataProps[]>([]);

  useEffect(() => {
    // 처음 데이터 받아오고 현재 페이지가 바뀔때 데이터 받아오고 items에 저장
    const fetchData = async () => {
      const res = await axios.get(`/boards?page=${isPage}&size=16`);

      const data = res.data.data.map((el: BoardDataProps) => {
        el.like = false;
        return el;
      });
      const like = res.data.likeList;

      for (let el1 of like) {
        for (let el2 of data) {
          if (el1.boardId === el2.boardId) {
            el2.like = true;
            break;
          }
        }
      }
      setItems((prev) => {
        if (prev.length === 0) return data;
        else if (prev[0].boardId !== data[0].boardId) {
          return [...prev, ...data];
        } else {
          return prev;
        }
      });
      setFilterItems((prev) => {
        if (prev.length === 0) return data;
        else if (prev[0].boardId !== data[0].boardId) {
          return [...prev, ...data];
        } else {
          return prev;
        }
      });
    };
    fetchData();
  }, [isPage]);

  const handleScroll = () => {
    // 스크롤 위치 감지 콜백 함수 (- 100인거 봐서는  마지막 100px 전에)
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // 마지막 페이지 조건 추가
    if (scrollTop + clientHeight >= scrollHeight - 500) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <BoardInfo data={items} filterItems={setFilterItems} />
      <ListContainer>
        {filterItems?.map((el) => {
          return <BoardItem key={el.boardId} data={el} />;
        })}
      </ListContainer>
    </Wrapper>
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
  margin-bottom: var(--xx-large);
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
