import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { BrowserRouter as Router } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { Container, Row, Col } from "react-bootstrap";
import { ListChat } from "./listChatCard/ListChat";
import { MainCard } from "./mainCard/MainCard";
import { Profile } from "./profile/Profile";
import { SecondaryCard } from "./secondaryCard/SecondaryCard";
import { Auth } from "./auth/Auth";

export const App = () => {

  const user = useTracker(() => Meteor.user());

  return (
    <div>
      {user ? (
        <Fragment>
          <Container>
            <Router>
              <Row>
                <Col md={8}>
                  <MainCard />
                  <SecondaryCard />
                </Col>
                <Col md={4}>
                  <Profile />
                  <ListChat />
                </Col>
              </Row>
            </Router>
          </Container>
        </Fragment>
      ) : (
        <Auth to='/login'/>
      )}
    </div>
  );
};
