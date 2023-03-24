import { Link } from 'react-router-dom';
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
            <Link to={`/board/detail/${ele.boardId}`}>
              <MyPageBoardComment
                key={ele.commentId}
                ele={ele}></MyPageBoardComment>
            </Link>
          ))
        : null}
    </>
  );
}

export default MyPageBoardCommentList;
