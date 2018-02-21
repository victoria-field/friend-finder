

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")


// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use("/", express.static(path.resolve(__dirname, 'app/public')))


// Routes

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
