import styled from "styled-components";

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > .pokemonList {
        width: 100%;
        padding: 2rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }

    > button {
        padding: 5px 10px;
        background-color: #F0F0F0;
        border: none;
        font-weight: 600;
        margin-bottom: 30px;
        cursor: pointer;
    }

    > button:hover {
        background-color: #F6F1E9;
    }
`