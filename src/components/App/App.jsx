import React from "react";
import { Outlet } from 'react-router-dom';
import { Main, Button, ButtonContainer, Container } from "./App.styles";

export const App = () => {
  return (
    <Main>
      <ButtonContainer>
        <Button to="/">Home</Button>
        <Button to="login">Login</Button>
        <Button to="register">Registration</Button>
      </ButtonContainer>
      <Container>
        <Outlet/>
      </Container>
    </Main>
  );
};
