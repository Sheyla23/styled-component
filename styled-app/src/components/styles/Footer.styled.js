import styled from 'styled-components';

export const FooterGroup=styled.footer`

    background-color: hsl(0, 0%, 98%);
    padding: 80px 10%;

    section{
        display:flex;
        flex-direction: column;
        gap:20px 0;
        padding:15px 0;
    }
    
    h5{
        text-transform: uppercase;
        color:hsl(273, 4%, 51%);
        padding:20px 0;
    }
    p{
        text-transform: uppercase;
        color:hsl(270, 9%, 17%);
        font-weight: 700;
        font-size:0.75rem;
        letter-spacing:1.5px;
        margin: 5px 0;
    }

    img{
        padding-right:10px;
    }
    img:hover{
        cursor:pointer;
        fill: red;
    }

    @media screen and (min-width:700px) {
        section{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0 20px;
        padding:15px 0;
        text-align: left;
    }
    }
`