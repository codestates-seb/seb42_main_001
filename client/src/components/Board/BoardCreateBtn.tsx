import Button from "../UI/Button";

function BoardCreateBtn() {
  return (
    <Button
      type="submit"
      bgColor={`--color-main`}
      color={`--color-white`}
      borderColor={`--color-main`}
      width={`--5x-large`}
    >
      submit
    </Button>
  );
}

export default BoardCreateBtn;
