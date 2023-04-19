import { NextFunction } from "express";
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    mobileNumber: {
        type: String,
        required: [true, "Mobile Number is required"]
    },
    tokens: [{
        token: {
            type: String
        }
    }]
})

userSchema.pre('save', async function (this: any, next: NextFunction) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }
})

userSchema.post('save',async function (error:any, doc:any, next:NextFunction) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('Email must be unique'));
      } else {
        next(error);
      }
})

export const User = mongoose.model('User', userSchema)
