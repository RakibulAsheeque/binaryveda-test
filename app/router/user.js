const { createUser } = require('../controllers').signup;
const { userLogin } = require('../controllers').login;

module.exports = (app) => {
//Routes for user management

// Sign-up route to create new user
app.post('/sign-up', createUser);

// Sign-in user with correct credentials
app.post('/login', userLogin);
}