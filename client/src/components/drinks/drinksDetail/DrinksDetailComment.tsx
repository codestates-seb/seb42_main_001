import styled from 'styled-components';
import Comment from '../../ui/comment/Comment';
import CommentInput from '../../ui/comment/CommentInput';
import { IDrinksDetailProps } from '../../../util/interfaces/drinks.inerface';

function DrinksDetailComment({ drinksDetail }: IDrinksDetailProps) {
  return (
    <MainContainer>
      <CommentInput drinkId={drinksDetail?.drinkId} />
      {drinksDetail?.commentDrinks.map((el) => {
        el.drinkCommentId = el.commentId;
        return <Comment key={el.commentId} comments={el} />;
      })}
    </MainContainer>
  );
}

export default DrinksDetailComment;

const MainContainer = styled.div`
  margin-top: var(--4x-large);
  margin-bottom: calc(var(--4x-large) * 3);
`;
