import React, { FunctionComponent } from 'react'
import Text from '../components/Test'
import Header from '../components/main/Header'
import GlobalStyle from '../components/common/GlobalStyle'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

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