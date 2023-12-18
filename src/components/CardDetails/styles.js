import styled from "styled-components";

export const CardDetailsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .details {
        width: 570px;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }

    .details svg {
        width: 24px;
        height: 24px;
    }
    
    .details a {
        text-decoration: none;
        color: #E38B29;
    }

    .details a div:hover {
        font-weight: 600;
        transform: scaleY(1.1)
    }
    
    .details a div {
        display: flex;
        align-items: center;
    }

    .cardInfo {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .image {
        border-right: 1px solid #E0E0E0;
        padding-right: 30px;
    }

    .image img {
        width: 140px;
    }

    .infos {
        display: flex;
        flex-direction: column;
        
    }

    .pokemonChain {
        display: flex;
        justify-content: space-around;
    }

    .pokemonChain img {
        width: 100px;
    }

    .pokemonChainNames {
        display: flex;
        justify-content: space-around;
        gap: 20px;
    }
    
    .pokemonChainNames p {
        font-weight: 600;
    }

    @media (max-width: 600px) {
        .details {
            width: 90%
        }

        .cardInfo {
            flex-direction: column;
            align-items: center;
        }

        .image {
            border-right: none;
        }
    }
`