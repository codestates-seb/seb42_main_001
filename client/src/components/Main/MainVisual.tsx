// import ReactFullpage from "@fullpage/react-fullpage"
import styled from "styled-components"
import Footer from "../layout/Footer/Footer"
// import Header from "../layout/Header/Header"
import MainBannerContent from "./MainBannerContent"
import MainDrinksContent from "./MainDrinksContent"
import MainTagsContent from "./MainTagsContent"
import MainTextContent from "./MainTextContent"

function MainVisual() {


    return (
        <MainContainer>
            <MainBannerContent />
            <GrayBg>
                <MainTextContent />
            </GrayBg>
            <MainBg>
                <MainDrinksContent />
            </MainBg>
            <GrayBg>
                <MainTagsContent />
            </GrayBg>
            <Footer />
        </MainContainer>
    )
}

export default MainVisual

const HeaderWrap = styled.div`
    width: 100%;
    position: relative;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const GrayBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-sub-light-gray);
`

const MainBg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-main);
`