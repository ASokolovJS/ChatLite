import React from "react";
import { Meteor } from "meteor/meteor";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Users = ({ user }) => {

  function addChat() {
    Meteor.call("addChat", {
      adminId: Meteor.userId(),
      userId: user._id,
    }),
      (err, res) => {
        err ? console.log(err) : res;
      };
  }

  return (
    <ListGroupItem>
      <Link to={user._id} onClick={addChat}>
        {user.profile.name}
      </Link>
    </ListGroupItem>
  );
};
