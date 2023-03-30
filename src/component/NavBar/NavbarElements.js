import styled from "styled-components";
export const Navbar=styled.div`
        display: block;
        margin: 0;
        display: flex;
        justify-content: center;

    `
    export const Nav=styled.nav`
        display: flex;
        position: fixed;
        justify-content: space-between;
        background:transparent;
        height: 80px;
        width: 100%;
        z-index: 9999;
        @media screen and (max-width: 768px){
            height: 60px;
        }
    `
    export const NavActive = styled.div`
        display: flex;
        position: fixed;
        justify-content: space-between;
        color:  #FFF8E1;
        background: #272D29ed;
        height: 80px;
        width: 100%;
        z-index: 9999;
        transition: all 0.5s ease;
        @media screen and (max-width: 768px){
            height: 60px;
        }
    `
    export const Links1 = styled.div`
        display: flex;
        align-items: center;
        @media screen and (max-width: 768px){
            justify-content: space-between;
            width: 30%;
        }
    `
    export const Links2 = styled.div`
        display: flex;
        align-items: center;
        @media screen and (max-width: 768px){
            justify-content: right;
            width: 10%;
        }
    `
    export const Ul=styled.ul`
        list-style-type: none;
        display: flex;
        align-items: baseline;
        justify-content: center;
        margin: 0px 20px;
        @media (max-width: 768px) {
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 30%;
            width: 50%;
            height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
            background-color: #000;
            overflow: hidden;
            transition: height 0.3s ease-in-out;
            
        }
    `
    export const Li=styled.li`
    &{
        display: inline-block;
        padding: 0 10px;
        margin: 0 10px;
        font-size: 20px;
        color: white;
        font-family: 'PT Sans', sans-serif;
        cursor: pointer;
        position: relative;
    }
    &:hover .Ho{
        width: 50%;
    }
    @media screen and (max-width: 768px){
            margin: 2% 0;
        }
    `
    export const Logo = styled.div`
        display: flex;
        align-items: baseline;
        justify-content: center;
        position: relative;
        left: 15%;
    `
    export const Span = styled.span`
    &{
        width: 0%;
        height: 2.5px;
        position: absolute;
        top: 80%;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        background: #50C878;
        z-index: -1;
        transition: 0.5s;
    }
    `
    export const P1 = styled.p`
        font-size: 64px;
        color: #50C878;
        @media screen and (max-width: 768px){
            font-size: 48px;
        }
    `
    export const P = styled.p`
        font-size: 32px;
        color: #fff;
        @media screen and (max-width: 768px){
            font-size: 24px;
        }
    `
    export const Hamburger = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 28px;
        @media screen and (max-width: 768px){
            display: flex;
            color: #50C878;
            justify-content: right;
            width: 100%;
        }
    `