import React from 'react'
import styled from 'styled-components'
import Card from '../../UI/Card'


interface MenuItemProps {
    title: string;
}

function ArticleDetailMenuItem({ title }: MenuItemProps) {
    return (
        <MainContainer>
            <Card>
                <SizeContainer>
                    {title}
                </SizeContainer>
            </Card>
        </MainContainer>
    )
}

export default ArticleDetailMenuItem

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: var(--x-small);
    color: var(--color-main);
    opacity: 0.6;
    font-weight: var(--weight-small);
    transition: .4s;

    &:hover {
        opacity: 1;
        transition: .4s;
    }
    &:active {
        opacity: 1;
        transition: .4s;
    }
`

const SizeContainer = styled.div`
    padding: var(--medium);
`