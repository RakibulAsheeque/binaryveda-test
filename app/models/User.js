'use strict'
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name entry required"]
    },
    email:{
        type: String,
        required: [true, "email entry required"],
        unique: [true, "email already exists, please provide a different email"]
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
    }
})

module.exports = mongoose.model("User", userSchema);