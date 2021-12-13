import {FlowRouter} from "meteor/ostrio:flow-router-extra";
import {Meteor} from "meteor/meteor";
import {mount} from "react-mounter";
import {mainLayout} from "../ui/layouts/mainLayout";
import {MainCard} from "../ui/mainCard/MainCard";
import {Profile} from "../ui/profile/Profile";
import {SecondaryCard} from "../ui/secondaryCard/SecondaryCard";
import {authLayout} from "../ui/layouts/autLayout";
import {Login} from "../ui/auth/Login";
import {Register} from "../ui/auth/Register";
import React from "react";
import {ListChat} from "../ui/listChatCard/ListChat";

FlowRouter.route('/',{
    name: 'Main',
    action(){
        if(!Meteor.userId()){
            FlowRouter.redirect("/login")
        }else{
            mount(mainLayout,{
                content: () => <MainCard/>,
                list: () => <ListChat/>,
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