import React from 'react'
import {ContactSection,
        ContactContainer,
        Title,
        ContactRow,
        Column1,
        Column2,
        Input,
        ImgWrap,
        Img} from './ContactElements';
import Nave from '../../images/nave5.png'

function Contact() {
    return (
        <ContactSection id='contact'>
            <Title>Contact Me</Title>
            <ContactContainer>
                <ContactRow>
                    <Column1>
                        <ImgWrap>
                            <Img src={Nave}/>
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <form>
                            <Input type='text'
                                    placeholder='Name'/>
                            <Input type='email'
                                    placeholder='Email'/>

                            <textarea 
                            rows="4" 
                            cols="50" 
                            name="comment" 
                            form="usrform"
                            placeholder='Enter message here...'/>
                            <Input type='submit' value='Submit' width='50%'/>       
                        </form>
                    </Column2>
                </ContactRow>
            </ContactContainer>
        </ContactSection>
  )
}

export default Contact