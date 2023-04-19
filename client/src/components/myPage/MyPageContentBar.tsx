import styled from 'styled-components';

interface BarProps {
  setSelectedBar?: (state: boolean) => void;
  setSelectedBarBorad?: (state: string) => void;
  board?: string;
}

function MyPageContentBar({
  setSelectedBar,
  setSelectedBarBorad,
  board,
}: BarProps) {
  const handleTrueChange = () => {
    if (setSelectedBarBorad) {
      setSelectedBarBorad('Comments');
    } else if (setSelectedBar) {
      setSelectedBar(true);
    }
  };

  const handleFalseChange = () => {
    if (setSelectedBarBorad) {
      setSelectedBarBorad('Likes');
    } else if (setSelectedBar) {
      setSelectedBar(false);
    }
  };

  const handleMiddleChange = () => {
    if (setSelectedBarBorad) {
      setSelectedBarBorad('My');
    }
  };

  return (
    <MainContainer>
      <BarContainer onClick={handleFalseChange}>Likes</BarContainer>
      {board ? (
        <BarContainer onClick={handleMiddleChange}>My</BarContainer>
      ) : null}
      <BarContainer onClick={handleTrueChange}>Commnets</BarContainer>
    </MainContainer>
  );
}

export default MyPageContentBar;

const MainContainer = styled.div`
  display: flex;
`;

const BarContainer = styled.div`
  font-size: var(--x-small);
  color: var(--color-main);
  padding: var(--2x-small) var(--x-small);
  border: 1px solid var(--color-main);
  border-radius: var(--medium);
  margin-right: var(--3x-small);
  margin-bottom: var(--x-small);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: var(--color-main);
    color: var(--color-white);
  }
`;
