import React from "react";
import { useFormik } from "formik";
import {
  Container,
  Logo,
  Rectangle,
  Form,
  Input,
  Button,
} from "./Login.styles";

export const Login = () => {
  const allert = () => {
    alert(`email: ${formik.values.email}\npassword: ${formik.values.password}`);
  };

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
      <Button onClick={allert}>Login</Button>
    </Container>
  );
};
