const bcrypt = require("bcryptjs");

const User = require('../models/User');

module.exports = {
    /* Sign Up */
    createUser: async (req, res) => {
        const name = req.body.name || null;
        const email = req.body.email || null;
        const password = req.body.password || null;
        const age = req.body.age || null;
        const address = req.body.address || null;

        // Create a new user in the database from the details provided in the API request
        await User.create({
            name: name,
            email: email,
            password: bcrypt.hashSync(password,10),
            age: age,
            address: address
        })
        .then((user) => {
            console.log(user);
            console.log("User created successfully in the database");
        })
    }
}