import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { BsPlusLg } from "react-icons/bs";
import BoardCreateTags from "../components/Board/BoardCreateTags";
import BoardCreateBtn from "../components/Board/BoardCreateBtn";
import BoardCreateInput from "../components/Board/BoardCreateInput";
import Button from "../components/UI/Button";
import BoardTagSearch from "../components/Board/BoardTagSearch";
import axios from "axios";

function BoardCreate() {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [tagData, setTagData] = useState([]);
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const [boardImageUrl, setBoardImageUrl] = useState<Imgs[]>([]);
  const [tags, setTags] = useState<Tags[]>([]);

  const navigate = useNavigate();

  type Tags = { tagId: number; tagName: string };
  type Imgs = {
    imageId: number;
    boardImageUrl: string;
  };

  useEffect(() => {
    const tagsData = async () => {
      const res = await axios.get(`/tags`);
      setTagData((prevTag) => res.data);
    };
    tagsData();
  }, []);

  const handleTagSearchOpen = () => setSearchOpen(!searchOpen);

  const handleAddTag = (ele: { tagId: number; tagName: string }) => {
    setTags((prev) => [...prev, ele]);
  };

  const handleRemoveTag = (ele: { tagId: number; tagName: string }) => {
    setTags((prev) => prev.filter((el) => el.tagId !== ele.tagId));
  };

  const handleBoardTitle = (title: string) => {
    setBoardTitle(title);
  };

  const handleBoardContent = (content: string) => {
    setBoardContent(content);
  };

  const handleBoardImage = (url: {
    imageId: number;
    boardImageUrl: string;
  }) => {
    setBoardImageUrl((prev) => [...prev, url]);
  };

  const handleBoardSubmit = () => {
    const newBoard = {
      boardTitle,
      boardContent,
      boardImageUrl,
      tags,
    };
    axios
      .post(`/boards`, newBoard, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
          Refresh: process.env.REACT_APP_REFRESH,
        },
      })
      .then((res) => navigate("/board/list"))
      .catch((err) => console.log(Error, err));
  };

  return (
    <Wrapper>
      <div>
        <BoardCreateController>
          <BoardCreateTagController>
            <Button
              onClick={handleTagSearchOpen}
              type="button"
              width={`--x-large`}
              radius={`--large`}
              borderColor={`--color-main`}
            >
              <SvgSize>
                <BsPlusLg />
              </SvgSize>
            </Button>
            {searchOpen ? (
              <BoardTagSearch tagData={tagData} onClick={handleAddTag} />
            ) : (
              <BoardCreateTags tags={tags} onClick={handleRemoveTag} />
            )}
          </BoardCreateTagController>
          <BoardCreateBtn onClick={handleBoardSubmit} />
        </BoardCreateController>
        <BoardCreateInput
          title={handleBoardTitle}
          content={handleBoardContent}
          image={handleBoardImage}
        />
      </div>
    </Wrapper>
  );
}

export default BoardCreate;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  > div {
    width: 70%;
    height: auto;

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const BoardCreateController = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoardCreateTagController = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;
`;

const SvgSize = styled.div`
  font-size: var(--small);
  display: flex;
  justify-content: center;
  align-items: center;
`;
