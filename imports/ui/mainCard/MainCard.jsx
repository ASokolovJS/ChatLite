import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {ListChat} from "../listChatCard/ListChat";

export const MainCard = () => {
    return (
      <Card className="mainCard shadow">
        <h2 className="text-center">Сhoose a chat</h2>
        <Row>
          <Col>

          </Col>
          <Col md={4}>
            <ListChat/>
          </Col>
        </Row>
      </Card>
    );
};
