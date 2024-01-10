import styled from "styled-components";

export const SearchBarDiv = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px 0;
    background-image: url("./images/banner-pokeball.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;

    > h1 {
        color: #ffffff;
        padding: 20px;
        width: 40rem;
        text-align: center;
    }
    
    > input[type="search"], select {
        width: 30%;
        border-radius: 15px;
        padding: 5px 15px;
        border: none;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
        font-size: 14px;
        width: 18rem;
    }

    > input:hover {
        background-color: #F6F1E9;
    }

    fieldset {
        text-align: center;
        padding: 0 0 0 5px;
        border: none;
        border-radius: 15px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        width: 18rem;
        background-color: #ffffff;
    }

    fieldset p {
        font-weight: 600;
        padding-top: 10px;
    }

    fieldset div {
        display: flex;
        gap: 10px;
        padding: 5px;
    }

    .radio-div {
        display: flex;
        gap: 2px;
    }

    .radio-div:hover {
        font-weight: 600;
    }

    .buttons {
        display: flex;
        gap: 15px;
    }

    .buttons button {
        border: none;
        border-radius: 5px;
        background-color: red;
        padding: 5px;
        cursor: pointer;
        min-width: 6rem;
        font-weight: 600;
        color: #ffffff;
    }

    .buttons button:last-child {
        background-color: #EBEBEB;
        color: #000000;
    }

    .buttons button:hover {
        background-color: #ffffff;
        color: #000000;
    }

    @media (max-width: 600px) {
        h1 {
            width: 350px;
            font-size: 24px;
        }
    }
`