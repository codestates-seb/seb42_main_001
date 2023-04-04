import { useEffect, useState } from 'react';
import styled from 'styled-components';

import customAxios from '../../api/customAxios';
import Card from '../UI/Card';

interface props {
  ele: {
    drinkId: number;
    drinkName: string;
  };
}

function MyPageDrinkLike({ ele }: props) {
  const [drinkImg, setDrinkImg] = useState('');

  useEffect(() => {
    const getDrinkData = async (id: number) => {
      try {
        const res = await customAxios.get(`drinks/${id}`);
        if (res.status === 200) {
          setDrinkImg(res.data.drinkImageUrl);
        }
      } catch (e) {
        console.error(e);
      }
    };

    getDrinkData(ele.drinkId);
  }, [ele.drinkId]);

  return (
    <Card>
      <MainContainer>
        <img src={`${drinkImg}`} alt="drinkImg"></img>
        <div>{ele.drinkName}</div>
      </MainContainer>
    </Card>
  );
}

export default MyPageDrinkLike;

const MainContainer = styled.div`
  width: 100%;
  height: var(--4x-large);
  display: flex;
  align-items: center;
  margin-bottom: var(--x-small);
  padding: var(--large);

  > img {
    width: 50px;
    aspect-ratio: auto;
    margin-right: var(--large);
  }
`;
