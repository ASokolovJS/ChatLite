import React from "react";
import {Card, Col, Stack} from "react-bootstrap";
import {SecondaryCard} from "../secondaryCard/SecondaryCard";

export const MainCard = (props) => {
  return (
    <Card className="mainCard shadow">
      <h2 className="text-center">Выберете пользователя, чтобы начать чат</h2>
      <Stack className='text-center mt-3'>
        <Col>
          Чат ведется с {props.name}
        </Col>
        <Col>
          <SecondaryCard/>
        </Col>
      </Stack>
    </Card>
  );
};
