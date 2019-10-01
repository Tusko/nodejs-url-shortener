const app = require("./express/server");

const appPort = process.env.PORT || 3030;
app.listen(appPort, () => {
  console.log(`Listening on http://localhost:${appPort}`);
});
