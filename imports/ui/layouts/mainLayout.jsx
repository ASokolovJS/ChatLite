import React from "react";
import {Col, Nav, Navbar, Row} from "react-bootstrap";
import {Profile} from "../profile/Profile";

export const mainLayout = ({content, list, msgCard}) => {
    return(

        <Row>
            <Navbar bg='primary' className='mb-3'>
                <Navbar.Brand>Welcome</Navbar.Brand>
                <Profile/>
            </Navbar>
          <Col md={9}>
            {content()}
              {msgCard()}
          </Col>
          <Col>
              {list()}
          </Col>
        </Row>
    )
}

