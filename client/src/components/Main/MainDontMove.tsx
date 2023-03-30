import styled from "styled-components";

import ArrowLeft from '../../assets/icon/arrow-01.png'
import ArrowRight from '../../assets/icon/arrow-02.png'

interface MainDontMoveProps {
  handlePreClick: () => void;
  handleNextClick: () => void;
}

const MainDontMove = ({
  handlePreClick,
  handleNextClick,
}: MainDontMoveProps) => {
  const handleLeft = () => {
    handlePreClick();
  };

  const handleRight = () => {
    handleNextClick();
  };

  return (
    <MainDontMoveContauner>
      <ImgWrap src={ArrowLeft} alt='ArrowLeft' onClick={handleLeft} />
      <ImgWrap src={ArrowRight} alt='ArrowRight' onClick={handleRight} />
    </MainDontMoveContauner>
  );
};

export default MainDontMove;

const MainDontMoveContauner = styled.div`
  width: 85%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const ImgWrap = styled.img`
  cursor: pointer;
  width: 90px;
`