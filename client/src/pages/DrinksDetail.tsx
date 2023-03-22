import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MainDrinksDetail from '../components/Drinks/DrinksDetail/MainDrinksDetail';
import { IDrinksDetail } from '../interfaces/drinks.inerface';

function DrinksDetail() {
  const { drinkId } = useParams<{ drinkId: string }>();
  const [drinksDetail, setDrinksDetail] = useState<IDrinksDetail>();

  const handleGetDrinksDetail = useCallback(async () => {
    try {
      const res = await axios.get(`/drinks/${drinkId}`);
      setDrinksDetail(res.data);
      window.scrollTo(0, 0);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [drinkId]);

  useEffect(() => {
    handleGetDrinksDetail();
  });

  return <MainDrinksDetail drinksDetail={drinksDetail} />;
}

export default DrinksDetail;
