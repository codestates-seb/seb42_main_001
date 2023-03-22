import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import DrinksContents from "./DrinksContents";
import DrinksInfo from "./DrinksInfo";
import Loading from "../../UI/Loading";
import axios from "axios";
import { Drinks } from "../../../interfaces/drinks.inerface";
import { Likes } from "../../../interfaces/drinks.inerface";

interface Tags {
  tagId: number;
  tagName?: string;
};

function MainDrinks() {
  const [search, setSearch] = useState<string>('');
  const [searchTag, setSearchTag] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [tagData, setTagData] = useState<Tags[]>([])

  const [drinksData, setDrinksData] = useState<Drinks[]>([])
  const [likesData, setLikesData] = useState<Likes[]>([])

  // tags
  const handleDrinksTagData = async () => {
    const res = await axios.get(`/tags`);
    setTagData(res.data);
  };

  // drinks
  const handleDrinksData = useCallback(async () => {
    try {
      const response = await axios.get('/drinks');
      const { data } = response;
      setDrinksData(data.data)
      setLikesData(data.likeList)
      setIsLoading(false)
    }
    catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    handleDrinksTagData()
    handleDrinksData()
    console.log('ggg')
  }, [handleDrinksData])

  return (
    <>
      {
        isLoading
          ? <Loading />
          :
          <MainDrinksContainer>
            <DrinksInfo tagData={tagData} search={search} setSearch={setSearch} setSearchTag={setSearchTag} setPage={setPage} />
            <DrinksContents search={search} searchTag={searchTag} page={page} setPage={setPage} drinksData={drinksData} likesData={likesData} />
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