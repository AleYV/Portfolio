import React from 'react';
import { HomeContainer,
        HomeContent,
        HomeP,
        HomeN,
        HomeH,
        HomeS,
        Button,
        Bname} from './HomeElements';
import Resume from '../../PDF/Resume.pdf';
import 'animate.css';

const HomeSection = () => {

    return (
        <HomeS>
            <HomeContainer>
                <HomeContent>
                    <HomeP className='animate__animated animate__bounceIn'>
                        Hola Mundo
                    </HomeP>
                    <HomeN className='animate__animated animate__fadeInDown animate__delay-1s'>
                        Soy Alesandra
                    </HomeN>
                    <HomeH className='animate__animated animate__backInLeft animate__delay-2s'>
                        Desarrolladora Front-end
                    </HomeH>
                    <a href={Resume} filename='texto' download='CV-Alesandra-Yagi.pdf'>
                        <Button className='animate__animated animate__flash animate__delay-4s'>
                            <Bname>Descargar CV</Bname>
                        </Button>
                    </a>
                </HomeContent>
            </HomeContainer>

        </HomeS>);
}

export default HomeSection;
