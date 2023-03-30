import styled from "styled-components"
import MainTagsContentTag from "./MainTagsContentTag"

function MainTagsContentTags() {
    return (
        <MainContainer>
            <TextWrap>
                Tags
            </TextWrap>
            <SubTextWrap>
                상황별, 향별, 다양한 태그로 Drinks를 만나 보세요
            </SubTextWrap>
            <TagWrap>
                <MainTagsContentTag />
            </TagWrap>
        </MainContainer>
    )
}

export default MainTagsContentTags

const MainContainer = styled.div`
    color: var(--color-main);
`

const TextWrap = styled.div`
    font-size: var(--x-large);
    margin-bottom: var(--x-small);
`

const SubTextWrap = styled.div`
    
`

const TagWrap = styled.div`
    width: 800px;
`