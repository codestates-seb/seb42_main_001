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
            <MyPageBoardLike key={ele.boardId} ele={ele}></MyPageBoardLike>
          ))
        : null}
    </>
  );
}

export default MyPageBoardLikeList;
