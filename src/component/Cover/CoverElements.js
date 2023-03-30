import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction:column-reverse;
        margin: 12% 0 5% 0;
        height: 100%;
    }
`
export const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    flex-direction: column;
    position: relative;
    top: 10%;
    @media screen and (max-width: 768px){
        top: 0;
        height: fit-content;
        margin: 0;
        flex-wrap: wrap;
    }
`
export const Role  = styled.div`
    color: #fff;
    font-size: 28px;
    display: flex;
    justify-content: left;
    width: 80%;
    font-weight: 600;
    margin-bottom: 5%;
    color: #ffffffcd;
    @media screen and (max-width: 768px){
        font-size: 16px;
        width: 100%;
    }
`
export const Header = styled.div`
    display: flex;
    width: 80%;
    justify-content: left;
    align-items: baseline;
    font-size: 64px;
    color: #fff;
    letter-spacing: 0.5rem;
    font-weight: 800;
    margin-top: -5%;
    @media screen and (max-width: 768px){
        font-size: 28px;
        margin: 0;
        justify-content: left;
        text-align: left;
        letter-spacing: 0.15rem;
    }
`

export const CoverImage = styled.div`
    display: flex;
    justify-content: right;
    width: 90%;
    height: 100%;
    margin-top: 5%;
    @media screen and (max-width: 768px){
       margin: 0;
       height: fit-content;
    }
`
export const Image = styled.img`
    width: 500px;
    height: 700px;
    @media screen and (max-width: 768px){
        width: 250px;
        height: 350px;
    }
`
export const P = styled.p`
    color: #50C878;
    margin: 5%;
    @media screen and (max-width: 768px){
        margin: 0;
    }
`