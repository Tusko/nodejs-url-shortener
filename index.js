const app = require("./express/app");
const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  const appPort = process.env.PORT || 3030;
  app.listen(appPort, () => {
    console.log("Listening on http://localhost:" + appPort);
  });
}
