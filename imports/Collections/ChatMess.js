import {Class} from "meteor/jagi:astronomy";


const ChatMess = Class.create({
    name: "ChatMess",
    collection: new Mongo.Collection('messages'),
    fields: {
        message: String,
        createdId: String,
        read: {
            type: Boolean,
            default: false
        }
    }
})

export default ChatMess