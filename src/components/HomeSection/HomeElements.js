import styled from "styled-components";
import Background from '../../images/Fondo1.png';

export const HomeS= styled.div`
    min-height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    overflow: hidden;
    position: relative;
    height: 100%;
;`

export const HomeContainer = styled.div`
    padding: 40px;
    background: rgb(255,255,255,0.25);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid white;
    border-radius: 4px;

    @media screen and (max-width: 768px){
        padding: 0.5rem;
    }
    @media screen and (max-width: 414px){
        background: rgb(255,255,255,0.4);
        padding: 1.5rem;
    }
`;

export const HomeContent = styled.div`
    text-align: center;
`;

export const HomeP = styled.p`
    font-size: 20px;
    color: #1A1A40;
    weight: 700;
    @media screen and (max-width: 768px){
        font-size: 15px;
    }
    @media screen and (max-width: 414px){
        font-size: 20px;
    }
`;

export const HomeN = styled.h1`
    font-size: 50px;
    text-transform: capitalize;
    color: #48426D;
    @media screen and (max-width: 768px){
        font-size: 35px;
    }
    @media screen and (max-width: 414px){
        font-size: 50px;
    }
`;

export const HomeH = styled.h2`
    font-size: 20px;
    text-transform: capitalize;
    padding: 0 0 10px;
    color: #1A1A40;
    @media screen and (max-width: 768px){
        font-size: 15px;
    }
    @media screen and (max-width: 414px){
        font-size: 20px;
    }
`;


export const Button = styled.button`
    border: 0.5px solid #FFDAE6;
    padding: 11px 31px;
    display: inline-flex;
    border-radius: 25px;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 1;
    position: relative;
    background: #FFDAE6;
    overflow: hidden;
    border-image-source: none;

    @media screen and (max-width: 768px){
        font-size: 13px;
        padding: 7px 18px;
    }
    @media screen and (max-width: 414px){
        font-size: 1rem;
        padding: 11px 31px;
    }

    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        background-color: #6867AC;
        transition: width 0.7s, height 0.7s;
    }

    &:hover{
        border: 0.5px solid #6867AC;
        color: white;
        
        &:before{
            width: 300px;
            height: 300px;
        }
    }
    }
`;

export const Bname = styled.span`
    position: relative;
    z-index: 1;

    &:hover{
    }
`;

