import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { Meteor } from "meteor/meteor";
import {FlowRouter} from "meteor/ostrio:flow-router-extra";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  function log(){
      event.preventDefault()
   Meteor.loginWithPassword(userEmail, password, (err, res)=> err ? alert("Пользователь не найден") : FlowRouter.go('/'))
  }

   return (
    <Container className='w-25'>
      <h3 className="text-center mt-5">Войти в Аккаунт</h3>
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
          <Button className="btn btn-primary mt-3 mb-5" onClick={log}>
            Войти
          </Button>
        </Form>
        <div className="text-end">
            <h3>Нет аккаунта?</h3>
            <a className="btn btn-outline-primary" href='/register'>Зарегистрироваться</a>
        </div>
      </Row>
    </Container>
  );
};
