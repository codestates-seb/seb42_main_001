import styled from "styled-components"
import MainTagsContentImg from "./maintagscontent/MainTagsContentImg"
import MainTagsContentTags from "./maintagscontent/MainTagsContentTags"

function MainTagsContent() {
    return (
        <MainContainer>
            <MainTagsContentTags />
            <MainTagsContentImg />
        </MainContainer>
    )
}

export default MainTagsContent

const MainContainer = styled.div`
    width: 100%;
    height: 50vh;
    padding: 0 320px;
    display: flex;
    justify-content: center;
    align-items: center;
`