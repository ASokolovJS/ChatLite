import { Meteor } from "meteor/meteor";
import { Chats } from "../imports/api/chats";
import { MessageCollections } from "../imports/api/messageCollections";
import { Accounts } from "meteor/accounts-base";

Meteor.publish("getMessage", function () {
  return MessageCollections.find();
});

Meteor.publish("usersOnline", function () {
  return Meteor.users.find();
});

Meteor.publish("getChats", function () {
  return Chats.find();
});

Meteor.methods({
  register({ login, password, name }) {
    if (!Accounts.findUserByEmail(login)) {
      Accounts.createUser({
        email: login,
        password: password,
        profile: {
          name: name,
          timeLog: new Date().getTime()
        },
      });
    }
  },
});

Meteor.methods({
  addChat({ adminId, userId }) {
    if (userId !== adminId) {
      if (!Chats.find({ user: userId }).fetch().find((i) => i.userId == adminId)) {
        if (!Chats.find({userId: userId}).fetch().find((i) => i.user == adminId)
        )
          Chats.insert({
            userId: adminId,
            user: userId,
          });
      }
    }
  },
});

Meteor.methods({
  sendMessage({ message, createdAt, adminId, userId }) {
    MessageCollections.insert({
      message,
      createdAt,
      adminId,
      userId,
    });
  },
});

Meteor.methods({
  verEmail(){
    Accounts.sendVerificationEmail(Meteor.userId())
  }
})
