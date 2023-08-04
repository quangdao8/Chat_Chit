import mongoose from "mongoose";

const messageRoomSchema = new mongoose.Schema(
    {
        roomId: {
            type: mongoose.Types.ObjectId(),
            ref: "Room",
            required: true,
        },
        message: {
            text: {
                type: String,
                required: true,
            },
        },
        sender: {
            type: mongoose.Types.ObjectId(),
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const messageRoomModel = mongoose.model("MessageRoom", messageRoomSchema);

export default messageRoomModel;
