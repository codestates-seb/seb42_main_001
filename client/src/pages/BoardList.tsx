import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import BoardInfo from "../components/Board/BoardInfo";
import BoardItem from "../components/Board/BoardItem";

function BoardList() {
  const [items, setItems] = useState<any[]>([]); // axios로 받아온 데이터 저장
  const [isPage, setPage] = useState(1); // 현재 페이지 저장

  useEffect(() => {
    // 처음 데이터 받아오고 현재 페이지가 바뀔때 데이터 받아오고 items에 저장
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3001/data/${isPage}`);
      setItems((prev) => [...prev, ...res.data.data]);
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
      <BoardInfo />
      <ListContainer>
        {items &&
          items.map((el) => {
            return <BoardItem data={el} />;
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
