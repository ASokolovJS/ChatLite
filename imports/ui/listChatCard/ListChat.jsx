import React from "react";
import {Card, Row, Col} from "react-bootstrap";

export const ListChat = () => {
  return (
    <Card className="listChat shadow text-center">
      <Row>
        <Col>
          <h5>Чаты</h5>
          <hr/>
          <a href='/chat/Alex'>Alex</a><br/>
          <a href='/chat/Ivan'>Ivan</a><br/>
          <a href='/chat/Mark'>Mark</a><br/>
          <a href='/chat/Niko'>Niko</a>
        </Col>
        <Col>
          <h5>Пользователи</h5>
          <hr/>
        </Col>
      </Row>
    </Card>
  );
};
