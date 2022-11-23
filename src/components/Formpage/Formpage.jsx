import React from "react";
import { useFormik } from "formik";
import { Logo, Rectangle, Container, Form, Input, Button, ShowPass } from "./Formpage.styles";

export const Formpage = ({text}) => {
  const getJson = () => {
    alert(`email: ${formik.values.email}\npassword: ${formik.values.password}`);
  };

  const toggleVisability = () => {
    let temp = document.getElementById("password");
    temp.type === "password" ? (temp.type = "text") : (temp.type = "password");
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
          type="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </Form>
      <ShowPass>
        <input type="checkbox" onClick={toggleVisability} />
        <div>Show password</div>
      </ShowPass>
      <Button onClick={getJson}>{text}</Button>
    </Container>
  );
};
