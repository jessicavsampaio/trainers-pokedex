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
        background-color: #F0F0F0;
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
        width: 130px;
        height: 130px;
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .imagem:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    img {
        max-width: 130px;
        align-self: center;
    }

    .rodape {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 65px 15px 30px;
    }

    .pokemonType {
        display: flex;
        gap: 10px;
        padding-bottom: 10px;
        color: #ffffff;
    }

    .pokemonType div {
        padding: 2px 5px;
        border-radius: 10px;
    }

    .pokemonType div:hover {
        color: #000000;
        cursor: context-menu;
    }

    a {
        color: black;
        font-weight: 500;
        margin-top: 10px;
    }

    a:hover {
        font-weight: 700;
        transform: scale(1.1)
    }

    //Cores dos cards por tipo
    .normal {
        background-color: #9B9BA3;
    }
    
    .fire {
        background-color: #CE2525;
    }
    
    .water {
        background-color: #68B5E5;
    }
    
    .grass {
        background-color: #34C677;
    }
    
    .flying {
        background-color: #9FB9EB;
    }
    
    .fighting {
        background-color: #FF8713;
    }
    
    .poison {
        background-color: #C645E1;
    }
    
    .electric {
        background-color: #FFC700;
    }
    
    .ground {
        background-color: #D17F46;
    }
    
    .rock {
        background-color: #D4AD30;
    }
    
    .psychic {
        background-color: #FE7571;
    }
    
    .ice {
        background-color: #77D3C3;
    }
    
    .bug {
        background-color: #A2C629;
    }
    
    .ghost {
        background-color: #7272D2;
    }
    
    .steel {
        background-color: #5AA7AA;
    }
    
    .dragon {
        background-color: #0A6DCA;
    }
    
    .dark {
        background-color: #5D5F6A;
    }
    
    .fairy {
        background-color: #F29FE5;
    }
`