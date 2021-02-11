import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
        width: .5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;   
            border-radius: 10px;
        }
        &::-webkit-scrollbar{
            background-color: white;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        color: #333;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        @media screen and (max-width: 700px){
            font-size: 2rem;
            text-align: center;
        }
    }
    h3{
        font-size: 1.3rem;
        padding: 1.5rem 0;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
        transition: color .3s ease-in;
        &:hover{
            color: #ff7676;
        }
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyle;