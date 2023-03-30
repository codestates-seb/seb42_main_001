// import ReactFullpage from "@fullpage/react-fullpage"
import styled from "styled-components"
import Footer from "../layout/Footer/Footer"
import Header from "../layout/Header/Header"
import MainBannerContent from "./MainBannerContent"
import MainDrinksContent from "./MainDrinksContent"
import MainTagsContent from "./MainTagsContent"
import MainTextContent from "./MainTextContent"

function MainVisual() {


    return (
        <MainContainer>
            <Header />
            <MainBannerContent />
            <MainTextContent />
            <MainDrinksContent />
            <SubContainer>
                <MainTagsContent />
            </SubContainer>
            <Footer />
        </MainContainer>
    )
}

export default MainVisual

const MainContainer = styled.div`
    background-color: var(--color-main);
`

const SubContainer = styled.div`
    background-color: var(--color-sub-light-gray);
`