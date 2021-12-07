import React, { useEffect } from "react";
import { Meteor } from "meteor/meteor";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Profile = () => {
  const logout = () => Meteor.logout();
  const userEmail = Meteor.user().emails.find((item) => item.address).address;
  const date = new Date().toString();

  useEffect(() => {
    const name = Meteor.user().profile.name;
    Meteor.users.update(Meteor.userId(), {
      $set: {
        profile: {
          name: name,
          timeLog: new Date().getTime(),
        },
      },
    });
  }, [Meteor.loggingIn()]);

  function verefEmail() {
    Meteor.call("verEmail");
  }

  if (!Meteor.user().emails.find((item) => item.address).verified) {
    return (
      <Card className="profile shadow mb-5">
        <h5 className="text-center mt-2">Welcome</h5>
        <hr />
        <ul>
          <li>
            Your email - {userEmail}{" "}
            <Button
              variant="outline-primary"
              className="mx-3"
              onClick={verefEmail}
            >
              Подтвердить
            </Button>
          </li>
          <li>Date: {date}</li>
        </ul>
        <Link to="/login" className="btn btn-primary" onClick={logout}>
          Exit
        </Link>
      </Card>
    );
  } else {
    return (
      <Card className="profile shadow mb-5">
        <h5 className="text-center mt-2">Welcome</h5>
        <hr />
        <ul>
          <li>
            Your email - {userEmail} (<em>Подтвержденa</em>)
          </li>
          <li>Date: {date}</li>
        </ul>
        <Button variant="outline-primary" onClick={logout}>
          Exit
        </Button>
      </Card>
    );
  }
};
