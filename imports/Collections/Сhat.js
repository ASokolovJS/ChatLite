import { Class } from 'meteor/jagi:astronomy';
import {Chats} from "../api/chats";


const Chat = Class.create({
    name: "Chat",
    collection: Chats,
    fields: {
        msg: [Object],
        user: String
    },
    behaviors: {
        timestamp: {}
    }
})

export default Chat
