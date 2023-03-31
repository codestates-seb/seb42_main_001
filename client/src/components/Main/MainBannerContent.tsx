import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainDontMove from './MainDontMove';
import MainBannerContentTitle from './mainbannercontent/MainBannerContentTitle';
import bowmore from '../../assets/img/bowmore.jpg';
import irish from '../../assets/img/irish.jpg';
import jackblack from '../../assets/img/jack-black.jpg';
import drink1887 from '../../assets/img/1887.jpg';
import Header from "../layout/Header/Header"

interface MainLayoutProps {
  bgColor?: boolean;
  img?: boolean;
}

function MainBannerContent() {
  const [page, setPage] = useState(0);

  const handlePreClick = () => {
    setPage((prev) => (prev - 1 + 4) % 4);
  };

  const handleNextClick = () => {
    setPage((prev) => (prev + 1) % 4);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <div>

      <HeaderWrap>
        <Header headerBgColor={`--color-trans`}
          headerColor={`--color-white`} />
      </HeaderWrap>

      <Wrap>
        <MainDontMove
          handlePreClick={handlePreClick}
          handleNextClick={handleNextClick}
        />
      </Wrap>

      <ContentWrap>
        <ContentBox page={page}>
          <ContainerBox>
            <Container>
              <TextWarp>
                <MainBannerContentTitle />
              </TextWarp>
            </Container>
          </ContainerBox>
          <>
            <ContainerBox1>
              <ContainerBox1Text>
                <Box1TextTitle>New Drinks</Box1TextTitle>
                <Box1TextBody>
                  <p>The old bushmills distillery</p>
                  <p>Irish Whiskey</p>
                </Box1TextBody>
              </ContainerBox1Text>
            </ContainerBox1>
            <ContainerBox2>
              <ContainerBox2Text>
                <Box2TextTitle>Jack Daniels</Box2TextTitle>
                <Box2TextBody>
                  <p>Olad No.7 Brand</p>
                </Box2TextBody>
              </ContainerBox2Text>
            </ContainerBox2>
            <ContainerBox3>
              <ContainerBox3Text>
                <Box3TextTitle>Since 1887</Box3TextTitle>
                <Box3TextBody>
                  <p>Old Drinks, With's Key</p>
                </Box3TextBody>
              </ContainerBox3Text>
            </ContainerBox3>
          </>
        </ContentBox>
      </ContentWrap>
    </div>
  );
}

export default MainBannerContent;


const HeaderWrap = styled.div`
    width: 100%;
    position: absolute;
    z-index: 20;
`

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TextWarp = styled.div`
  width: 100%;
  margin-bottom: 400px;
  margin-left: 100px;
  @media only screen and (max-width: 1150px) {
    margin-bottom: 50vh;
    margin-left: 5vw;
  }
`;

const ContentWrap = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

const ContentBox = styled.div<{ page: number }>`
  width: 400vw;
  height: 100vh;
  display: flex;
  margin-left: 300%;
  transition: 1.5s;
  transform: ${(props) => `translateX(-${75 + props.page * 25}%)`};
`;

const Container = styled.div<MainLayoutProps>`
  width: 100%;
  max-width: 1420px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerBox = styled.div<MainLayoutProps>`
  width: 100vw;
  background-image: url(${bowmore});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and(max-width: 768px) {
    width: 100vw;
    background-position: 40% 50%;
    background-size: cover;
  }
`;

const ContainerBox1 = styled(ContainerBox) <MainLayoutProps>`
  background-image: url(${irish});
`;
const ContainerBox1Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;  
  flex-direction: column;
  padding-left: 450px;

  @media only screen and (max-width: 1150px) {
    padding: 0;
    padding-top: 10vh;
    align-items: center;
  }
`;
const Box1TextTitle = styled.div`
  font-size: var(--x-large);
  font-weight: var(--weight-large);
  color: var(--color-white);
  margin-bottom: 20px;
`;
const Box1TextBody = styled.div`
  font-size: var(--small);
  color: var(--color-white);
`;

const ContainerBox2 = styled(ContainerBox) <MainLayoutProps>`
  background-image: url(${jackblack});
`;
const ContainerBox2Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 500px;

  @media only screen and (max-width: 1150px) {
    padding-bottom: 50vh;
    padding-right: 0;
    align-items: center;
    text-align: center;
  }
`;
const Box2TextTitle = styled.div`
  font-size: var(--2x-large);
  font-weight: var(--weight-large);
  color: var(--color-white);
  margin-bottom: 20px;
`;
const Box2TextBody = styled.div`
  font-size: var(--small);
  color: var(--color-white);
`;

const ContainerBox3 = styled(ContainerBox) <MainLayoutProps>`
  background-image: url(${drink1887});
`;
const ContainerBox3Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 350px;

  @media only screen and (max-width: 1150px) {
    padding: 0;
    padding-top: 10vh;
    align-items: center;
  }
`;
const Box3TextTitle = styled.div`
  font-size: var(--x-large);
  font-weight: var(--weight-large);
  color: var(--color-white);
  margin-bottom: 20px;
`;
const Box3TextBody = styled.div`
  font-size: var(--small);
  color: var(--color-white);
`;
