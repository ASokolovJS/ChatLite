import React from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";


export const SecondaryCard = () => {

  return (
    <Card className="secondaryCard shadow mt-3">
      <Form>
        <Row>
          <Col className="text-center">
            <Form.Control
              className='mt-2'
              type="text"
              placeholder="Enter your message "
            />
          </Col>
          <Col md={2} className="text-center">
            <Button className='mt-2'>Send</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
