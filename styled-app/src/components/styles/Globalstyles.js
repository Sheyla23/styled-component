import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin:0px;
        padding:0px;
    }
    body{
        text-align: center;
        font-family: 'Karla', sans-serif;
        font-size: 16px;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'DM Serif Display', serif;
    }

    ul{
        list-style-type:none;
        
    }
    li{
        display:block
    }

`

export default GlobalStyle