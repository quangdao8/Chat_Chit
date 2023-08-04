import Message from "../models/messageModel";

export const getMessages = async (req, res, next) => {
    try {
        const { from, to } = req.body;

        const messages = await Message.find({
            users: {
                $all: [from, to],
            },
        }).sort({ updateAt: 1 });

        const projectMessage = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            };
        });
        res.json(projectMessage);
    } catch (error) {
        next(error);
    }
};

export const addMessage = async (req, res, next) => {
    try {
        const { from, to, message } = req.body;
        const data = await Message.create({
            message: { text: message },
            users: [from, to],
            sender: from,
        });
        if (data) return res.json({ msg: "Message added successfully" });
        else return res.json({ msg: "Message not added successfully" });
    } catch (error) {
        next(error);
    }
};

export const groupMessage = async (req, res, next) => {
    try {
    } catch (error) {}
};
