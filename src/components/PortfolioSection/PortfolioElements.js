import styled from "@emotion/styled";


export const PorfolioSection = styled.div`
    min-height: 100vh;
    padding: 20px;

    @media screen and (max-width: 768px){
        padding: 40px;
        padding-bottom: 1rem;
    }
`;

export const PortfolioContainer = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 5rem;

    @media screen and (max-width: 768px){
        padding: 0;
    }
`;

export const Title = styled.h2`
    color: #fff;
    margin-top: 4.3rem;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`;

export const PortfolioMenu = styled.ul`
    list-style: none;
    margin: 1rem;
    padding: 0;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
`;



export const PortfolioContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const PortfolioItem = styled.div`
    width: 13rem;
    height: 11rem;
    border-radius: 1.5rem;
    border: 1px solid rgb(240,239,239);
    margin: 0.6rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`;

export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
        opacity: 0.2;
        z-index: 1;
    }
`;

export const ItemName = styled.h3`
    position: absolute;
    font-size: 1.5rem;
    text-align: center;
`;