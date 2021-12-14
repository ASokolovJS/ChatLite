import React from "react";
import {FlowRouter} from "meteor/ostrio:flow-router-extra";
import {Meteor} from "meteor/meteor";
import {Nav} from "react-bootstrap";


export const Profile = () => {
  const logout = () => confirm('Вы действительно хотите выйти?') ? Meteor.logout(() => FlowRouter.go('/login')) : console.log("Вы не вышли");

  return (
    <Nav>
      <Nav.Item>
        <Nav.Link onClick={logout}>Выйти</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
