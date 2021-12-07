import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Container, Form, Button, Row } from "react-bootstrap";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function regUser() {
    Meteor.call(
      "register",
      {
        login: email,
        password: password,
        name: name,
      },
      (err, res) => {
        if (err) {
          console.log("error", err);
        }
        if (res) {
        }
      }
    );
  }

  return (
    <Container>
      <h1 className="text-center">Registration</h1>
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
          <Button variant="primary" className="mt-3 mb-5" onClick={regUser}>
            Register
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
