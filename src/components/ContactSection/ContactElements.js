import styled from "@emotion/styled";

export const ContactSection = styled.div`
    min-height: 100vh;
    padding: 20px;

    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`;

export const ContactContainer = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 5rem;
`;

export const Title = styled.h2`
    color: #fff;
    margin-top: 4.3rem;
    text-align: center;
`;

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    

    @media screen and (max-width: 1048px){
        grid-template-areas: 'col2';
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding:0 15px;
    grid-area: col1;

    @media screen and (max-width: 1048px){
        display: none;
    }
`;

export const Column2 = styled.div`
    margin: 1.5rem;
    padding: 0 4rem 4rem 4rem;
    grid-area: col2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputStyled = styled.input`
    margin: ${(props) => (props.margin ? props.margin : "8px 0px")};
    padding: ${(props) => (props.padding ? props.padding : "6px")};
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "auto")};
    color: ${(props) => (props.color ? props.color : "black")};
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 8px;
    &:focus {
    border: 2px solid #2F80ED;
    outline-color: #2F80ED;
    }
`;

export const Input = (props) =>{
    return(
        <InputStyled {...props}/>
    );
}

const TextAreaStyled = styled.textarea`
    margin: ${(props) => (props.margin ? props.margin : "8px 0px")};
    padding: ${(props) => (props.padding ? props.padding : "6px")};
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "auto")};
    color: ${(props) => (props.color ? props.color : "black")};
    border: 1px solid #bdbdbd;
    border-radius: 20px;
    &:focus {
    border: 2px solid #2F80ED;
    outline-color: #2F80ED;
}
`;

export const TextArea = (props) =>{
    return(
        <TextAreaStyled {...props}/> 
    )
}

export const ImgWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const Img = styled.img`
    width: 100%;
    border-radius: 50px;
    transform: rotate(45deg);
`;