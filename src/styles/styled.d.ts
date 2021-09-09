import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
            title: string;
        
            color: {
                primary: string;
                secondary: string;
                tertiary: string;
                text: string;
                background: string;
                lightText: string;
                logoColor: string;
                shadow: string;
            }
    }
}