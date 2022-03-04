import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from 'react-scroll';
import '../../App.css';

export const Nav = styled.nav`
    align-items: center;
    display: flex;
    font-size: 1rem;
    justify-content: center;
    position: fixed;
    height: 5rem;
    top: 0;
    padding-bottom: 0.5rem;
    width: 100%;
    z-index: 10;
    overflow: hidden;
    background-color: transparent;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
        background: transparent;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    width: 100%;
    height: 80px;
    z-index: 1;
    color: #0E1219;

`;

export const NavLogo = styled(LinkR)`
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 1.8rem;
    font-weight: 700;
    justify-self: flex-start;
    margin-left: 24px;
    text-decoration: none;

`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        cursor: pointer;
        font-size: 1.8rem;
        color: white;
    }

    &.active{
        color: white;
    }
`;



export const NavMenu = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0 auto;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }

    &.active{
        color: white;
    }
`;

export const NavItem = styled.li`
    height: 3rem;
    font-size: 1rem;
`;

export const NavLink = styled(LinkS)`
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 100%;
    padding: 0 1.75rem;
    text-decoration: none;

    &.active{
        border-bottom: 3px solid white;
    }

    &:hover{
        color: #6867AC;
        transition: 0.2s ease-in-out;
    }
`;
