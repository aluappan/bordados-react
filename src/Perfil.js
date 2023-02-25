import styled from "styled-components";
import imgperfil from "./assets/perfil280.png"

export default function Perfil(){
    return(
        <Header>
        <img src={imgperfil}></img>
            <h1>Aluappan Bordados 👾</h1>
            <h2>Olá, que bom ver você por aqui! Sinta-se a vontade.</h2>
        </Header>
    )
}

    const Header = styled.header`
        font-family: 'Courier New', Courier, monospace;
        display: flex;
        flex-direction: column;
        margin: 50px auto 0 auto;
        align-items: center;


        img {
            border-radius: 100%;
            width: 15%;
        }
    `