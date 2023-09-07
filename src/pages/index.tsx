import React, { FunctionComponent } from 'react'
import Text from '../components/Test'
import Header from '../components/main/Header'
import GlobalStyle from '../components/common/GlobalStyle'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Introduction from '../components/main/Introduction'

type IndexPageProps = {
    data:{
        file: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData
            }
        }
    }    
}

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const IndexPage: FunctionComponent<IndexPageProps> = function ({
    data: {
        file: {
            childImageSharp: { gatsbyImageData }
        }
    }
}) {
  return (
    <Container>
        <GlobalStyle />
        <Header profileImage={gatsbyImageData} />
        <Introduction profileImage={gatsbyImageData} />
    </Container>
  )
}

export default IndexPage

export const getPostList = graphql`
    query getPostList {
        file(name: { eq: "profile-image"}) {
            childImageSharp {
                gatsbyImageData(width: 120, height: 120)
            }
        }
    }
`