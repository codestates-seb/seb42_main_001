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
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: var(--x-large);

  @media only screen and (max-width: 1150px) {
    justify-content: center;
    margin-left: 0;
    height: 50%;
  }
`;

const ImgWrap = styled.img`
  width: 40vw;
  border-radius: var(--2x-small);
  box-shadow: 1px 1px 30px rgba(59, 30, 30, 0.7);
  @media only screen and (max-width: 1150px) {
    width: 50vw;
    max-width: 270px;
  }
`;
