const bcrypt = require("bcryptjs");
const User = require('../models/User');

module.exports = {
    /* Sign In controller function */
    userLogin: async (req, res) => {
      const email = req.body.email || null;
      const password = req.body.password || "";
      
      try {
          await User.findOne({ email: email })
          .then(async (user) => {
              if(!user) {
                // User email not found in the database
                console.log("Email not found in the database");
                res.status(404).send("Email not found")
              }
              else {
                    console.log("User found in the database");
                    
                    //Check whether the correct password has been provided in the request
                    const comparePassword = await bcrypt.compare(password, user.password);
                    if(!comparePassword) {
                        console.log("Incorrect password provided");
                        res.status(401).send("Incorrect password");
                    }
                    else {
                        console.log("Password validated")
                        res.status(200).json({
                            name: user.name,
                            email: user.email,
                            age: user.age,
                            address: user.address
                        })
                    }
                }
            })
        }
        catch (err) {
            //Catch any error occured while running the above try block
            console.log(err);
            res.status(500).send("Error occured while processing your request")
        }
    }
}