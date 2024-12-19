import mongoose, { Schema, Document } from "mongoose";


export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}


const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
})

export const User = mongoose.model("User" ,UserSchema)