var cool = require("cool-ascii-faces");

var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.send(cool());
  });
};

module.exports = appRouter;
