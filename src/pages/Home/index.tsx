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

import api from '../../services/api';

import moonIcon from '../../assets/icon-moon.svg';
import searchIcon from '../../assets/icon-search.svg';
import { useTheme } from '../../hooks/theme';


import {ReactComponent as MoonIcon} from '../../assets/icon-moon.svg';
import {ReactComponent as SunIcon} from '../../assets/icon-sun.svg';
import {ReactComponent as LocationIcon} from '../../assets/icon-location.svg';
import {ReactComponent as TwitterIcon} from '../../assets/icon-twitter.svg';
import {ReactComponent as WebsiteIcon} from '../../assets/icon-website.svg';
import {ReactComponent as CompanyIcon} from '../../assets/icon-company.svg';

interface UserProps{
    name: string;
    avatar_url: string;
    created_at: Date;
    login: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    twitter_username: string;
    blog: string;
    company: string;
}

const Home:React.FC = () => {

    const { toggleTheme, theme } = useTheme();
    const [themeStyle, setThemeStyle] = useState(() => theme.title === 'dark' ? true : false);

    const [username, setUsername] = useState('');
    const [userNotFound, setUserNotFound] = useState(false);

    const [info, setInfo] = useState<UserProps>();


    async function getInfo(){
        try {
            const response = await api.get(`/${username}`);

            if (response.status === 200){
                setInfo(response.data);
                setUserNotFound(false);
            }
        } catch (err){
            console.log(err);
            setUserNotFound(true);
        }
    }

    const handleChangeTheme = () => {
        setThemeStyle(!themeStyle);
        toggleTheme();
    } 
    return (
        <Container>
            <Content>
                <Header>
                    <h1>devfinder</h1> 
                    <h1>{userNotFound}</h1> 
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

                <SearchBar userNotFound={userNotFound}>
                    <img src={searchIcon} alt="search"/>
                    <input 
                        type="text" 
                        placeholder="Search GitHub username..."
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p>No results</p>
                    <button 
                        type="button"
                        onClick={getInfo}
                    >
                        Search
                    </button>
                </SearchBar>

                <ShowInfoContainer>
                    <ProfileImage>
                        <img 
                            src={
                            info?.avatar_url ? 
                            info.avatar_url : 
                            moonIcon} 
                            alt="profile"
                        />
                    </ProfileImage>

                    <ShowInfo>
                        <HeaderInfo>
                            <h3>{info?.name ? info.name : "The Octocat"}</h3>
                            <span>Joined 25 Jan 2011</span>
                        </HeaderInfo>

                        <UserNameInfo>
                            <span>@{info?.login ? info.login : "octocat"}</span>
                        </UserNameInfo>

                        <InfoBio>
                            <p>
                                {info?.bio ? info.bio : "Not available"}
                            </p>
                        </InfoBio>

                        <RepoInfo>
                            <div className="repo-qtd">
                                <span>Repos</span>
                                <h3>{info?.public_repos ? info.public_repos : 0}</h3>
                            </div>
                            <div className="followers-qtd">
                                <span>Followers</span>      
                                <h3>{info?.followers ? info.followers : 0}</h3>                 
                            </div>
                            <div className="following-qtd">
                                <span>Following</span>
                                <h3>{info?.following ? info.following : 0}</h3>                         
                            </div>
                        </RepoInfo>

                        <FooterInfo>
                            <CityInfo
                                locationFound={info?.location ? true : false}
                                twitterFound={info?.twitter_username ? true : false}
                            >
                                <div className="city-info">
                                    <LocationIcon />
                                    <span>{info?.location ? info.location : "Not available"}</span>
                                </div>
                                <div className="twitter-info">
                                    <TwitterIcon />
                                    <span>{info?.twitter_username ? info.twitter_username : "Not available"}</span>
                                </div>
                            </CityInfo>

                            <BlogInfo
                                webSiteFound={info?.blog ? true : false}
                                companyFound={info?.company ? true : false}                            
                            >
                                <div className="web-site-info">
                                    <WebsiteIcon />
                                    <a 
                                        href={info?.blog ? info.blog : '_target'}
                                        rel="noreferrer" target="_blank"
                                    >
                                        {info?.blog ? info.blog : "Not available"}
                                    </a>
                                </div>
                                <div className="github-info">
                                    <CompanyIcon />
                                    <span>{info?.company ? info.company : "Not available"}</span>
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