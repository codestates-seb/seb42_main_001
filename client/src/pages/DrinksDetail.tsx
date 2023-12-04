import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import customAxios from '../api/customAxios';
import MainDrinksDetail from '../components/drinks/drinksDetail/MainDrinksDetail';
import { IDrinksDetail } from '../util/interfaces/drinks.inerface';
import { ILikes } from '../util/interfaces/drinks.inerface';

function DrinksDetail() {
  const { drinkId } = useParams<{ drinkId: string }>();
  const [drinksDetail, setDrinksDetail] = useState<IDrinksDetail>();
  const [drinksLike, setDrinksLike] = useState(false);

  useEffect(() => {
    const handleGetDrinksDetail = async () => {
      try {
        const res = await customAxios.get(`/drinks/${drinkId}`);
        setDrinksDetail(res.data);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
      }
    };
    const handleGetDrinksLike = async () => {
      try {
        const res = await customAxios.get(`/drinks`);
        const data = res.data.likeList?.some(
          (drinkLike: ILikes) => drinkLike.drinkId === Number(drinkId)
        );
        setDrinksLike(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleGetDrinksDetail();
    handleGetDrinksLike();
  }, [drinkId]);

  return (
    <MainDrinksDetail drinksDetail={drinksDetail} drinksLike={drinksLike} />
  );
}

export default DrinksDetail;
