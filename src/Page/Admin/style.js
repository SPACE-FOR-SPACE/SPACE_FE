import styled, { createGlobalStyle } from "styled-components";

export const Body = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
    }
`;

export const Title = styled.h1 `
    padding-left: 50px;
    font-size: 40px;
    color: #7b7b7b;

    span {
        color: #030A62;
    }
`

export const Section = styled.section`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
`;

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    gap: 20px; 
    
`;