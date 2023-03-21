import styled from "styled-components";

interface MainArrowButtonProps {
  arrow: any;
  onClick: () => void;
}

const MainArrowButton = ({ arrow, onClick }: MainArrowButtonProps) => {
  return (
    <MainArrowButtonContainer onClick={onClick}>
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
    font-size: var(--4x-large);
    color: var(--color-white);
    cursor: pointer;
    > svg {
      opacity: 0.5;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 400px;
  }
`;
