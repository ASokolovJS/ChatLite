import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Meteor } from "meteor/meteor";

export const SecondaryCard = () => {
  const [message, setMessage] = useState("");
  const location = useLocation();

  const sendMsg = (e) => {
    e.preventDefault();

    if (!message) return;

    Meteor.call(
      "sendMessage",
      {
        message: message.trim(),
        createdAt: new Date().getTime(),
        adminId: Meteor.userId(),
        userId: location.pathname,
      },
      (err, res) => {
        if (err) {
          console.log("error", err);
        }
        if (res) {
        }
      }
    );

    setMessage("");
  };

  return (
    <Card className="secondaryCard shadow mt-3">
      <h4 className="text-center">Secondary Window Chat</h4>
      <hr />
      <Form>
        <Row>
          <Col className="text-center">
            <Form.Control
              type="text"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </Col>
          <Col md={2} className="text-center">
            <Button onClick={sendMsg}>Send</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
