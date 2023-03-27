import React from 'react';
import styled from 'styled-components';

type PaginationProps = {
    total: number;
    limit: number;
    page: number;
    setPage: (state: number) => void;
    setLimit: (state: number) => void;
};

const Pagination = ({ total, limit, page, setPage }: PaginationProps) => {
    const numPages = Math.ceil(total / limit)

    return (
        <MainContainer>
            <nav>
                <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    {`<`}
                </Button>

                {Array(numPages)
                    .fill(0)
                    .map((_, i) => (
                        <Button
                            key={i + 1}
                            onClick={() => setPage(i + 1)}
                            aria-current={page === i + 1 ? "page" : null}
                        >
                            {i + 1}
                        </Button>
                    ))}

                <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
                    {`>`}
                </Button>
            </nav>
        </MainContainer>
    );
};

export default Pagination;

const MainContainer = styled.div`
  margin-bottom: calc(var(--4x-large) * 2);
  display: flex;
  justify-content: center;
    align-items: center;
`

const Button: any = styled.button`
    margin-right: var(--3x-small);
    border: none;
    padding: var(--2x-small);
    width: var(--3x-large);
    height: var(--x-large);
    color: var(--color-main);
    border: none;
    border: 1px solid var(--color-main);
    border-radius: var(--2x-small);
    background-color:var(--color-white);
    cursor: pointer;
    transition: 0.5s;

        &:hover {
        background-color: var(--color-main);
        color: var(--color-white);
        border: 1px solid var(--color-main);
        }
`