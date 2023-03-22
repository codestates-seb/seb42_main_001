import { useAppSelector } from '../../redux/hooks/hooks';
import MyPageDrinkLike from './MyPageDrinkLike';

function MyPageDrinkLikeList() {
  const likeDrinksList = useAppSelector(
    state => state.auth.userInfo.likeDrinks,
  );

  return (
    <>
      {likeDrinksList.map(ele => (
        <MyPageDrinkLike key={ele.drinkId} ele={ele}></MyPageDrinkLike>
      ))}
    </>
  );
}

export default MyPageDrinkLikeList;
