import styled from "styled-components";

export const Button=styled.button`
    border: 1.2px solid hsl(0, 0%, 98%);
    background-color: hsl(256, 26%, 20%);
    color:hsl(0, 0%, 98%);
    padding: 10px 20px;
    text-transform:uppercase;
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    cursor:pointer;
    display:block;
    margin:auto;
    
    &:hover{
       background-color: hsl(0, 0%, 98%);
       border: 1.2px solid hsl(270, 9%, 17%);
       color:hsl(270, 9%, 17%);
    }
    @media screen and (min-width:701px){
        margin:${({mg})=> mg === 'none' ? '0px' : 'auto'};
    }
`
export const NavButton=styled(Button)`
    @media screen and (min-width:701px){
        
    border: 1.2px solid hsl(256, 26%, 20%);
    background-color: hsl(0, 0%, 98%);
    color:hsl(270, 9%, 17%);

    &:hover{
       background-color: hsl(256, 26%, 20%);
       color: hsl(0, 0%, 98%);
    }
    }

`