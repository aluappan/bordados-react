import styled from "styled-components";

export default function Content() {
    const bordados = [
        { bordado: "Among Us", imagem: "./assets/amongus.png" },
        { bordado: "Coelho", imagem: "./assets/coelho.png" },
        { bordado: "Gengar", imagem: "./assets/gengar.png" },
        { bordado: "Hamtaro", imagem: "./assets/hamtaro.png" },
        { bordado: "Hands", imagem: "./assets/hands.png" },
        { bordado: "Kirby", imagem: "./assets/kirby.png" },
        { bordado: "K.K. Slider", imagem: "./assets/kk.png" },
        { bordado: "Pikachu", imagem: "./assets/pikachu.png" },
        { bordado: "Pikachu", imagem: "./assets/pikachu2.png" },
        { bordado: "Pochita", imagem: "./assets/pochita.png" },
        { bordado: "Jigglypuff", imagem: "./assets/puff.png" },
        { bordado: "Tom Nook", imagem: "./assets/tom-nook.png" },
        { bordado: "Totoro", imagem: "./assets/totoro.png" },
        { bordado: "Totoro", imagem: "./assets/totoro2.png" },
        { bordado: "Twin Peaks", imagem: "./assets/twinpeaks.png" },
    ];

return (
    <Container>
        {bordados.map((item) => 
            <Card>
            <Imagem src={item.imagem} alt={item.imagem}/>
            <h1>{item.bordado}</h1>
            <button>Ver mais</button>
            </Card>
        )}
    </Container>
)
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
`

const Card = styled.div`
    padding: 2% 0 2% 0;
    border: 1px solid rgba(209, 221, 194, 0.539);
    margin: 10px;
    display: inline-block;
    border-radius: 5%;

    button {
        background-color: rgb(255, 119, 207);
        border-style: none;
        font-family: "Courier New";
        padding: 8px;
        border-radius: 5px;
    }

    button:hover {
        cursor: pointer;
}
`

const Imagem = styled.img`
    border-radius: 10%;
    width: 70%;

    :hover {
        color:white;
        opacity: 0.8;
        transition: opacity .3s ease-in-out;
        cursor: pointer;
    }
`