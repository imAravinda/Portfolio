import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 100%;
    }
`
export const Section = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    flex-direction: column;
    position: relative;
    top: 10%;
    
`
export const Role  = styled.div`
    color: #fff;
    font-size: 32px;
    display: flex;
    justify-content: left;
    width: 80%;
    font-weight: 600;
`
export const Header = styled.div`
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

export const CoverImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 5%;
    @media screen and (max-width: 768px){
        margin: 0;
    }
`
export const Image = styled.img`
    width: 500px;
    height: 600px;
    border-radius: 20px;
    @media screen and (max-width: 768px){
        width: 250px;
        height: 300px;
    }
`
export const P = styled.p`
    color: #50C878;
    margin: 5%;
`
export const Description = styled.div`
    display: flex;
    width: 80%;
    color: #fff;
    justify-content: center;
    align-items: center;
    text-align: justify;
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 80%;
    align-items: center;
`
export const Headings = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`
export const Heading = styled.div`
    margin: 5%;
    cursor: pointer;
    @media screen and (max-width: 768px){
        margin: 5% 2%;
    }
`
export const DetailsSec = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    width: 90%;
    
`
export const DetailsSubSec = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const DetailHead = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #50C878;
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`
export const AttributeSec = styled.div`
    display: flex;
    width: 100%;
    justify-content: left;
    font-size: 18px;
    flex-wrap: wrap;
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`
export const Attribute = styled.div`
    display: flex;
    width: 20%;
    justify-content: left;
    margin: 2% 0;
    @media screen and (max-width: 768px){
        width: 30%;
    }
`
export const Attribute1 = styled.div`
    display: flex;
    width: 50%;
    justify-content: left;
    flex-direction: column;
    line-height: 2rem;
    margin-left:2% ;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const Icon = styled.div`
    color: #50C878;
    margin-right: 2%;
    font-size: 20px;
    font-weight: 600;
    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`
export const Text = styled.p`
    text-align: left;
    margin: 0;
`
