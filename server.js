require("dotenv").config();

/* External libraries for server connection */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http");

/* External library for Database conection */
const mongoose = require("mongoose");

/* Swagger documentation */
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swagger = require("./docs/swagger");

var ENV = process.env.NODE_ENV || "development";
var PORT = process.env.PORT || 8080;

/* Server configuration */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("build"));

// require("./app/router")(app);

if (ENV !== "production") {

  // Initialize swagger-jsdoc
  // returns validated swagger spec in json format
  const swaggerSpec = swaggerJSDoc(swagger);

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

// Connect to database
mongoose.connect('mongodb+srv://mongo:QTtpqKXrVjJWDE2g@cluster0.hgtu8.mongodb.net/binaryveda-test?retryWrites=true&w=majority',
() => {
  console.log("Connected to the database successfully");
},
(err) => {
  console.log(err);
})

// Create a Server
const server = http.createServer(app);

// Initialise the server
server.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});