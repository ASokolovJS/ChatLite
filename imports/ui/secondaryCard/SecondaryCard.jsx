import React, {useState} from "react";
import { Button, Form, InputGroup} from "react-bootstrap";
import ChatMess from "../../Collections/ChatMess";


export const SecondaryCard = () => {
  const [newMsg, setMsg]=useState('')

  function send() {
    event.preventDefault()
    const messages = new ChatMess
    messages.message = newMsg
    messages.save()
    console.log(messages)
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
            <Button variant="outline-primary" id="button-addon2" onClick={send}>
              Отправить
            </Button>
          </InputGroup>
      </Form>
    </div>
  )
}
