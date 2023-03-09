import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function LogoText() {
  return (
    <Link to="/">
        <Logo>
            WITH'S kEY
            </Logo>
    </Link>
 )
}

export default LogoText

const Logo = styled.div`
    font-family: 'Bayon', sans-serif;
    font-size: 20px;
    color: var(--color-white)
`