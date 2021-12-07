import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MessageCollections } from "../../api/messageCollections";
import { Message } from "./Message";

export const MainCard = () => {
  
  Meteor.subscribe("getMessage");

  const location = useLocation();
  if (location.pathname !== "/") {
    const msg = useTracker(() =>
      MessageCollections.find({ userId: location.pathname }).fetch()
    );

    return (
      <Card className="mainCard shadow">
        <h1 className="text-center">Main Window chat</h1>
        <hr />
        <ul>
          {msg.map((message) => (
            <Message key={message._id} msg={message} />
          ))}
        </ul>
      </Card>
    );
  } else {
    return (
      <Card className="mainCard shadow">
        <h1 className="text-center">Main Window chat</h1>
        <hr />
        <h2 className="text-center">Сhoose a chat</h2>
      </Card>
    );
  }
};
