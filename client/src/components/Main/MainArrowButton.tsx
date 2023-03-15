import styled from "styled-components";

interface MainArrowButtonProps {
  arrow: any;
}

const MainArrowButton = ({ arrow }: MainArrowButtonProps) => {
  return (
    <MainArrowButtonContainer>
      <div>{arrow}</div>
    </MainArrowButtonContainer>
  );
};

export default MainArrowButton;

const MainArrowButtonContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    font-size: var(--xxx-large);
    color: var(--color-white);
    cursor: pointer;
  }

    @media only screen and (max-width: 768px) {
  width: 400px;
  }
`;
