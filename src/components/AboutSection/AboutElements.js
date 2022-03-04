import styled from "styled-components";
import {FaLinkedinIn} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import {FaEnvelope} from 'react-icons/fa';

export const AboutContainer = styled.div`
    color: #fff;
    padding: 20px;
    padding-top: 70px;
    min-height: 100vh;
    
    @media screen and (max-width: 768px){
        padding-top: 80px;
    }

    @media screen and (max-width: 540px){
        padding-top: 100px;
    }
`;

export const AboutWrapper = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    place-items: center;
    `;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px){
        grid-template-areas: 'col2' 'col1';
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding:0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding:0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
    justify-items: center;

    @media screen and (max-width: 768px){
        text-align: center;
        padding-bottom: 0;
    }
`;

export const TopLine = styled.p`
    padding-top: 30px;
    color: #CE7BB0;
    font-size: 28px;
    line-height: 30px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    padding-top: 40px;

    @media screen and(max-width: 780){
        text-align: center;
    }
`;

const HeadingStyle = styled.h1`
    margin-bottom: 24px;
    font-size: ${(props) => (props.size ? props.size : "20px")};;
    line-height: 1.1;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 auto;
    text-align: ${(props) => (props.align ? props.align : "center")};

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`;

export function Heading(props){
    return <HeadingStyle {...props}/>;
}

const SubtitleStyle = styled.h3`
    margin-bottom: ${(props) => (props.marginb ? props.marginb : "5px")};
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;

    @media screen and(max-width: 780){
        justify-content: center;
        text-align: center;
    }
`;

export function Subtitle(props){
    return <SubtitleStyle {...props}/>;
}

export const Social = styled.ul`
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

export const SocialItem = styled.li`
    display: inline-block;
    margin: 10px 15px;
    padding: 7px 10px;
    cursor: pointer;
    border: 2px solid #FBB0BD;
    border-radius: 50px;
    background: #1D2021;
    transition: 0.5s box-shadow;
    font-size: 18px;

    &:hover{
        box-shadow: 0 5px 30px 0px #FBB0BD;
    }
`;



export const Linkedin = styled(FaLinkedinIn)`
    padding-top: 2px;
    color: white; 
`;

export const Github = styled(FiGithub)`
    padding-top: 2px;
    color: white; 
`;

export const Email = styled(FaEnvelope)`
    padding-top: 2px;
    color: white; 
`;

export const ImgWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const Img = styled.img`
    width: 60%;
    border-radius: 50px;
`;