var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.json({message: "Your dummy test works!"});
});

app.listen(process.env.PORT || 3001);

module.exports = app;
