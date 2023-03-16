import React from 'react'
import styled from 'styled-components'
import Card from '../../UI/Card'


interface MenuItemProps {
    title: string;
    value: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function ArticleDetailMenuItem({ title, value, onClick }: MenuItemProps) {
    return (
        <MainContainer>
            <Card>
                <SizeContainer onClick={onClick} value={value}>
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
    cursor: pointer;

    &:hover {
        opacity: 1;
        transition: .4s;
    }
    &:active {
        opacity: 1;
        transition: .4s;
    }
`

const SizeContainer = styled.button`
    width: 100%;
    display: flex;
    border: 0;
    background-color: transparent;
    padding: var(--medium);
`