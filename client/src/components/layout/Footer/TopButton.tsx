import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

function TopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <TopButtonStyled onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </TopButtonStyled>
  );
}

export default TopButton;

const TopButtonStyled = styled.button`
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: 1px solid var(--color-sub-dark-gray);
  padding-top: 4px;
  border-radius: 50%;
  background-color: transparent;
  color: var(--color-sub-dark-gray);

  @media only screen and (max-width: 320px) {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border: 1px solid var(--color-sub-dark-gray);
    padding-top: 4px;
    border-radius: 50%;
    background-color: transparent;
    color: var(--color-sub-dark-gray);

    svg {
      font-size: var(--small);
    }
  }
`;
