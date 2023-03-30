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
    width: 1420px;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-sub-light-gray);
`