import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    users: Array,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const RoomModel = mongoose.model("Room", roomSchema);

export default RoomModel;
