// ===============================================================================
// ROUTING
// ===============================================================================

var passport = require('passport');

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/drugs/:drugName", function(req, res) {
    console.log("the drugname is: " + req.params.drugName);
  });

  app.get("/api/location/:zipCode", function(req, res) {
    console.log("the drugname is: " + req.params.zipCode);
  });

  app.get("/authorized", function(req, res) {
    res.send("Secured Resource");
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    console.log("The user signed up!");
  });

  app.get('/login', passport.authenticate('auth0', {
    scope: 'openid email profile'
  }), function (req, res) {
    res.redirect('/');
  });
  
  // Perform the final stage of authentication and redirect to previously requested URL or '/user'
  app.get('/callback', function (req, res, next) {
    passport.authenticate('auth0', function (err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        const returnTo = req.session.returnTo;
        delete req.session.returnTo;
        res.redirect(returnTo || '/user');
      });
    })(req, res, next);
  });
  
  // Perform session logout and redirect to homepage
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
