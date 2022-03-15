import styled from 'styled-components'

export const Hero=styled.section`
    width:100%;
    background-color: hsl(256, 26%, 20%);
    margin-bottom: 150px;
    img{
        display: block;
        width:100%;
        object-fit: cover;
    }

    article{
        background-color: hsl(256, 26%, 20%);
        color:hsl(0, 0%, 98%);
        padding: 50px 10%;
    }
    article p{
        line-height: 2;
        padding: 20px 0;
    }
    article h2{
        font-size:2.3rem;
    }
    @media screen  and (min-width:700px){
        display:flex;
        padding: 0 10% ;
        column-gap: 20px;
        flex-direction: row-reverse;
        justify-content:space-between;
        text-align:left;
        align-items: center;
        height:500px;
        article{
            padding: 0;
            width:39vw;
            position: relative;
        }
        img{
            width:38vw;
            height:500px;
            margin-bottom:-35%;
        }
        article::before{
            content: '';
            position:absolute;
            left: 0;
            top:-20%;
            border-top: 1px solid hsl(0, 0%, 98%);
            width:30%;
        }
        
    }

`
export const Flex =styled.div`
    padding: 30px 10%;
    &{
        display: flex;
        flex-direction: column;
        gap: 20px 0;
    }
    h3{
        color:hsl(256, 26%, 20%);
        padding: 20px 0;
    }
    p{
        color:hsl(273, 4%, 51%);
        line-height: 1.5;
    }
    @media screen and (min-width:700px) {
        &{
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 0px 20px;
        text-align: left;
      }

    }

`

export const H2=styled.h2`
 
    color:hsl(256, 26%, 20%);
    font-size: 2rem;
    margin: 30px auto;
    width:80vw;
    position:relative;
    
    &::before{
        content: '';
        position:absolute;
        left: 50%;
        top:-25px;
        transform:translate(-50%,-50%);
        border-top: 1px solid hsl(256, 26%, 20%);
        width:100px;

    }
    @media screen and (min-width:700px){
        text-align:left;
        &::before{
        left:1%;
        transform:translate(0,0);

    }
    }
`
export const Article=styled.article`
    width:80vw;
    margin:80px auto;
    background-color:  hsl(256, 26%, 20%);
    padding:50px 5%;
    h2{
        color:hsl(0, 0%, 98%);
        padding:20px 0;
        font-size: 2rem;
    }
    @media screen and (min-width:700px) {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 40px;
        text-align: left;
    }

`