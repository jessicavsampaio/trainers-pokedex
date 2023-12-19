import styled from "styled-components";

export const NavBarDiv = styled.div`
    background-color: #F6F1E9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;

    img {
        width: 40px;
    }

    ul {
        display: flex;
        gap: 15px;
    }

    ul a {
        text-decoration: none;
        font-size: 18px;
        color: #000000;
        font-weight: 500;
    }

    ul a:hover {
        cursor: pointer;
        color: #E38B29;
    }

    span {
        color: red;
        border: 1px solid grey;
        border-radius: 50%;
        padding: 0 8px;
        position: absolute;
        top: 10px;
    }

    @media (max-width: 600px) {
        justify-content: space-around;
        padding: 10px 0;
    }
`;
