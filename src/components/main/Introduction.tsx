import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'

type IntroductionPageProps = {
    profileImage: IGatsbyImageData
}

const Wrapper = styled.div`
    width: 768px;
    height: 185px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5.625rem;
    /* background-color: black; */
`

const InfoBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
`

const ProfileImage = styled(GatsbyImage)`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin-left: 1rem;
`

const Name = styled.div`
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
`

const Description = styled.div`
    font-size: 1.125rem;
    line-height: 1.5;
    margin-top: 0.25rem;
`

const BottomLine = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 2rem;
    background-color: var(--bottom-line);
`

const Introduction: FunctionComponent<IntroductionPageProps> = function({profileImage}) {
    return (
        <Wrapper>
            <InfoBox>
                <ProfileImage image={profileImage} alt='profile image' />
                <TextBox>
                    <Name>JeonSuHyang</Name>
                    <Description>developer</Description>
                </TextBox>
            </InfoBox>
            <BottomLine />
        </Wrapper>
    )
}

export default Introduction;