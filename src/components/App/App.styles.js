import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div`
  background: #d9d9d9;
  height: 100vh;
  margin: -8px;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-right: 1780px;
    margin-top: 370px;
`   

export const Container = styled.div`
    display: flex;
    align-items: center;  
`

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    color: black;
    text-decoration: none;
    width: 120px;
    font-size: 20px;
    margin-top: 20px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
`
