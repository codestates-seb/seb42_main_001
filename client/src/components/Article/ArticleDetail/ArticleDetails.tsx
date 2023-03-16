import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ArticleDetailContent from './ArticleDetailContent'
import ArticleDetailMenu from './ArticleDetailMenu'

function ArticleDetails() {
    const [detailid, setDetailId] = useState<number>(1)

    useEffect(() => {
        console.log(detailid);
    }, [detailid]);

    const handleIdChange = (e: React.MouseEvent<HTMLElement>) => {
        const newId = parseInt((e.target as HTMLButtonElement).value);
        setDetailId(newId);
    }

    return (
        <MainContainer>
            <FlexMenu>
                <ArticleDetailMenu onClick={handleIdChange} />
            </FlexMenu>
            <FlexContent>
                <ArticleDetailContent />
            </FlexContent>
        </MainContainer>
    )
}

export default ArticleDetails

const MainContainer = styled.div`
    width: 100%;
    height: 100vmax;
    display: flex;
    align-items: flex-start;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-bottom: var(--5x-large);
    }
`

const FlexMenu = styled.div`
    flex: 3;
    padding-right: var(--5x-large);

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
`

const FlexContent = styled.div`
    flex: 7;
        display: flex;
`