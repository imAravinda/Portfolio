import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
`
export const Section = styled.div`
    display: flex;
    justify-content: center;
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
    margin-bottom: 5%;
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
`

export const CoverImage = styled.div`
    display: flex;
    justify-content: right;
    width: 80%;
    height: 100%;
    margin-top: 5%;
`
export const Image = styled.img`
    width: 480px;
    height: 700px;
`
export const P = styled.p`
    color: #50C878;
    margin: 5%;
`