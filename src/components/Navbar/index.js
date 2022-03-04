import React, {useState, useEffect} from 'react';
import {Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle}) => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    
    const [navbarcolor, setNavbarcolor] = useState(false)

    const changeTextColor = () =>{
        if (window.scrollY >= 250) {
            setNavbarcolor(true)
        } else {
            setNavbarcolor(false)
        }
    }

    useEffect(() => {
        changeTextColor()
        window.addEventListener("scroll", changeTextColor);
    })

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}> 
                        AY
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu className={navbarcolor ? "navbarcolor active" : "navbarcolor"}>
                        <NavItem id='NavItem'>
                            <NavLink to='about'
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    offset={0}>
                                Sobre mí
                            </NavLink>
                        </NavItem>
                        <NavItem id='NavItem'>
                            <NavLink 
                                    to='skills'
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    offset={0}>
                                Habilidades
                            </NavLink>
                        </NavItem>
                        <NavItem id='NavItem'>
                            <NavLink to='portfolio'
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    offset={0}>
                                Portafolio
                            </NavLink>
                        </NavItem>
                        {/*<NavItem id='NavItem'>
                            <NavLink to='contact' 
                                    smooth={true}
                                    duration={600}
                                    spy={true}
                                    offset={0}>
                                Contact
                            </NavLink>
                            </NavItem>*/}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
        );
    };

export default Navbar;
