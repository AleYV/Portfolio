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

const HomeSection = () => {

    return (
        <HomeS>
            <HomeContainer>
                <HomeContent>
                    <HomeP>
                        Hola Mundo
                    </HomeP>
                    <HomeN>
                        Soy Alesandra
                    </HomeN>
                    <HomeH>
                        Desarrolladora Front-end
                    </HomeH>
                    <a href={Resume} filename='texto' download='CV-Alesandra-Yagi.pdf'>
                        <Button>
                            <Bname>Descargar CV</Bname>
                        </Button>
                    </a>
                </HomeContent>
            </HomeContainer>

        </HomeS>);
}

export default HomeSection;
