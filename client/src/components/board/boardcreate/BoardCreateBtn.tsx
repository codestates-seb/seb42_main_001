import { IBoardCreateBtn } from '../../../util/interfaces/boards.interface';
import Button from '../../UI/Button';

function BoardCreateBtn({ handleBoardSubmit }: IBoardCreateBtn) {
  return (
    <Button
      type='submit'
      bgColor={`--color-main`}
      color={`--color-white`}
      borderColor={`--color-main`}
      width={`--5x-large`}
      onClick={handleBoardSubmit}
    >
      submit
    </Button>
  );
}

export default BoardCreateBtn;
