import styled from "styled-components";
export const Container = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5% 0;
    @media screen and (max-width: 768px){
        height: 100%;
    }
`
export const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
`
export const Section2 = styled.div`
    width: 80%;
    height: 90%;
    display: block;
    position: relative;
    top: -5%;
`
export const SubSec = styled.div`
    width: 200px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #161a1d;
    border-radius: 20px;
    box-shadow: 2px 3px 3px 2px #50C878ad;
    margin-top: 5%;
    @media screen and (max-width: 768px){
        height: 250px;
    }
`
export const Heading = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: baseline;
    font-size: 64px;
    color: #fff;
    letter-spacing: 0.5rem;
    font-weight: 800;
    @media screen and (max-width: 768px){
        font-size: 28px;
    }
`
export const P =styled.p`
    color: #50C878;
`
export const H2 = styled.h1`
        letter-spacing: 0.2em;
        font-size: 40px;
        font-weight: 500;
        text-align: center;
        color: #fff;
        position: relative;
        top: -10%;
        @media screen and (max-width: 900px){
            text-align: center;
            font-size: 1.5em;
            margin: 15px 0 5px 0;
        }
    `
export const Description = styled.div`
    text-align: center;
    color: #fff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Name = styled.h2`
    
    font-size: 16px;
    color: #ffffff;
    text-align: justify;
    margin: 0 5%;
    @media screen and (max-width:800px) {
        font-size: 12px;
    }
`
export const Section3 = styled.div`
    width: 150px;
    height: 40px;
    position:relative;
    top: -15%;
`
export const Images = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`
export const SubHeading = styled.div`
    text-align: center;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.2rem;
    font-size: 28px;
    margin: 2% 0;
    @media screen and (max-width:800px) {
        font-size: 18px;
    }
`
export const ButtonSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 5% 0;
` 
export const Button = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 50%;
    background-color: #424242;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    @media screen and (max-width:800px) {
        width: 35px;
        height: 35px;
        font-size: 18px;
    }
` 