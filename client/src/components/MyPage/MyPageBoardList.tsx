import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import MyPageBoardComment from './MyPageBoardComment';

function MyPageBoardList() {
  const writeBoardsList = useAppSelector(
    state => state.auth.userInfo.writeBoards,
  );

  return (
    <>
      {writeBoardsList
        ? writeBoardsList.map(ele => (
            <Link to={`/board/detail/${ele.boardId}`}>
              <MyPageBoardComment
                key={ele.boardId}
                ele={ele}
                board="board"></MyPageBoardComment>
            </Link>
          ))
        : null}
    </>
  );
}

export default MyPageBoardList;
