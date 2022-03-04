import React from 'react'
import styled from "@emotion/styled";

const PortfolioStyled = styled.li`
    font-size: 0.8rem;
    margin-right: 0.8rem;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor:pointer;
    color:white;
    text-align: center;
    display:table-cell;

    &.active{
        background-color: rgb(299,299,299,0.4);
    }
`;

export default function PortfolioList({title, id, active, setSelected}) {
    return (
        <PortfolioStyled className={active ? "portfolioList active": "portfolioList"} 
                        key="{title}"
                        onClick={() => setSelected(id)}>
            {title}
        </PortfolioStyled>
    )
}

