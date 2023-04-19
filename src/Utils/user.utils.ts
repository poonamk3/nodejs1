import { USERModelDATA } from "../Interface/userInterface"

export const parseUserData = (data: USERModelDATA, token: string) => {
    return ({
        _id: data._id,
        email: data.email,
        name: data.name,
        mobileNumber: data.mobileNumber,
        token: token,
    })
}
