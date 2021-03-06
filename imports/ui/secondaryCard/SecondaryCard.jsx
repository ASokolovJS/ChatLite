import React, {useState} from "react";
import { Button, Form, InputGroup} from "react-bootstrap";
import ChatMess from "../../classes/ChatMess";
import {Meteor} from "meteor/meteor";
import Chat from "../../classes/Сhat";


export const SecondaryCard = () => {
  const [newMsg, setMsg]=useState('')
  let newMess = new ChatMess()
  const chat = Chat.findOne()

  function create() {

    newMess.createdId = Meteor.userId()
    newMess.message = newMsg
    console.log(newMess)
    // chat.msg.push(newMess)
    console.log(chat)
    setMsg('')
}

  return (
    <div>
      <Form className="secondaryCard m-3">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Введите ваше сообщение"
              aria-label="Введите ваше сообщение"
              aria-describedby="basic-addon2"
              value={newMsg}
              onChange={(e)=> {setMsg(e.target.value)}}
            />
            <Button variant="outline-primary" id="button-addon2" onClick={create}>
              Отправить
            </Button>
          </InputGroup>
      </Form>
    </div>
  )
}
