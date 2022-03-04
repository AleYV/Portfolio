import React from 'react';
import { SideBarContainer, 
        CloseIcon, 
        Icon,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink } from './SideBarElements';

const Sidebar = ({isOpen, toggle}) => {
  return(
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>
                    Sobre mí
                </SidebarLink>
                <SidebarLink to='skills' onClick={toggle}>
                    Habilidades
                </SidebarLink>
                <SidebarLink to='portfolio' onClick={toggle}>
                    Portafolio
                </SidebarLink>
                {/*<SidebarLink to='contact' onClick={toggle}>
                    Contact
                </SidebarLink>*/}
            </SidebarMenu>
        </SidebarWrapper>
    </SideBarContainer>
    );
};

export default Sidebar;
