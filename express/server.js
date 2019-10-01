const express = require("express");
const serverless = require("serverless-http");

const app = express();
const rs = require("./eventHandler");

app.get("/", (req, res) => rs.processing(req, res));

app.post("/", (req, res) => rs.processing(req, res));

app.get("*", (req, res) => {
  res.status(404);
  res.json(rs.response(true, "Page not found"));
});

module.exports = app;
module.exports.handler = serverless(app);
