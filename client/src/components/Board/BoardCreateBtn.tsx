import Button from "../UI/Button";

interface BoardCreateBtnProps {
  onClick: () => void;
}

function BoardCreateBtn({ onClick }: BoardCreateBtnProps) {
  return (
    <Button
      type="submit"
      bgColor={`--color-main`}
      color={`--color-white`}
      borderColor={`--color-main`}
      width={`--5x-large`}
      onClick={onClick}
    >
      submit
    </Button>
  );
}

export default BoardCreateBtn;
