import React from "react";
import {Col, Navbar, Row} from "react-bootstrap";
import {Profile} from "../profile/Profile";
import {ListChat} from "../listChatCard/ListChat";

export const mainLayout = ({content}) => {
  return (
    <div>
      <Navbar className='mb-3 justify-content-end'>
        <Navbar.Brand>Добро пожаловать!</Navbar.Brand>
        <Profile/>
      </Navbar>
      <hr/>
      <Row>
        <Col md={9}>
          {content()}
        </Col>
        <Col>
          <ListChat/>
        </Col>
      </Row>
    </div>
  )
}

