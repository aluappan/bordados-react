import styled from "styled-components"
import imggithub from "./icons/imggithub.png"
import imginsta from "./icons/imginsta.png"
import imglinkedin from "./icons/imglinkedin.png"

export default function Footer(){
    return(
        <Body>
            <p>Você também pode aproveitar para me seguir nas 
                minhas outras redes sociais. 
            </p>
            <Icons>
                <img src={imggithub} alt="github"></img>
                <img src={imginsta} alt="instagram"></img>
                <img src={imglinkedin} alt="linkedin"></img>
            </Icons>
            <p>&copy; Aluappan 👾 </p>
        </Body>
    )
}

const Body = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`

const Icons = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-evenly;

    img {
        width: 15%;
    }
`