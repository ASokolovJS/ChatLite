import React, { useEffect } from "react";
import { Meteor } from "meteor/meteor";
import {Card, Button, Nav} from "react-bootstrap";


export const Profile = () => {
  const logout = () => Meteor.logout();

  return (
     <Nav className='justify-content-end'>
         <Nav.Link href='/login' onClick={logout}>Exit</Nav.Link>
     </Nav>
    );
 };
