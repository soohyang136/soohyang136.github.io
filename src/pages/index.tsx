import React, { FunctionComponent, useMemo } from 'react'
import Text from '../components/Test'
import Header from '../components/main/Header'
import GlobalStyle from '../components/common/GlobalStyle'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Introduction from '../components/main/Introduction'
import PostList from '../components/main/PostList'
import { PostListItemType } from '../types/PostItem.type'
import { CategoryListProps } from '../components/main/CategoryList'
import queryString, { ParsedQuery } from 'query-string'

type IndexPageProps = {
    location: {
        search: string
    }
    data:{
        allMarkdownRemark: {
            edges: PostListItemType[]
        }
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
    location: { search },
    data: {
        allMarkdownRemark: { edges },
        file: {
            childImageSharp: { gatsbyImageData }
        }
    }
}) {
    const parsed: ParsedQuery<string> = queryString.parse(search);
    const selectedCategory: string = typeof parsed.category !== 'string' || !parsed.category
    ? 'All'
    : parsed.category
    const categoryList = useMemo(
        () =>
          edges.reduce(
            (
              list: CategoryListProps['categoryList'],
              {
                node: {
                  frontmatter: { categories },
                },
              },
            ) => {
              categories.forEach(category => {
                if (list[category] === undefined) list[category] = 1;
                else list[category]++;
              });
    
              list['All']++;
    
              return list;
            },
            { All: 0 },
          ),
        [],
      );
  return (
    <Container>
        <GlobalStyle />
        <Header profileImage={gatsbyImageData} />
        <Introduction profileImage={gatsbyImageData} />
        <PostList selectedCategory={selectedCategory} categoryList={categoryList} />
    </Container>
  )
}

export default IndexPage

export const getPostList = graphql`
    query getPostList {
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date, frontmatter___title] }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  summary
                  date(formatString: "YYYY.MM.DD")
                  categories
                  thumbnail {
                    childImageSharp {
                      gatsbyImageData(width: 768, height: 400)
                    }
                  }
                }
              }
            }
        }
        file(name: { eq: "profile-image"}) {
            childImageSharp {
                gatsbyImageData(width: 120, height: 120)
            }
        }
    }
`