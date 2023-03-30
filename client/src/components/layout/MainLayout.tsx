import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';

interface MainLayoutProps {
  bgColor?: boolean;
}

function MainLayout({ bgColor }: MainLayoutProps) {
  return (
    <DefaultSize bgColor={bgColor}>
      {bgColor ? (
        <Header
          headerBgColor={`--color-main`}
          headerColor={`--color-white`}
          hover={`--color-sub-light-gray`}
        />
      ) : (
        <Header profileColor={`--color-main`} hover={`--color-white`} />
      )}
      <Outlet />
      <Footer />
    </DefaultSize>
  );
}

export default MainLayout;

const DefaultSize = styled.div<MainLayoutProps>`
  width: 100vw;
  height: 100%;
  background-color: ${(props) =>
    props.bgColor ? `var(--color-sub-light-gray)` : `var(--color-main)`};
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
