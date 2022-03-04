import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import Background from '../components/Background';
import About from '../components/AboutSection';
import Skills from '../components/SkillsSection';
import Portfolio from '../components/PortfolioSection';
/*import Contact from '../components/ContactSection';*/

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/> 
            <Navbar toggle={toggle}/>
            <HomeSection/>
            <Background/>
            <About/>
            <Skills/>
            <Portfolio/>
        </>
    );
}

export default Home;
