import styled from "styled-components"
import MainContentInfoImg from "./maincontentinfo/MainContentInfoImg"
import MainContentInfoText from "./maincontentinfo/MainContentInfoText"

function MainContentInfo() {
    return (
        <MainContainer>
            <MainContentInfoText />
            <MainContentInfoImg />
        </MainContainer>
    )
}

export default MainContentInfo

const MainContainer = styled.div`
    height: 2000px;
    background-color: red;
`