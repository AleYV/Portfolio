import React from 'react';
import {AboutContainer,
        AboutWrapper,
        AboutRow,
        Column1,
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        Social,
        SocialItem,
        Linkedin,
        Github,
        Email,
        ImgWrap,
        Img
        } from './AboutElements';
import Perfil from '../../images/perfil.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

function About() {


    return (
        <AboutContainer id='about'>
            <AboutWrapper>
                <AboutRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                Mi nombre es Alesandra Yagi
                            </TopLine>
                            <Subtitle>
                                Soy una estudiante de la carrera de Ciencias de la Computación en la búsqueda de mi primer empleo. 
                            </Subtitle>
                            <Subtitle marginb='20px'>
                                Me gusta aprender nuevas tecnologías. 
                            </Subtitle>
                            {/*<Heading align='left'>
                                Social:
                            </Heading>*/}
                            <Social>
                                <SocialItem onClick={()=> window.open("https://www.linkedin.com/in/alesandra-yagi/", "_blank")}>
                                    <Linkedin/>
                                </SocialItem>
                                <SocialItem onClick={()=> window.open("https://github.com/AleYV", "_blank")}>
                                    <Github/>
                                </SocialItem>
                                <CopyToClipboard text="ale.yagi.v@gmail.com">
                                        <SocialItem onClick={()=>toast.success('G-mail copiado al portapapeles.')}>
                                            <Email/>
                                        </SocialItem>
                                </CopyToClipboard>
                                <Toaster position="bottom-center"
                                        reverseOrder={false}/>
                            </Social>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <Heading size='38px'>
                            Sobre mí
                        </Heading>
                        <ImgWrap>
                            <Img src={Perfil}/>
                        </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>);
}

export default About;
