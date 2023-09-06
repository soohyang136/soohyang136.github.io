import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from '@skagami/gatsby-plugin-dark-mode'
import { useRecoilState } from 'recoil'
import { themeState } from '../../recoil/recoil'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type HeaderProps = {
    profileImage: IGatsbyImageData
}

const HeaderContainer = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    
`

const ItemWrapper = styled.div`
    width: 1024px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled(Link)`
    font-size: 1.3125rem;
    font-family: "Fira Mono";
    font-weight: bold;
`

const RightItemBox = styled.div`
    height: 100%;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Dark = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: var(--darkhover);
    transition: all 0.125s ease-in 0s;
  }

  @media (max-width: 1056px) {
    width: 2.8rem;
    height: 2rem;
  }
`

const ProfileImage = styled(GatsbyImage)`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: block;
    object-fit: cover;
`

const Header : FunctionComponent<HeaderProps> = function({profileImage}) {
    const [theme, toggleTheme] = useTheme();
    const [isDarkMode, setDarkMode] = React.useState(false);
    const [globalTheme, setGlobalTheme] = useRecoilState(themeState);

    const toggleDarkMode = function(checked: boolean) {
        setDarkMode(checked);
        toggleTheme(theme === 'light' ? 'dark' : 'light')
    }

    React.useEffect(() => {
        setGlobalTheme(theme);
    }, [theme]);

    return (
        <HeaderContainer>
            <ItemWrapper>
                <Logo to='/'>soo.log</Logo>
                <RightItemBox>
                    <Dark>
                        <DarkModeSwitch
                            checked={theme === 'dark'}
                            onChange={toggleDarkMode}
                            size={25}
                        />
                    </Dark>
                    <ProfileImage image={profileImage} alt="profile image" />
                </RightItemBox>
            </ItemWrapper>
        </HeaderContainer>
    )
}

export default Header;

