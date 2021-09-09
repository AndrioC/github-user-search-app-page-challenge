import React, { useState } from 'react'

import {
    Container,
    Content,
    Header,
    SearchBar,
    ShowInfoContainer,
    ProfileImage,
    ShowInfo,
    HeaderInfo,
    UserNameInfo,
    InfoBio,
    RepoInfo,
    FooterInfo,
    CityInfo,
    BlogInfo,
} from './styles'

import moonIcon from '../../assets/icon-moon.svg';
import searchIcon from '../../assets/icon-search.svg';
import { useTheme } from '../../hooks/theme';


import {ReactComponent as MoonIcon} from '../../assets/icon-moon.svg';
import {ReactComponent as SunIcon} from '../../assets/icon-sun.svg';
import {ReactComponent as LocationIcon} from '../../assets/icon-location.svg';
import {ReactComponent as TwitterIcon} from '../../assets/icon-twitter.svg';
import {ReactComponent as WebsiteIcon} from '../../assets/icon-website.svg';
import {ReactComponent as CompanyIcon} from '../../assets/icon-company.svg';


const Home:React.FC = () => {

    const { toggleTheme, theme } = useTheme();
    const [themeStyle, setThemeStyle] = useState(() => theme.title === 'dark' ? true : false);

    console.log("THME STYLE : ", themeStyle);

    const handleChangeTheme = () => {
        setThemeStyle(!themeStyle);
        toggleTheme();
    } 
    return (
        <Container>
            <Content>
                <Header>
                    <h1>devfinder</h1> 
                    <div onClick={handleChangeTheme}>
                        <span>
                            {themeStyle ? "LIGHT" : "DARK"} 
                            {themeStyle ? 
                                <SunIcon /> :
                                <MoonIcon />
                            }                  
                        </span>   
                    </div>
                </Header>

                <SearchBar>
                    <img src={searchIcon} alt="search"/>
                    <input type="text" placeholder="Search GitHub username..."/>
                    <button type="button">Search</button>
                </SearchBar>

                <ShowInfoContainer>
                    <ProfileImage>
                        <img src={moonIcon} alt="profile"/>
                    </ProfileImage>

                    <ShowInfo>
                        <HeaderInfo>
                            <h3>The Octocat</h3>
                            <span>Joined 25 Jan 2011</span>
                        </HeaderInfo>

                        <UserNameInfo>
                            <span>@octocat</span>
                        </UserNameInfo>

                        <InfoBio>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                Donec odio. Quisque volutpat mattis eros.
                            </p>
                        </InfoBio>

                        <RepoInfo>
                            <div className="repo-qtd">
                                <span>Repos</span>
                                <h3>8</h3>
                            </div>
                            <div className="followers-qtd">
                                <span>Followers</span>
                                <h3>3938</h3>                                
                            </div>
                            <div className="following-qtd">
                                <span>Following</span>
                                <h3>9</h3>                                
                            </div>
                        </RepoInfo>

                        <FooterInfo>
                            <CityInfo>
                                <div className="city-info">
                                    <LocationIcon />
                                    <span>San Francisco</span>
                                </div>
                                <div className="twitter-info">
                                    <TwitterIcon />
                                    <span>Not Available</span>
                                </div>
                            </CityInfo>

                            <BlogInfo>
                                <div className="web-site-info">
                                    <WebsiteIcon />
                                    <a href="https://github.blog" rel="noreferrer" target="_blank">https://github.blog</a>
                                </div>
                                <div className="github-info">
                                    <CompanyIcon />
                                    <span>@github</span>
                                </div>
                            </BlogInfo>
                        </FooterInfo>
                    </ShowInfo>
                </ShowInfoContainer>
            </Content>
        </Container>
    )
}

export default Home