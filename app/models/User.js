'use strict'
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator')
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name entry required"]
    },
    email:{
        type: String,
        required: [true, "email entry required"],
        unique: true,
        lowercase: true,
        validate: [ isEmail, "Please provide a valid email" ]
    },
    password:{
        type: String,
        required: [true, "Please provide the password"]
    },
    age:{
        type: Number
    },
    address: {
        street: String,
        city: String,
        pin: Number 
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now()
    }
})
userSchema.plugin(uniqueValidator,{ message: '{PATH} must be unique'})

module.exports = mongoose.model("User", userSchema);