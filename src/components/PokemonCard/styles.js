import styled from "styled-components";

export const PokemonCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    border-radius: 15px;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);

    

    .topInfo {
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1;
    }

    .topInfo h3 {
        text-transform: capitalize;
    }

    .cabecalho {
        background-color:  #F0F0F0;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 15px 15px 0 0;
        padding: 15px 15px 0;
        height: 130px;
        position: relative;
    }

    .imagem {
        position: absolute;
        bottom: -55px;
        background-color: white;
        border-radius: 50%;
        align-self: center;
    }

    .imagem:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    img {
        width: 130px;
        align-self: center;
    }

    .rodape {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 15px 30px;
    }

    .pokemonType {
        display: flex;
        gap: 10px;
        padding-bottom: 10px;
    }

    .rodape p {
        text-align: center;
        font-size: 14px;
    }

    a {
        color: black;
        font-weight: 500;
        margin-top: 10px;
    }

    a:hover {
        color: grey;
    }
`