import React from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, Col, Row} from "react-bootstrap";

export const Auth = () => {
  return (
    <Router >
      <Row className='justify-content-center mt-5'>
        <Card className='w-25 text-center' >
          <Col className='mb-5'>
            <Link className='btn btn-primary mt-3 mx-3' to='/login'>Login</Link>
            <Link className='btn btn-primary mt-3' to='/register'>Register</Link>
          </Col>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </Card>
      </Row>
    </Router>
  );
};
