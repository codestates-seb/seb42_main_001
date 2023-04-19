import styled from 'styled-components'
import ArticleDetailBack from '../components/article/articleDetail/ArticleDetailBack'
import ArticleDetails from '../components/article/articleDetail/ArticleDetails'

function ArticleDetail() {
    return (
        <MainContainer>
            <ArticleDetailBack />
            <ArticleDetails />
        </MainContainer>
    )
}

export default ArticleDetail

const MainContainer = styled.div`
    width: 100%;
    background-color: var(--color-main);
`