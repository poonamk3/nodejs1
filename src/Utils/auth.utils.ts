import { NextFunction, Response } from "express"
import { UserRequest } from "../Interface/userInterface";
import { User } from "../Models/userModel";
const jwt = require('jsonwebtoken');

export const auth = async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const { _id } = jwt.verify(token, jwtSecretKey);
        const user = await User.findOne({ _id })
        req['user'] = user
        next()

    } catch (err) {
        console.log(err)
        res.status(401).send({ message: "Unauthorized" })
    }
}
