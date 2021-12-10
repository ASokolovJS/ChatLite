import React from "react";
import {Col, Row} from "react-bootstrap";

export const mainLayout = ({content, profile, msgCard}) => {
    return(
        <Row>
          <h1 className="text-center mb-5">Добро пожаловать в чат</h1>
          <Col md={9}>
            {content()}
            {msgCard()}
          </Col>
          <Col>
            {profile()}
          </Col>
        </Row>
    )
}

