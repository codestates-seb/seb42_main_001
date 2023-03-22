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
            <MyPageDrinkComment
              key={ele.commentId}
              ele={ele}></MyPageDrinkComment>
          ))
        : null}
    </>
  );
}

export default MyPageDrinkCommentList;
