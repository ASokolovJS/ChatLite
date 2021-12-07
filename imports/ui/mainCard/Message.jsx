import React from "react";

export const Message = ({ msg }) => {
  console.log(msg);
  if (msg.adminId == Meteor.userId()) {
    return <li className="text-end mx-5 mt-5">{msg.message}</li>;
  } else {
    return <li className="mx-5 mt-5">{msg.message}</li>;
  }
};
