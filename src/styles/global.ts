import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FFFFFF;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
        height: 100%;
    }

    html {
        position: relative;
    }

    body, input, textarea, button {
        font-family: 'Space Mono', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Space Mono', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 0px;
    }

    @media (max-width: 960px) {
    body {
       overflow-x: hidden;
    }
}
`;