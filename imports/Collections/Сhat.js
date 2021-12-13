import { Class } from 'meteor/jagi:astronomy';
import { Mongo} from "meteor/mongo";
import ChatMess from "./ChatMess";


const Chat = Class.create({
    name: "Chat",
    collection: new Mongo.Collection("chats"),
    fields: {
        msg: [ChatMess],
        user: String
    },
    behaviors: {
        timestamp: {}
    }
})

export default Chat
