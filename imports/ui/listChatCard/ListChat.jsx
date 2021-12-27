import React from "react";
import {Meteor} from 'meteor/meteor'
import {Card, Row, Col} from "react-bootstrap";
import Chat from "../../Collections/Сhat";

export const ListChat = () => {

 function createChat () {
  const chats = new Chat
   chats.user = Meteor.userId()
   console.log(Meteor.userId())
   console.log(chats)
 }

  return (
    <Card className="listChat shadow text-center">
      <Row>
        <Col>
          <h5>Чаты</h5>
          <hr/>
          <a href='/chat/Alex' onClick={createChat}>Alex</a><br/>
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
