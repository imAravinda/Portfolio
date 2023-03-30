import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 93%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 100%;
        margin-bottom: 15%;
    }
` 
export const DetailSection = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
` 
export const Heading = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    font-size: 64px;
    color: #fff;
    letter-spacing: 0.5rem;
    font-weight: 800;
    position: relative;
    left: 15%;
    @media screen and (max-width: 800px){
            font-size: 28px;
        }
` 
export const P = styled.p`
    color: #50C878;
    margin: 5%;
` 
export const ContactDetails = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 800px){
        justify-content: center;
    }
` 
export const Contact = styled.div`
    display: flex;
    justify-content: left;
    width: 80%;
    margin: 5% 0;
    font-size: 20px;
    @media screen and (max-width: 800px){
            font-size: 12px;
    }
` 
export const Icon = styled.div`
    &{
        margin: 0 5%;
        color: #50C878;
        font-size: 28px;
    }
    &:hover{
        transform: scale3d(1.2);
        transition: 0.5s ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width: 800px){
        font-size: 14px;
    }
` 
export const Desc = styled.div`

` 
export const SocialMedia = styled.div`
    display: flex;
    justify-content: left;
    width: 80%;
    margin: 5% 0;
` 
export const ButtonSection = styled.div`
    display: flex;
    justify-content: left;
    width: 80%;
    @media screen and (max-width: 800px){
        margin-top: 5%;
        width: 100%;
    }
` 
export const Button = styled.button`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #50C878;
    color: #fff;
    cursor: pointer;
    @media screen and (max-width: 800px){
        width: 90px;
        height: 25px;
        border-radius: 8px;
        font-size: 12px;
    }
` 
export const FormSection = styled.div`
    display: flex;
    justify-content: right;
    flex-direction: column;
    @media screen and (max-width: 800px){
        justify-content: center;
        align-items: center;
    }
` 
export const TextFeild = styled.div`
    width: 600px;
    height: 30px;
    margin: 3% 0;
    @media screen and (max-width: 800px){
        width: 300px;
        height: 30px;
        margin: 5% 0;
    }
` 
export const TextBox = styled.div`
    width: 600px;
    margin: 3% 0 10% 0;
    height: 150px;
    @media screen and (max-width: 800px){
        width: 300px;
        height: 70px;
        margin: 5% 0;
    }
` 
export const InputText = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #272D29;
    color: #fff;
    border: none;
    padding: 2%;
    font-size:18px;
    @media screen and (max-width: 800px){
        font-size: 12px;
    }
`
export const InputTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #272D29;
    color: #fff;
    border: none;
    padding: 2%;
    font-size:18px;
    @media screen and (max-width: 800px){
        font-size: 12px;
    }
`
