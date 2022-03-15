import styled from "styled-components";

export const NavWrapper=styled.div`
    height: 65px;
    width: 100%;
    position: sticky;
    z-index:2;
    top:0;
    left:0;
    box-shadow: 0px 4px 8px 0 rgba(0,0,0,0.2);
    background:white;

    nav{
        display:flex;
        width:80vw;
        height:inherit;
        align-items: center;
        margin: auto;
        justify-content: space-between;
    }
`

export const NavLinks=styled.div`
  
   ul{
       display:flex;
       column-gap: 20px;
       justify-content: space-between;
       text-transform: uppercase;
       height:100%;
       align-items: center;   
   }
   li{
    color:hsl(273, 4%, 51%);
    font-weight: 700;
   }

   li:hover{
        color:hsl(256, 26%, 20%);
   }
   @media screen and (max-width:700px){
       position:absolute;
       top:65px;
       left:${({variant})=> variant==='active'? '0':'-100'}%;
       height: 60vh;
       width:100%;
       margin:auto;
       background-color: hsl(256, 26%, 20%);
       transition:0.5s;
       

       ul{
           display:block;
           padding:10px;
       }
       li{
        color:hsl(0, 0%, 98%);
        font-weight: 700;
        padding:20px 0;
        }

        li:hover{
        color: hsl(0, 0%, 98%);
        }
   }

`
export const Toggle=styled.button`
    
    display:none;

    @media screen and (max-width:700px) {
        display:block;
        border:none;
        background: none;
    }
`