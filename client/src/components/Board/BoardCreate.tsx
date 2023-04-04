import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import { useAppSelector } from '../../redux/hooks/hooks';
import { useEffect, useState } from 'react';

function BoardCreate() {
  const navigate = useNavigate();
  const login = useAppSelector((state) => state.auth.isLogin);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(login);
  }, [login]);

  const handleNotLogin = () => {
    alert('로그인이 필요한 서비스입니다.');
    navigate('/signup');
  };

  return (
    <>
      {isLogin ? (
        <Link to='/board/create'>
          <Button
            type='button'
            borderColor={`--color-main`}
            width={`--5x-large`}
          >
            New Post
          </Button>
        </Link>
      ) : (
        <Button
          type='button'
          borderColor={`--color-sub-gray`}
          width={`--5x-large`}
          bgColor={`--color-sub-gray`}
          color={`--color-main`}
          onClick={handleNotLogin}
        >
          New Post
        </Button>
      )}
    </>
  );
}

export default BoardCreate;
