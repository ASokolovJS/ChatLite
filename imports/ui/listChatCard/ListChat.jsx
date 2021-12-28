import React from "react";
import {Meteor} from 'meteor/meteor'
import {Card, Row, Col} from "react-bootstrap";
import Chat from "../../classes/Сhat";
import Chats from "../../Collections/Chats";

export const ListChat = () => {
  const chatss= new Chat()
 function createChat () {
   chatss.user = Meteor.userId()
   chatss.msg = []
   chatss.save()
   console.log(Chats.findOne({user: Meteor.userId()}))
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
