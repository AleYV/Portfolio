import styled from '@emotion/styled';
import {BsFillPatchCheckFill} from "react-icons/bs";

export const SkillSection = styled.div`
    padding: 20px;
    min-height: 100vh;
    
    @media screen and (max-width: 768px){
        padding: 40px;
    }
`;

export const SkillContainer = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 35px;
    align-content: center;
`;

export const Title = styled.h2`
    color: #fff;
    margin-top: 4.3rem;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`;

export const SkillsRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    

    @media screen and (max-width: 768px){
        grid-template-areas: 'col1' 'col2';
    }
`;

export const Column1 = styled.div`
    margin: 1.5rem;
    padding:1rem;
    grid-area: col1;
    border: 1px solid #fff;
    background-color:  rgb(255,255,255,0.25);
    border-radius: 1rem;
    
`;

export const Column2 = styled.div`
    margin: 1.5rem;
    padding: 1rem;
    grid-area: col2;
    border: 1px solid #fff;
    background-color:  rgb(255,255,255,0.25);
    border-radius: 1rem;
`;


export const Subtitle = styled.h3`
    color: #fff;
    text-align: center;
`;

export const Box = styled.div`
    column-gap: 7rem;
    display: flex;
    justify-content: center;
`;

export const SkillsGroup = styled.div`
`;

export const SkillData = styled.div`
    display: flex;
    column-gap: 0.5rem;
    padding-top: 0.75rem;
`;

export const SkillName = styled.h4`
    color: white;
    font-size: 0.90rem;
    line-height: 1rem;

`;

export const SkillLevel = styled.p`
    color: white;
    font-size: 0.75rem;
`;

export const Check = styled(BsFillPatchCheckFill)`
    color: white;
    font-size: 1rem;
    color: black;
`;

export const Skill = styled.div`
    align-content: flex-start;
    row-gap: 1rem;
`;