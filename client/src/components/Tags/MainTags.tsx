import { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import customAxios from '../../api/customAxios';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { getTagData } from '../../redux/slice/tag/tagSlice';
import TagsBody from './TagsBody';
import TagsTitle from './TagsTitle';

const MainTags = () => {
  const { tagid } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await customAxios.get(`/tags/${tagid}`);
        if (res.status === 200) {
          dispatch(getTagData(res.data));
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [tagid, dispatch]);

  return (
    <MainTagsContainer>
      <TagsTitle />
      <TagsBody />
    </MainTagsContainer>
  );
};

export default MainTags;

const MainTagsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 160px 0;
  display: flex;
  flex-direction: column;
`;
