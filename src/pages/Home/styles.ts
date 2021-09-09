import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: ${({theme}) => theme.color.background};
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Content = styled.div`
    width: 730px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;


export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    h1 {        
        color: ${({theme}) => theme.color.logoColor};
        font-size: 27px;
        font-weight: bold;  
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;        
        color: ${({theme}) => theme.color.secondary};
        font-size: 13px;
        font-weight: bold;  

        img {
            margin-left: 15px;
            width: 21px;
            height: 21px;
        }
    }
`;


export const SearchBar = styled.div`
    width: 100%;
    height: 69px;            
    background: ${({theme}) => theme.color.lightText};
    border-radius: 9px;
    margin-top: 36px;
    display: flex;
    align-items: center;
    position: relative;

    img {
        margin-left: 36px;
        margin-right: 24px;
    }

    input {     
        font-size: 18px;
        width: 282px;
        border: none;
        ::placeholder{
            color: ${({theme}) => theme.color.tertiary};
        }

        :focus{         
            outline: none;   
        }
    }

    button {
        width: 108px;
        height: 51px;
        position: absolute;
        border-radius: 10px;
        border: none;
        right: 6px;
        background: ${({theme}) => theme.color.primary};
        color: #fff;
        font-size: 15px;
        font-weight: bold;
    }
`;


export const ShowInfoContainer = styled.div`


`;


export const ProfileImage = styled.img`
    width: 118px;
    height: 118px;
    border-radius: 50%;

`;



export const ShowInfo = styled.div`


`;



export const HeaderInfo = styled.div`


`;



export const UserNameInfo = styled.div`


`;



export const InfoBio = styled.div`


`;



export const RepoInfo = styled.div`


`;



export const FooterInfo = styled.div`


`;


export const CityInfo = styled.div`


`;


export const BlogInfo = styled.div`


`;