import React from 'react';
import styled from 'styled-components';

type PaginationProps = {
    total: number;
    limit: number;
    page: number;
    setPage: (state: number) => void;
    setLimit: (state: number) => void;
    isActive?: boolean;
    disabled?: boolean;
};

const Pagination = ({ total, limit, page, setPage }: PaginationProps) => {
    const numPages = Math.ceil(total / limit)

    return (
        <MainContainer>
            <nav>
                <ButtonArrow onClick={() => setPage(page - 1)} disabled={page === 1}>
                    {`<`}
                </ButtonArrow>
                {Array(numPages)
                    .fill(0)
                    .map((_, i) => (
                        <Button
                            key={i + 1}
                            onClick={() => setPage(i + 1)}
                            isActive={page === (i + 1)}
                        >
                            {i + 1}
                        </Button>
                    ))}
                <ButtonArrow onClick={() => setPage(page + 1)} disabled={page === numPages}>
                    {`>`}
                </ButtonArrow>
            </nav>
        </MainContainer >
    );
};

export default Pagination;

const MainContainer = styled.div`
    margin-top: var(--4x-large);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button: any = styled.button<PaginationProps>`
    margin-right: var(--3x-small);
    border: none;
    padding: var(--2x-small);
    width: var(--3x-large);
    height: var(--x-large);
    color: ${(props) => (props.isActive ? `var(--color-white)` : `var(--color-main)`)};
    border: none;
    border: 1px solid var(--color-main);
    border-radius: var(--2x-small);
    background-color: ${(props) => (props.isActive ? `var(--color-main)` : `var(--color-white)`)};
    cursor: pointer;
    transition: 0.5s;

        &:hover {
        background-color: var(--color-main);
        color: var(--color-white);
        border: 1px solid var(--color-main);
        }
`

const ButtonArrow: any = styled.button<PaginationProps>`
    margin-right: var(--3x-small);
    border: none;
    padding: var(--2x-small);
    width: var(--3x-large);
    height: var(--x-large);
    color: ${(props) => (props.disabled ? `var(--color-sub-dark-gray)` : `var(--color-main)`)};
    border: none;
    border: 1px solid ${(props) => (props.disabled ? `var(--color-sub-dark-gray)` : `var(--color-main)`)};
    border-radius: var(--2x-small);
    background-color: ${(props) => (props.disabled ? `var(--color-sub-light-gray)` : `var(--color-white)`)};
    transition: 0.5s;

        &:hover {
        background-color: ${(props) => (props.disabled ? `var(--color-sub-light-gray)` : `var(--color-main)`)};
        color: ${(props) => (props.disabled ? `var(--color-sub-dark-gray)` : `var(--color-white)`)};
        border: 1px solid ${(props) => (props.disabled ? `var(--color-sub-dark-gray)` : `var(--color-main)`)};;
        }
    
`