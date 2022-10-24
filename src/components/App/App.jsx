import React from "react";
import { useFormik } from "formik";
import { Container, Logo, Rectangle, Form, Input, Button } from "./App.styles";

export const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  });

  return (
    <Container>
      <Logo />
      <Rectangle />
      <Form>
        <Input
          id="email"
          name="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <Input
          id="password"
          name="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </Form>
      <Button>Login</Button>
    </Container>
  );
};
