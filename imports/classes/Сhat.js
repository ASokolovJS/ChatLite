import { Class } from 'meteor/jagi:astronomy';
import ChatMess from "./ChatMess";
import Chats from "../Collections/Chats";

const Chat = Class.create({
    name: "Chat",
    collection: Chats,
    fields: {
        msg: [ChatMess],
        user: String
    },
    behaviors: {
        timestamp: {}
    }
})

export default Chat
