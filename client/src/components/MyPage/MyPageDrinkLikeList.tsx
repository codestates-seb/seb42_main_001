import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import MyPageDrinkLike from './MyPageDrinkLike';

function MyPageDrinkLikeList() {
  const likeDrinksList = useAppSelector(
    state => state.auth.userInfo.likeDrinks,
  );

  return (
    <>
      {likeDrinksList
        ? likeDrinksList.map(ele => (
            <Link to={`/drinks/${ele.drinkId}`}>
              <MyPageDrinkLike key={ele.drinkId} ele={ele}></MyPageDrinkLike>
            </Link>
          ))
        : null}
    </>
  );
}

export default MyPageDrinkLikeList;
