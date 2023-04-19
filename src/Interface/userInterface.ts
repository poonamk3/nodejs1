import { Request } from "express"

export interface USERModelDATA {
    email: string
    mobileNumber: string
    name: string
    password: string
    token: [] | string
    _id: string
}

export interface USERATA {
    email: string
    mobileNumber: string
    name: string
    token: string
    _id: string
}

export interface UserRequest extends Request {
    user: USERATA;
    file?: any;
    files?: any;
}
