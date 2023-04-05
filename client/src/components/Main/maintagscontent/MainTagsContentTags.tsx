import { useState, useEffect } from 'react';
import customAxios from '../../../api/customAxios';

import styled from 'styled-components';
import MainTagsContentTag from './MainTagsContentTag';
import { ITags } from '../../../util/interfaces/drinks.inerface';
import { Link } from 'react-router-dom';

function MainTagsContentTags() {
  const [tagData, setTagData] = useState<ITags[]>([]);

  const handleDrinksTagData = async () => {
    const res = await customAxios.get(`/tags/best`);
    setTagData(res.data);
  };

  useEffect(() => {
    handleDrinksTagData();
  }, []);

  return (
    <MainContainer>
      <TextWrap>Tags</TextWrap>
      <SubTextWrap>
        상황별, 향별, 다양한 태그로 Drinks를 만나 보세요
      </SubTextWrap>
      <TagWrap>
        {tagData.map((tag) => {
          return (
            <Link to={`/tags/${tag.tagId}`} key={tag.tagId}>
              <MainTagsContentTag tagName={tag.tagName} />
            </Link>
          );
        })}
      </TagWrap>
    </MainContainer>
  );
}

export default MainTagsContentTags;

const MainContainer = styled.div`
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 80px;
  color: var(--color-main);

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    margin-right: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TextWrap = styled.div`
  font-size: var(--x-large);
  margin-bottom: var(--x-small);
`;

const SubTextWrap = styled.div`
  margin-bottom: var(--large);
`;

const TagWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  align-items: center;
`;
