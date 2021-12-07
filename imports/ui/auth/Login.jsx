import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { Meteor } from "meteor/meteor";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  
  Meteor.subscribe("usersOnline");

  const logins = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(userEmail, password);
  };

  return (
    <Container>
      <h1 className="text-center">Log in to you Account</h1>
      <hr />
      <Row className="justify-content-center mt-5">
        <Form>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="userEmail"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="mt-3 mb-5" variant="primary" onClick={logins}>
            Login
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
