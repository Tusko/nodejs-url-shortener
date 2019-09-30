const express = require("express");
const serverless = require("serverless-http");
const app = express();
const rs = require("./eventHandler");
const isDev = process.env.NODE_ENV === "development";

app.get("/", (req, res) => rs.processing(req, res));

app.post("/", (req, res) => rs.processing(req, res));

app.get("*", (req, res) => {
  res.status(404).json(rs.response(true, "Page not found"));
});

if (isDev) {
  const appPort = process.env.PORT || 3030;
  app.listen(appPort, () => {
    console.log("Listening on http://localhost:" + appPort);
  });
}

module.exports.handler = serverless(app);
