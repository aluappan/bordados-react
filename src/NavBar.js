import styled from "styled-components";

export default function NavBar() {
    return(
        <Nav>
            <Tab>About</Tab>
            <Tab>Entre em contato</Tab>
            <Tab>Encomendas</Tab>
            <Tab>Todos os produtos</Tab>
        </Nav>
    )
}

const Nav = styled.nav`
    width: 40%;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-between;
`

const Tab = styled.button`
    font-family: 'Courier New';
    background-color: rgb(204, 250, 157);
    padding: 0.8%;
    border: none;
    border-radius: 5px;
`