import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    subscriber: {
        type: Number,
        default: 0
    },
    subscribedUser: {
        type: [String]
    },
    img: {
        type: String
    }
}, { timestamps: true })

const Users = mongoose.model("Users", userSchema)

export default Users;