import { Request, Response } from "express";
import { User } from "../../Models/userModel";
import { parseUserData } from "../../Utils/user.utils";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const signupController = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body)
        const response = await user.save()
        res.status(200).send({ message: "account created successfully" })
    } catch (err: any) {
        console.log(err)
        if (err?.message) res.status(400).send({ error: err.message })
        else res.status(500).send({ error: err })
    }
}

export const checkUserExistController = async (req: Request, res: Response) => {
    try {
        if (req.query.email) {
            const response = await User.find({ email: req.query.email })
            if (response.length) res.status(400).send({ message: "Email already exist" })
            else res.status(200).send({ message: "Email not exist" })
        } else res.status(400).send({ message: "Please send Email" })
    } catch (err: any) {
        res.status(500).send({ error: err?.message || err })
        console.log(err)
    }
}

export const signinController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const response = await User.findOne({ email })
            if (response) {
                if (await bcrypt.compare(password, response.password)) {
                    let jwtSecretKey = process.env.JWT_SECRET_KEY;
                    let data = {
                        time: Date(),
                        _id: response._id,
                    }
                    const token = jwt.sign(data, jwtSecretKey);
                    res.status(200).send({ message: "Login Successfull", data: parseUserData(response, token) })
                } else res.status(400).send({ error: "Email or Password is incorrect" })
            } else res.status(400).send({ error: "User Dosen't exist" })
        } else res.status(400).send({ error: "Please enter email and password" })
    } catch (err) {
        console.log(err)
    }
}

