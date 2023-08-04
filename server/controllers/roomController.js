import { isArray } from "lodash";
import RoomModel from "../models/roomModel";
import UserModel from "../models/userModel";

// create group

export const createRoom = async (req, res, next) => {
    try {
        const [users, name, owner] = req.body;

        const userConfirmed = [owner];
        if (isArray(users)) {
            users.map(async (idUser) => {
                const userInfo = await UserModel.findOne({ _id: idUser });
                userConfirmed.push(userInfo._id);
            });
        }
        await RoomModel.create({
            name,
            users: userConfirmed,
        });
        return res.status(200).json({
            msg: "Room created successfully",
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Room creation failed",
            error: error,
        });
    }
};
