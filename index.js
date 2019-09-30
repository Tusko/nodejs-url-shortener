const express = require("express");
const app = express();
const appPort = process.env.PORT || 3030;
const rs = require("./eventHandler");

app.get("/", (req, res) => rs.processing(req, res));

app.get("*", (req, res) => {
  res.status(404).json(rs.response(true, "Page not found"));
});

app.listen(appPort, () => {
  console.log("Listening on http://localhost:" + appPort);
});
