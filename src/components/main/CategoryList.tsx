import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { FunctionComponent, ReactNode } from 'react'

export type CategoryListProps = {
    selectedCategory: string,
    categoryList: {
        [key: string]: number;
    }
}

type CategoryItemProps = {
    active: boolean;
  }
  
type GatsbyLinkProps = {
    children: ReactNode
    className?: string;
    to: string;
} & CategoryItemProps

const Wrapper = styled.div`
    position: relative;
    width: 11.5rem;
    left: -13.5rem;
    height: 100px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.div`
    font-size: 1rem;
    line-height: 1.5;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
    font-weight: bold;
    margin-bottom: 1rem;
`
const CategoryItem = styled(({active, ...props}: GatsbyLinkProps) => (
    <Link {...props} />
))`
    font-size: 0.875rem;
    line-height: 1.5;
    color: ${({active}) => (active ? '#20C997' : '')};
    &:not(:first-of-type){
        margin-top: 0.25rem;
    }
`

const CategoryList: FunctionComponent<CategoryListProps> = function({
    selectedCategory,
    categoryList
}) {
    return (
        <Wrapper>
            <Box>
                <Text>태그목록</Text>
                {Object.entries(categoryList).map(([name, count]) => (
                    <CategoryItem to={`/?category=${name}`} active={name === selectedCategory} >
                        {name} ({count})
                    </CategoryItem>
                ))}
            </Box>
        </Wrapper>
    )
}

export default CategoryList;