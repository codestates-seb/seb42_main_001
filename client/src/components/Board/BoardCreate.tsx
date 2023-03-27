import { Link } from "react-router-dom";
import Button from "../UI/Button";

function BoardCreate() {
  return (
    <Link to="/board/create">
      <Button type="button" borderColor={`--color-main`} width={`--5x-large`}>
        New Post
      </Button>
    </Link>
  );
}

export default BoardCreate;
