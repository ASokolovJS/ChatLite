import {FlowRouter} from "meteor/ostrio:flow-router-extra";
import {Meteor} from "meteor/meteor";
import {mount} from "react-mounter";
import {mainLayout} from "../ui/layouts/mainLayout";
import {MainCard} from "../ui/mainCard/MainCard";
import {authLayout} from "../ui/layouts/autLayout";
import {Login} from "../ui/auth/Login";
import {Register} from "../ui/auth/Register";
import React from "react";


FlowRouter.route('/', {
  name: 'Main',
  action() {
    if (!Meteor.userId()) {
      FlowRouter.redirect("/login")
    } else {
      mount(mainLayout, {
        content: () => <MainCard/>
      })
    }
  }
})


FlowRouter.route('/:id', {
  action() {
    mount(mainLayout, {
      content: () => <MainCard name={FlowRouter.getParam('id')}/>
    })
  }
})


FlowRouter.route('/login', {
  name: "Login",
  action() {
    mount(authLayout, {
      content: () => <Login/>
    })
  }
})

FlowRouter.route('/register', {
  name: "Registration",
  action() {
    mount(authLayout, {
      content: () => <Register/>
    })
  }
})