import { useAppSelector } from '../../redux/hooks/hooks';
import MyPageBoardComment from './MyPageBoardComment';

function MyPageBoardCommentList() {
  const writeBoardCommentsList = useAppSelector(
    state => state.auth.userInfo.writeBoardComments,
  );

  return (
    <>
      {writeBoardCommentsList
        ? writeBoardCommentsList.map(ele => (
            <MyPageBoardComment
              key={ele.commentId}
              ele={ele}></MyPageBoardComment>
          ))
        : null}
    </>
  );
}

export default MyPageBoardCommentList;
