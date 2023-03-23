import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DrinksContents from "./DrinksContents";
import { useSelector, useDispatch } from 'react-redux';
import DrinksInfo from "./DrinksInfo";
import Loading from "../../UI/Loading";
import axios from "axios";

import { setDrinksData, setLikesData, setIsLoading } from '../../../redux/slice/drinks/drinksListSlice'
import { setTagData } from '../../../redux/slice/drinks/drinksTagsSlice'
import { RootState } from '../../../redux/store/store'

function MainDrinks() {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const dispatch = useDispatch()
  const { isLoading, drinksData, likesData, searchTag } = useSelector(
    (state: RootState) => state.drinkslist
  );
  const { tagData } = useSelector(
    (state: RootState) => state.drinksTags
  );

  useEffect(() => {
    const handleDrinksTagData = async () => {
      const res = await axios.get(`/tags`);
      dispatch(setTagData(res.data));
    };
    const handleDrinksData = async () => {
      try {
        const response = await axios.get('/drinks');
        const { data } = response;
        dispatch(setDrinksData(data.data));
        dispatch(setLikesData(data.likeList));
        dispatch(setIsLoading());
      } catch (error) {
        console.log(error);
      }
    }
    handleDrinksTagData()
    handleDrinksData()
  }, [dispatch])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page])

  return (
    <>
      {
        isLoading
          ? <Loading />
          :
          <MainDrinksContainer>
            <DrinksInfo tagData={tagData} search={search} setSearch={setSearch} setPage={setPage} />
            <DrinksContents search={search} searchTag={searchTag} page={page} setPage={setPage} />
          </MainDrinksContainer>
      }
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