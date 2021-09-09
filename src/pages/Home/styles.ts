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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    /* Tablet Version */
    @media(min-width: 540px) and (max-width: 767px){
        width: 573px;
    }
    
    /* Mobile Version */
    @media(max-width: 539px){
        width: 333px;
    }

`;


export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

     

        svg {
            margin-left: 15px;
            width: 21px;
            height: 21px;
        }

        :hover {
            cursor: pointer;
            opacity: .5;
        }
    }
`;


export const SearchBar = styled.div`
    width: 100%;
    height: 69px;            
    background: ${({theme}) => theme.color.lightText};
    border-radius: 15px;
    margin-top: 36px;
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: ${({theme}) => theme.color.shadow};

    img {
        margin-left: 36px;
        margin-right: 24px;
    }

    input {     
        font-size: 18px;            
        background: ${({theme}) => theme.color.lightText};
        width: 282px;
        border: none;
        color: ${({theme}) => theme.color.tertiary};
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
    
    /* Mobile Version */
    @media(max-width: 539px){  

        img {
            margin-left: 16px;
            margin-right: 6px;
        }

        input {     
            font-size: 13px;            
            background: ${({theme}) => theme.color.lightText};
            width: 189px;
            border: none;
            color: ${({theme}) => theme.color.tertiary};
        }      

        button {
            width: 84px;
            height: 46px;
            font-size: 13px;
        }
    }
`;


export const ShowInfoContainer = styled.div`
    width: 100%;
    height: 420px;
    display: flex;
    margin-top: 24px;
    justify-content: center;
    position: relative;            
    background: ${({theme}) => theme.color.lightText};
    border-radius: 15px;
    box-shadow: ${({theme}) => theme.color.shadow};

    /* Tablet Version */
    @media(min-width: 540px) and (max-width: 767px){
        height: 480px;
    }
    
    /* Mobile Version */
    @media(max-width: 539px){
        height: 519px;
    }
`;


export const ProfileImage = styled.div`
    
    position: absolute;
    top: 48px;
    left: 48px;

    img {
        width: 118px;
        height: 118px;
        border-radius: 50%;
    }

    /* Tablet Version */
    @media(min-width: 540px) and (max-width: 767px){
        top: 40px;
    }
    
    /* Mobile Version */
    @media(max-width: 539px){
        top: 33px;
        left: 24px;
        img {
            width: 70px;
            height: 70px;
        }
    }
`;



export const ShowInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    width: 540px;
    margin-left: 40px;
    position: absolute;
    right: 0;

    /* Tablet Version */
    @media(min-width: 540px) and (max-width: 767px){
        top: 40px;
    }
    
    /* Mobile Version */
    @media(max-width: 539px){ 
        width: 333px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;



export const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    h3 {
        font-size: 27px;
        font-weight: bold;            
        color: ${({theme}) => theme.color.text};
    }

    span {
        margin-right: 48px;
        font-size: 15px;               
        color: ${({theme}) => theme.color.secondary};
    }

    /* Tablet Version */
    @media(min-width: 540px) and (max-width: 767px){
        display: flex;
        flex-direction: column;

        span {
            margin-right: 13px;
            font-size: 15px;               
            color: ${({theme}) => theme.color.secondary};
        }
    }
    
    /* Mobile Version */
    @media(max-width: 539px){
        display: flex;
        flex-direction: column;
        h3 {
            font-size: 15px;
            font-weight: bold;            
            color: ${({theme}) => theme.color.text};
        }

        span {
            margin-left: 90px;
            font-size: 13px;               
            color: ${({theme}) => theme.color.secondary};
        }
    }
`;



export const UserNameInfo = styled.div`
    margin-top: 3px;
    span {
        color: ${({theme}) => theme.color.primary};
    }
    
    /* Tablet Version */
    @media(min-width: 540px) and (max-width: 767px){
        margin-left: 183px;
    }
    
    /* Mobile Version */
    @media(max-width: 539px){
        margin-right: 20px;
    }

`;



export const InfoBio = styled.div`
    margin-top: 21px;

    p {
        color: ${({theme}) => theme.color.tertiary};
        opacity: 0.75;
        font-size: 15px;
        line-height: 24px;
        width: 490px;
    }

    /* Tablet Version */
    @media(min-width: 540px) and (max-width: 767px){
        margin-top: 48px;
    }
    
    /* Mobile Version */
    @media(max-width: 539px){
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px 0 36px;
        p {
            width: 303px;
            font-size: 13px;
        }
    }
`;



export const RepoInfo = styled.div`
    margin-top: 33px;
    width: 480px;
    height: 85px;
    display: flex;
    background: ${({theme}) => theme.color.background};
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 0 24px;

    span {
        font-size: 12px;
        font-style: normal;
        font-weight: normal;
        color: ${({theme}) => theme.color.tertiary};
    }

    h3 {
        font-size: 15px;
        font-style: normal;
        font-weight: bold;
        color: ${({theme}) => theme.color.text};
    }

    .repo-qtd{
        display: flex;
        flex-direction: column;
    }

    .followers-qtd{
        display: flex;
        flex-direction: column;
    }

    .following-qtd{
        display: flex;
        flex-direction: column;
    }

    
    /* Mobile Version */
    @media(max-width: 539px){
        display: flex;
        align-items: center;
        width: 279px;

        .repo-qtd{
            align-items: center;
        }

        .followers-qtd{
            align-items: center;
        }

        .following-qtd{
            align-items: center;
        }

    }
`;



export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 39px;

    /* Mobile Version */
    @media(max-width: 539px){
        width: 100%;      
        margin-top: 24px;
        padding: 0 27px 0 27px;
    }
`;


export const CityInfo = styled.div`
    display: flex;

    .city-info{
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            margin-left: 21px;
            color: ${({theme}) => theme.color.tertiary};
        }
        
        svg {
            path {
                fill: ${({theme}) => theme.color.tertiary};
            }
        }
    }

    .twitter-info{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 120px;

        span {
            margin-left: 21px;
            color: ${({theme}) => theme.color.tertiary};
        }
        
        svg {
            path {
                fill: ${({theme}) => theme.color.tertiary};
            }
        }
    }

    /* Mobile Version */
    @media(max-width: 539px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .twitter-info{
            margin-left: 0;
            margin-top: 21px;

            span {
                margin-left: 15px;
            }
        }
    }
`;


export const BlogInfo = styled.div`
    display: flex;
    margin-top: 21px;

    .web-site-info{
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            margin-left: 16px;
            text-decoration: none;
            color: ${({theme}) => theme.color.tertiary};
        }
        
        svg {
            path {
                fill: ${({theme}) => theme.color.tertiary};
            }
        }
    }

    .github-info{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 60px;

        span {
            margin-left: 21px;
            color: ${({theme}) => theme.color.tertiary};
        }
        
        svg {
            path {
                fill: ${({theme}) => theme.color.tertiary};
            }
        }
    }

    /* Mobile Version */
    @media(max-width: 539px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .github-info{
            margin-left: 0;
            margin-top: 21px;

            span {
                margin-left: 15px;
            }
        }
    }
`;