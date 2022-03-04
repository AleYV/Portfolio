import React, {useState, useEffect} from 'react'
import {PorfolioSection,
        PortfolioContainer,
        PortfolioContent,
        Title,
        PortfolioMenu,
        PortfolioItem,
        Img,
        ItemName
        } from "./PortfolioElements";

import { WebApplication, SinglePage } from '../../Data/data';
import PortfolioList from './Portfolio';


function Portfolio() {

    const [selected, setSelected] = useState("Single");
    const [data, setData] = useState([]);

    const list =[
        {
            id: "Single",
            title: "Single-Page Application"
        },
        {
            id: "WebApp",
            title: "Web Application"
        }
    ];

    useEffect(() => {
        switch(selected){
            case "WebApp": 
                setData(WebApplication);
                break;
            case "Single": 
                setData(SinglePage);
                break;
            default:  
                setData(SinglePage);
        }
    }, [selected])

    return (
        <PorfolioSection id='portfolio'>
            <PortfolioContainer>
                <Title>Portafolio</Title>
                <PortfolioMenu>
                    {list.map(item => (<PortfolioList
                                        title={item.title} 
                                        id={item.id}
                                        key={item.id}
                                        active={selected === item.id}
                                        setSelected={setSelected}/>))}
                </PortfolioMenu>
                <PortfolioContent>
                    {data.map(d => (
                    <PortfolioItem>
                            <Img src={d.img} onClick={()=> window.open(d.href, "_blank")}/>
                            <ItemName key={d.id}>{d.title}</ItemName>
                    </PortfolioItem>))}
                </PortfolioContent>
            </PortfolioContainer>

        </PorfolioSection>
    );
}

export default Portfolio