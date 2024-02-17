const { app } = require("@azure/functions");

app.get("cookies", {
  handler: async (request) => ({
    body: request.headers.get("cookie"),
  }),
  route: "/",
});
