import React from "react";
import {Meteor} from 'meteor/meteor'
import {Card, Row, Col} from "react-bootstrap";
import Chat from "../../classes/Сhat";


export const ListChat = () => {
  const chats= new Chat()

 function createChat () {
   chats.user = "1"
   chats.msg = []
   chats.save()
   console.log(Chat.findOne({id: "1"}))
 }

  return (
    <Card className="listChat shadow text-center">
      <Row>
        <Col>
          <h5>Чаты</h5>
          <hr/>
        </Col>
        <Col>
          <h5>Пользователи</h5>
          <hr/>
          <a href='/chat/Alex' onClick={createChat}>Alex</a><br/>
          <a href='/chat/Ivan' onClick={createChat}>Ivan</a><br/>
          <a href='/chat/Mark' onClick={createChat}>Mark</a><br/>
          <a href='/chat/Niko' onClick={createChat}>Niko</a>
        </Col>
      </Row>
    </Card>
  );
};
