import styled from "styled-components";

export const SearchBarDiv = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
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
        margin-bottom: 10px;
        padding: 0 0 0 5px;
        border: none;
        border-radius: 15px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        width: 18rem;
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

    > button {
        border: none;
        border-radius: 5px;
        background-color: #CBCBCB;
        padding: 5px;
        cursor: pointer;
        min-width: 6rem;
    }

    > button:hover {
        background-color: #F6F1E9;
    }
`