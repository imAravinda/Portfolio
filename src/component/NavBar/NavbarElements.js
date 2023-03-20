import styled from "styled-components";
export const Navbar=styled.div`
        display: block;
        margin: 0;
    `
    export const Nav=styled.nav`
        display: flex;
        position: fixed;
        justify-content: space-between;
        background:transparent;
        height: 100px;
        width: 100%;
        z-index: 9999;
    `
    export const NavActive = styled.div`
        display: flex;
        position: fixed;
        justify-content: space-between;
        color:  #FFF8E1;
        background: #272D29;
        height: 100px;
        width: 100%;
        z-index: 9999;
        transition: all 0.5s ease;
    `
    export const Links = styled.div`
        display: flex;
        align-items: center;
    `
    export const Ul=styled.ul`
        list-style-type: none;
        display: flex;
        align-items: baseline;
        margin: 0px 20px;
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
    `
    export const P = styled.p`
        font-size: 32px;
        color: #fff;
    `