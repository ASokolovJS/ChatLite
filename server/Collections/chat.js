import { Class } from 'meteor/jagi:astronomy';
import {Chats} from "../../imports/api/chats";
import { MessageCollections} from "../../imports/api/messageCollections";

const ChatMess = Class.create({
    name: "Message",
    collection: MessageCollections,
    fields: {
        message: String,
        createdId: String,
        read: Boolean
    }
})

export const Chat = Class.create({
    name: "Chat",
    collection: Chats,
    fields: {
        msg: [ChatMess],
        user: Meteor.user()
    },
    behaviors: {
        timestamp: {}
    }
})

