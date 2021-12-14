import React from "react";
import {Card, Row, Col} from "react-bootstrap";

export const ListChat = () => {
  return (
    <Card className="listChat shadow text-center">
      <Row>
        <Col>
          <h5>Чаты</h5>
          <hr/>
          <a href='/Alex'>Alex</a><br/>
          <a href='/Ivan'>Ivan</a><br/>
          <a href='/Mark'>Mark</a><br/>
          <a href='/Niko'>Niko</a>
        </Col>
        <Col>
          <h5>Пользователи</h5>
          <hr/>
        </Col>
      </Row>
    </Card>
  );
};
