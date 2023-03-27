import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainDrinksDetail from "../components/Drinks/DrinksDetail/MainDrinksDetail";
import { IDrinksDetail } from "../util/interfaces/drinks.inerface";

function DrinksDetail() {
  const { drinkId } = useParams<{ drinkId: string }>();
  const [drinksDetail, setDrinksDetail] = useState<IDrinksDetail>();

  useEffect(() => {
    const handleGetDrinksDetail = async () => {
      try {
        const res = await axios.get(`/drinks/${drinkId}`);
        setDrinksDetail(res.data);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
      }
    };
    handleGetDrinksDetail();
  }, [drinkId]);

  return <MainDrinksDetail drinksDetail={drinksDetail} />;
}

export default DrinksDetail;
