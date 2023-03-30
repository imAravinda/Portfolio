import styled from "styled-components";
export const Des = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 5% ;
        margin-top: 5%;
        @media screen and (max-width:800px){
            padding: 0%;
        }
    `
    export const Row = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `
    export const Sec = styled.div`
        flex-basis: 100%;
        padding: 0 5px;
        width: 100%;
        margin-bottom : 5%;
        
    `
    
    export const H1 = styled.h1`
        display: flex;
        width: 80%;
        justify-content: left;
        align-items: baseline;
        font-size: 64px;
        color: #fff;
        letter-spacing: 0.5rem;
        font-weight: 800;
        @media screen and (max-width: 800px){
            font-size: 28px;
            margin-left: 5%;
        }
    `
   export const Card = styled.div`
        &{
            display: flex;
            flex-direction: column;
            width: 300px;
            height: 300px;
            justify-content: center;
            align-items: center;
            background-color: #272D29;
            box-shadow: 3px 3px 3px #000;
            border-radius: 10px;
            margin: 0 3%;
            padding: 2%;
        }
        &:hover{
            background-color: #50C878;
            transform: translateY(-20px);
            transition: 0.5s ease-in-out; 
            cursor: pointer;
        }
        @media screen and (max-width: 800px){
            width: 250px;
            height: 250px;
            margin: 5% 0;
            padding: 3%;
        }
   `
   export const Icon = styled.div`
        width: 100%;
        display: flex;
        justify-content: left;
        font-size: 48px;
        font-weight: 600;
        margin: 0 2%;
        height: 20%;
        color: #fff;
        @media screen and (max-width: 800px){
            font-size: 28px;
        }
   `
   export const Title = styled.div`
        width: 100%;
        display: flex;
        justify-content: left;
        font-size: 32px;
        font-weight: 600;
        height: 20%;
        color: #fff;
        @media screen and (max-width: 800px){
            font-size: 18px;
        }
   `
   export const Desc = styled.div`
        font-size: 14px;
        color: #fff;
        text-align: justify;
        @media screen and (max-width: 800px){
            font-size: 12px;
        }
   `