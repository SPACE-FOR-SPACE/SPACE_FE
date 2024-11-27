import React from "react";
import styled from "styled-components";

export default function Member({ profile }) {
    return (
        <Container>
            <Profile src={profile} />
            <Box>
                <Name>남예준</Name>
                <Move>풀이내역 확인 ➜</Move>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

const Profile = styled.img`
    width: 65px;
    height:65px;
    border: none;
    border-radius: 50%;
    background-color: #D9D9D9;
    object-fit: cover;
    display: block;
`;

const Box = styled.div `
    display: flex;
    flex-direction: column; 
    text-align: left;
`

const Name = styled.div`
    margin-left: 20px;
    margin-top: 8px;
    color: #7B7B7B;
    font-size: 15px;
    display: block;
`

const Move = styled.div`
    margin-left: 20px;
    margin-top: 8px;
    color: #7B7B7B;
    font-size: 12px;
    display: block;
    cursor: pointer;
`