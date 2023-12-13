import styled from "styled-components";

export const NavBarDiv = styled.div`
    background-color: #F6F1E9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;

    img {
        width: 40px;
    }

    ul {
        display: flex;
        gap: 15px;
    }

    ul li {
        list-style-type: none;
        font-size: 18px;
    }

    ul li:hover {
        font-weight: 600;
        cursor: pointer;
    }
`;
