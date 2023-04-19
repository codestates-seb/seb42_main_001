import Button from '../../UI/Button';

interface BoardCreateBtnProps {
  handleBoardSubmit: () => void;
}

function BoardCreateBtn({ handleBoardSubmit }: BoardCreateBtnProps) {
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
