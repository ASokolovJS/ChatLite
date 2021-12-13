import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Accounts} from "meteor/accounts-base";

Meteor.methods({
  Registration(name, email, password){
      check(name, String)
      check(email, String)
      check(password, String)

      if(!Accounts.findUserByEmail(email)){
        Accounts.createUser({
          username: name,
          email: email,
          password: password
        })
        console.log("User is created")
      }
    }
})
