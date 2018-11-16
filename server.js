// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

let express = require("express");
let bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
let app = express();

// Sets an initial port. We"ll use this later in our listener
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// UNAUTHED Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// todo: Cookie Parser here
// todo: Session manager here


// Static directory
app.use(express.static("public"));

// ================================================================================
// UNAUTHED ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from letious URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// AUTHED MIDDLEWARES 
// todo: add login check here


// AUTHE ROUTERS (protected content)
// todo: add awesome product router features here which require a login


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});