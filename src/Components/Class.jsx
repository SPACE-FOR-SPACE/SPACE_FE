import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export default function Class({ title, members, deadline }) {
    return (
        <Card>
            <Header>{title}</Header>
            <Footer>
                <TextContainer>
                    <div>인원 : {members}</div>
                    <div>과제기한 : {deadline}</div>
                </TextContainer>
                <Button><IoIosArrowForward /></Button>
            </Footer>
        </Card>
    );
};


const Card = styled.div`
    width: 230px;
    height: 225px;
    border: none;
    border-radius: 20px;
    background-color: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    margin-top: 10px;
`;

    const Header = styled.div`
        padding: 25px;
        color: white;
        font-size: 24px;
        background-color: #d9821f;
        width:250px;
        height:200px;
        font-weight: bold;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 10px;
        margin: 0;
    `;

const Footer = styled.div`
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px 0px 20px 20px;
    border: 1px solid #C3C3C3;
    color: #7B7B7B;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
    color: #333;
`;

const Button = styled.button`
    color: white;
    font-size: 30px;
    font-weight: 600;
    width: 40px;
    height: 40px;
    border: none;
    background-color: #D9D9D9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;