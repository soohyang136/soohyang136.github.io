import React, { FunctionComponent } from 'react'
import Text from '../components/Test'
import Header from '../components/common/Header'
import GlobalStyle from '../components/common/GlobalStyle'
import styled from '@emotion/styled'

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
        <GlobalStyle />
        <Header />
    </Container>
  )
}

export default IndexPage