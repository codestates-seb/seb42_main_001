import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bar from '../../../assets/img/bar.jpg';

function MainTextContentImg() {
  return (
    <MainContainer>
      <Link to={`/article`}>
        <ImgWrap src={bar} alt='bar' />
      </Link>
    </MainContainer>
  );
}

export default MainTextContentImg;

const MainContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-left: var(--x-large);

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 0;
    margin-top: var(--large);
  }

  @media only screen and (max-width: 768px) {
    margin-top: var(--large);
  }
`;

const ImgWrap = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  border-radius: var(--2x-small);
  box-shadow: 1px 1px 30px rgba(59, 30, 30, 0.7);

  @media only screen and (max-width: 1024px) {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
