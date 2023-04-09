import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { BsPlusLg } from 'react-icons/bs';
import BoardCreateTags from '../components/Board/BoardCreateTags';
import BoardCreateBtn from '../components/Board/BoardCreateBtn';
import BoardCreateInput from '../components/Board/BoardCreateInput';
import Button from '../components/UI/Button';
import BoardTagSearch from '../components/Board/BoardTagSearch';
import customAxios from '../api/customAxios';
import { Data, SetData } from '../util/interfaces/boards.interface';

function BoardCreate() {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [tagData, setTagData] = useState([]);
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContent, setBoardContent] = useState('');
  const [boardImageUrl, setBoardImageUrl] = useState<Imgs[]>([]);
  const [tags, setTags] = useState<Tags[]>([]);
  const [iseditData, setIsEditData] = useState<Data>();
  const [preData, setPreData] = useState<SetData>();
  const [isTime, setTime] = useState(0);

  const navigate = useNavigate();
  const { editId } = useParams();

  type Tags = { tagId: number; tagName: string };
  type Imgs = {
    imageId: number;
    boardImageUrl: string;
  };

  useEffect(() => {
    const tagsData = async () => {
      const res = await customAxios.get(`/tags`);
      setTagData((prevTag) => res.data);
    };

    const editData = async () => {
      const res = await customAxios.get(`/boards/${editId}`);
      setIsEditData((prev) => res.data);
      setTags((prev) => res.data.tags);
      setBoardImageUrl((prev) => res.data.boardImages);
    };
    const getItem = localStorage.getItem('data');
    const getEditItem = localStorage.getItem('editData');

    tagsData();
    if (editId) {
      localStorage.removeItem('data');
      if (getEditItem) {
        if (
          window.confirm(
            '전에 작성하던 게시글이 남아 있습니다. 불러오시겠습니까?'
          )
        ) {
          const item = JSON.parse(getEditItem);
          setPreData(item);
          setTags(item.tags);
          setBoardImageUrl(item.boardImageUrl);
        } else {
          localStorage.removeItem('editData');
          editData();
        }
      } else {
        editData();
      }
    } else if (getItem) {
      if (
        window.confirm(
          '전에 작성하던 게시글이 남아 있습니다. 불러오시겠습니까?'
        )
      ) {
        const item = JSON.parse(getItem);
        setPreData(item);
        setTags(item.tags);
        setBoardImageUrl(item.boardImageUrl);
      } else {
        localStorage.removeItem('data');
      }
    }
  }, [editId]);

  useEffect(() => {
    const interval = setInterval(() => {
      const setData = {
        boardTitle,
        boardContent,
        boardImageUrl,
        tags,
        editId,
      };
      const jsonData = JSON.stringify(setData);
      localStorage.setItem(editId ? 'editData' : 'data', jsonData);
      setTime((prev) => prev + 1);
    }, 30000);
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTime]);

  const handleTagSearchOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSearchOpen((prev) => !prev);
  };
  const handleTagSearchClose = () => {
    setSearchOpen(false);
  };

  const handleAddTag = (ele: { tagId: number; tagName: string }) => {
    if (tags.length === 0) {
      setTags([ele]);
    } else if (tags.filter((el) => el.tagId === ele.tagId).length === 0) {
      setTags((prev) => [...prev, ele]);
    }
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
    if (boardTitle.trim() === '') {
      alert('제목을 작성해 주세요');
    } else if (boardContent.trim() === '') {
      alert('본문을 작성해 주세요');
    } else {
      const newBoard = {
        boardTitle,
        boardContent,
        boardImageUrl,
        tags,
      };
      if (!editId) {
        customAxios
          .post(`/boards`, newBoard)
          .then((res) => {
            localStorage.removeItem('data');
            navigate('/board/list');
            alert('성공적으로 작성되었습니다.');
            window.location.reload();
          })
          .catch((err) => console.log(Error, err));
      } else {
        customAxios
          .patch(`/boards/${editId}`, newBoard)
          .then((res) => {
            localStorage.removeItem('editData');
            navigate('/board/list');
            alert('성공적으로 수정되었습니다.');
            window.location.reload();
          })
          .catch((err) => console.log(Error, err));
      }
    }
  };

  return (
    <Wrapper onClick={handleTagSearchClose}>
      <div>
        <BoardCreateController>
          <BoardCreateTagController>
            <Button
              onClick={handleTagSearchOpen}
              type='button'
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
          iseditData={iseditData}
          preData={preData}
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

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
`;

const BoardCreateTagController = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 50vw;
  }
`;

const SvgSize = styled.div`
  font-size: var(--small);
  display: flex;
  justify-content: center;
  align-items: center;
`;
