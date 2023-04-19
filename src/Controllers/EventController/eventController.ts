import { Response } from "express";
import { UserRequest } from "../../Interface/userInterface";
import { Event } from "../../Models/eventModel";


export const createEvent = async (req: UserRequest, res: Response) => {
    try {
        const { eventName, eventDate, description, eventType } = req.body
        const { _id } = req.user
        let images = []
        // for (let file of req.files) images.push(file.key)
        for (let file of req.files) images.push(file.location)
        const data = { eventName, eventDate, eventType, description, creator: _id, images }
        const event = new Event(data)
        const response = await event.save()
        res.status(200).send({ message: "event created successfully", data: response })
    } catch (err) {
        console.log(err)
        if (err?.message) res.status(400).send({ error: err.message })
        else res.status(500).send({ error: err })
    }
}

export const getUsersEvents = async (req: UserRequest, res: Response) => {
    try {
        const { _id } = req.user
        const response = await Event.aggregate([{ $match: { "creator": { $eq: _id } } }])
        res.status(200).send({ data: response })
    } catch (err) {
        console.log(err)
        if (err?.message) res.status(400).send({ error: err.message })
        else res.status(500).send({ error: err })
    }
}
