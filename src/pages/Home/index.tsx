import React from 'react'

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
import locationIcon from '../../assets/icon-location.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import websiteIcon from '../../assets/icon-website.svg';
import companyIcon from '../../assets/icon-company.svg';

const Home:React.FC = () => {
    return (
        <Container>
            <Content>
                <Header>
                    <h1>devfinder</h1> 
                    <span>dark <img src={moonIcon} alt="moon"/></span>   
                </Header>

                <SearchBar>
                    <img src={searchIcon} alt="search"/>
                    <input type="text" placeholder="Search GitHub username..."/>
                    <button type="button">Search</button>
                </SearchBar>

                <ShowInfoContainer>
                    <ProfileImage 
                        src={moonIcon}
                    />

                    <ShowInfo>
                        <HeaderInfo>
                            <h3>The Octocat</h3>
                            <span>Joined 25 Jan 2011</span>
                        </HeaderInfo>

                        <UserNameInfo>
                            <span>@octocat</span>
                        </UserNameInfo>

                        <InfoBio>
                            <p>This profile has no bio</p>
                        </InfoBio>

                        <RepoInfo>
                            <div className="repo-qtd">
                                <span>Repos</span>
                                <span>8</span>
                            </div>
                            <div className="followers-qtd">
                                <span>Followers</span>
                                <span>3938</span>                                
                            </div>
                            <div className="following-qtd">
                                <span>Following</span>
                                <span>9</span>                                
                            </div>
                        </RepoInfo>

                        <FooterInfo>
                            <CityInfo>
                                <div>
                                    <img src={locationIcon} alt="location"/>
                                    <span>San Francisco</span>
                                </div>
                                <div>
                                    <img src={twitterIcon} alt="twitter"/>
                                    <span>Not Available</span>
                                </div>
                            </CityInfo>

                            <BlogInfo>
                                <div>
                                    <img src={websiteIcon} alt="web-site"/>
                                    <a href="https://github.blog" rel="noreferrer" target="_blank">https://github.blog</a>
                                </div>
                                <div>
                                    <img src={companyIcon} alt="company"/>
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