import React, { useEffect, useState } from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import { ListGroupItem, Badge } from "react-bootstrap";


export const Chat = ({ chat }) => {

  const [count, setCount] = useState(msgCount);
  const [time, setTime] = useState("");

  Meteor.subscribe("getChats");
  Meteor.subscribe("usersOnline");

  if (Meteor.userId() == chat.userId) {
    var userName = Meteor.users
      .find({ _id: chat.user })
      .fetch()
      .map((item) => item.profile.name);
  } else if (Meteor.userId() == chat.user) {
    var userName = Meteor.users
      .find({ _id: chat.userId })
      .fetch()
      .map((item) => item.profile.name);
  }

  useEffect(() => {
    if (!time) {
      setCount(msgCount);
    } else {
      if (location.pathname == "/" + chat._id) {
        setCount("");
      } else {
        const msgs = MessageCollections.find({
          userId: "/" + chat._id,
        }).fetch();

        const newMsgCount = msgs.filter((msg) => msg.createdAt > time);
        setCount(newMsgCount.length);
      }
    }
  }, [msgCount]);

  function selectChat() {
    setTime(new Date().getTime());
    setCount("");
  }

  if (location.pathname == "/" + chat._id) {
    return (
      <ListGroupItem>
        <Link onClick={() => selectChat()} to={chat._id}>
          {userName}
        </Link>{" "}
      </ListGroupItem>
    );
  } else if (userName) {
    return (
      <ListGroupItem>
        <Link onClick={() => selectChat()} to={chat._id}>
          {userName}
        </Link>{" "}
        <Badge>{count}</Badge>
      </ListGroupItem>
    );
  } else {
    return <ListGroupItem></ListGroupItem>;
  }
};
