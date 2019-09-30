const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const appPort = process.env.PORT || 3030;
const app = express();
const rs = require("./eventHandler");

app.use(bodyParser);

app.get("/", (req, res) => rs.processing(req, res));

app.get("*", (req, res) => {
  res.status(404).json(rs.response(true, "Page not found"));
});

app.listen(appPort, () => {
  console.log("Listening on http://localhost:" + appPort);
});

module.exports.handler = serverless(app);
