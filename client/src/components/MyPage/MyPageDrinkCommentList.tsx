import { Link } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks/hooks';
import MyPageDrinkComment from './MyPageDrinkComment';

function MyPageDrinkCommentList() {
  const drinkCommentsList = useAppSelector(
    state => state.auth.userInfo.writeDrinkComments,
  );

  return (
    <>
      {drinkCommentsList
        ? drinkCommentsList.map(ele => (
            <Link to={`/drinks/${ele.drinkId}`}>
              <MyPageDrinkComment
                key={ele.commentId}
                ele={ele}></MyPageDrinkComment>
            </Link>
          ))
        : null}
    </>
  );
}

export default MyPageDrinkCommentList;
