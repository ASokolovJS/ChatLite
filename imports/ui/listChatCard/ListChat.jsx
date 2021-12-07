import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Chats } from "../../api/chats";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { Chat } from "./Chat";
import { Users } from "./Users";

export const ListChat = () => {
  Meteor.subscribe("getChats");
  Meteor.subscribe("usersOnline");

  const users = Meteor.users.find().fetch();

  const chat = useTracker(() => Chats.find({}).fetch());

  return (
    <Card className="listChat shadow text-center">
      <Row>
        <Col>
          <h4>List Chats</h4>
          <hr />
          <ListGroup variant="flush">
            {chat.map((chats) => (
              <Chat key={chats._id} chat={chats} />
            ))}
          </ListGroup>
        </Col>
        <Col>
          <h4>Users Online</h4>
          <hr />
          <ListGroup>
            {users.map((user) => (
              <Users key={user._id} user={user} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
};
