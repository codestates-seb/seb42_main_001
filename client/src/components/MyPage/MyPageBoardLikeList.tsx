import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import MyPageBoardLike from './MyPageBoardLike';

function MyPageBoardLikeList() {
  const likeBoardsList = useAppSelector(
    state => state.auth.userInfo.likeBoards,
  );

  return (
    <>
      {likeBoardsList
        ? likeBoardsList.map(ele => (
            <Link to={`/board/detail/${ele.boardId}`}>
              <MyPageBoardLike key={ele.boardId} ele={ele}></MyPageBoardLike>
            </Link>
          ))
        : null}
    </>
  );
}

export default MyPageBoardLikeList;
