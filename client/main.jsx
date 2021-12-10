import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {mount} from 'react-mounter'
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {Login} from "../imports/ui/auth/Login";
import {authLayout} from "../imports/ui/layouts/autLayout";
import {Meteor} from "meteor/meteor";
import {MainCard} from "../imports/ui/mainCard/MainCard";
import {mainLayout} from "../imports/ui/layouts/mainLayout";
import {Register} from "../imports/ui/auth/Register";
import {Profile} from "../imports/ui/profile/Profile";
import {SecondaryCard} from "../imports/ui/secondaryCard/SecondaryCard";


FlowRouter.route('/',{
    name: 'Main',
    action(){
        if(Meteor.loggingIn()){
            FlowRouter.redirect("/login")
        }else{
            mount(mainLayout,{
                content: () => <MainCard/>,
                profile: () => <Profile/>,
                msgCard: () => <SecondaryCard/>,
            })
        }
    }
})

FlowRouter.route('/login', {
    name: "Login",
    action(){
        mount(authLayout, {
            content: () => <Login/>
        })
    }
})

FlowRouter.route('/register', {
    name: "Registration",
    action(){
        mount(authLayout, {
            content: () => <Register/>
        })
    }
})