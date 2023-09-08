import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import CategoryList from './CategoryList'

type PostListProps = {
    selectedCategory: string,
    categoryList: {
        [key: string]: number;
    }
}

const Wrapper = styled.div`
    width: 768px;
    margin-top: 4.5rem;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    display: flex;
    flex-direction: column;
`

const Text = styled.div`
    font-size: 1.325rem;
    font-weight: 600;
    margin: 0 auto;
`

const SearchSection = styled.section`
    display: flex;
    justify-content: flex-end;
`

const SearchBar = styled.div`
    margin-top: 4.5rem;
    display: flex;
    padding: 0 0.625rem;
    align-items: center;
    cursor: text;
    height: 2.25rem;
    border: 1px solid var(--border);
    width: auto;
`

const SearchInput = styled.input`
    font-size: 0.875rem;
    flex: 1 1 0%;
    display: block;
    line-height: 1rem;
    height: 1rem;
    padding: 0px;
    border: none;
    outline: 0px;
    background: transparent;
    margin-left: 8px;
    color: var(--text-color);
`

const PostList: FunctionComponent<PostListProps> = function({
    selectedCategory,
    categoryList
}) {
    return (
        <Wrapper>
            <Text>글</Text>
            <SearchSection>
                <SearchBar>
                    <svg width="17" height="17" viewBox="0 0 17 17">
                        <path
                        fill-rule="evenodd"
                        d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
                        clip-rule="evenodd"
                        fill="currentColor"
                        >
                        </path>
                    </svg>
                    <SearchInput placeholder='검색어를 입력하세요' />
                </SearchBar>
            </SearchSection>
            <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
        </Wrapper>
    )
}

export default PostList;