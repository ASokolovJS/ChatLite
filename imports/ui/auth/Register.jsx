import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Container, Form, Button, Row } from "react-bootstrap";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function registr(){
    Meteor.call("Registration",
      name,
      email,
      password
    , (err, res) => {})
  }
  return (
    <Container className='w-25'>
      <h1 className="text-center mt-5">Регистрация</h1>
      <hr />
      <Row className="justify-content-center mt-5">
        <Form>
          <Form.Label className="mt-3">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label className="mt-3">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="primary" className="mt-3 mb-5" onClick={registr}>
            Зарегистрироваться
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
