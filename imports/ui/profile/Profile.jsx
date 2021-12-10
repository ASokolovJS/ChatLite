import React, { useEffect } from "react";
import { Meteor } from "meteor/meteor";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Profile = () => {
  const logout = () => Meteor.logout();

  return (
      <Card className="profile shadow mb-5">
        <h5 className="text-center mt-2">Welcome</h5>
        <hr />
        <ul>
          <li>
            Your email -
            <Button
              variant="outline-primary"
              className="mx-3"

            >
              Подтвердить
            </Button>
          </li>
          <li>Date: </li>
        </ul>
        <a href="/login" className="btn btn-primary" onClick={logout}>
          Exit
        </a>
      </Card>
    );
 };
