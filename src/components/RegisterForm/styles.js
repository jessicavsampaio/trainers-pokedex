import styled from "styled-components";

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    > div {
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    h2 {
        margin-bottom: 15px;
    }

    label {
        font-weight: 500;
    }

    input {
        width: 30%;
        border-radius: 15px;
        padding: 5px 15px;
        border: none;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
        font-size: 14px;
        width: 18rem;
    }

    p {
        align-self: center;
        margin: 15px 0;
        font-size: 14px;
    }

    button {
        border: none;
        border-radius: 5px;
        background-color: red;
        padding: 5px;
        cursor: pointer;
        min-width: 6rem;
        font-weight: 600;
        color: #ffffff;
    }

    button:hover {
        background-color: #EBEBEB;
        color: #000000;
    }
`