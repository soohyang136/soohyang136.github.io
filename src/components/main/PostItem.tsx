import React, { FunctionComponent } from 'react'
import { PostFrontmatterType } from '../../types/PostItem.type';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
    &:not(:first-of-type){
        border-top: 1px solid var(--bottom-line);
        padding-top: 4rem;
    }
`

const Title = styled.div`
    font-size: 1.5rem;
`

const Summary = styled.div`
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: var(--text-color2);
    word-break: keep-all;
    overflow-wrap: break-word;
`

const CategoriesWrapper = styled.div`
    display: flex;
`

const Category = styled.div`
    margin-bottom: 0.875rem;
    background: var(--bg-tag);
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.875rem;
    color: #20C997;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
`

const Date = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: var(--text-color3);
    font-size: 0.875rem;
`

const PostItem: FunctionComponent<PostFrontmatterType> = function({
    title,
    date,
    categories,
    summary,
    thumbnail: {
      childImageSharp: {
        gatsbyImageData
      }

}}) {
    return(
        <Wrapper>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <CategoriesWrapper>
            {categories.map((category, idx) => (
                <Category key={idx}>
                    {category}
                </Category>
            ))}
        </CategoriesWrapper>
        <Date>{date}</Date>
        </Wrapper>
    )
};

export default PostItem;