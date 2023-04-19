import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import customAxios from '../../../api/customAxios';
import DrinksContents from './DrinksContents';
import DrinksInfo from './DrinksInfo';
import Loading from '../../ui/Loading';

import {
  setDrinksData,
  setLikesData,
  setIsLoading,
} from '../../../redux/slice/drinks/drinksListSlice';
import { setTagData } from '../../../redux/slice/drinks/drinksTagsSlice';
import { RootState } from '../../../redux/store/store';

function MainDrinks() {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();

  const { isLoading, searchTag } = useSelector(
    (state: RootState) => state.drinkslist,
  );
  const { tagData } = useSelector((state: RootState) => state.drinksTags);

  useEffect(() => {
    const handleDrinksTagData = async () => {
      const res = await customAxios.get(`/tags`);
      dispatch(setTagData(res.data));
    };
    const handleDrinksData = async () => {
      try {
        const res = await customAxios.get('/drinks');
        const { data } = res;
        dispatch(setDrinksData(data.data));
        dispatch(setLikesData(data.likeList));
        dispatch(setIsLoading());
      } catch (error) {
        console.log(error);
      }
    };
    handleDrinksTagData();
    handleDrinksData();
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MainDrinksContainer>
          <DrinksInfo
            tagData={tagData}
            search={search}
            setSearch={setSearch}
            setPage={setPage}
          />
          <DrinksContents
            search={search}
            searchTag={searchTag}
            page={page}
            setPage={setPage}
          />
        </MainDrinksContainer>
      )}
    </>
  );
}

export default MainDrinks;

const MainDrinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`;
