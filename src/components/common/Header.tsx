import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const HeaderContainer = styled.div`
    height: 4rem;
    background-color: black;
    margin: 0;
    padding: 0;
`

const Header : FunctionComponent = function() {
    return (
        <HeaderContainer></HeaderContainer>
    )
}

export default Header;