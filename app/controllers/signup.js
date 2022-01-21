const bcrypt = require("bcryptjs");
const User = require('../models/User');

module.exports = {
    /* Sign Up controller function*/
    createUser: async (req, res) => {
        const name = req.body.name || null;
        const email = req.body.email || null;
        const password = req.body.password || "";
        const age = req.body.age || null;
        const address = req.body.address || null;

        //Checking for small length password
        if(password.length < 2) {
            console.log("Password length provided by the user is too small");
            res.status(400).send("Password length too small. Please provide longer password")
        }
        else {

            try{
                //hash password to be stored in the database for security
                const hashPassword = await bcrypt.hash(password, 10)

                // Create a new user in the database from the details provided in the API request
                await User.create({
                    name: name,
                    email: email,
                    password: hashPassword,
                    age: age,
                    address: address
                })
                .then((user) => {
                    //User created in database without any error
                    console.log(`User - ${user.name} created successfully in the database`);
                    res.status(201).send("User has signed up successfully");
                })
                .catch((err) => {
                    //Catch error while creating user in database
                    console.log(err);
                    res.status(400).send(err.message)
                })
            }
            catch (err) {
                //Catch error which may occur while running above code in try block
                console.log(err);
                res.status(500).send("Error occured while processing your request");
            }
        }
    }
}