import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { PrimaryFont } from './Fonts'
import Roboto from '../fonts/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
        font-size: 16px;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *:before *:after {
        box-sizing: inherit;
    }

    body { 
        font-family: ${PrimaryFont};
        background: #fff;
    }
`
