import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.textPrimary};
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        transition: background-color 0.2s ease-in;
        transition: color 0.2s ease-in;
    }
`
