require("dotenv").config();
const { createServer } = require("@lhci/server");

createServer({
  port: process.env.PORT || 8080,
  storage: {
    storageMethod: "sql",
    sqlDialect: "postgres",
    sqlConnectionSsl: true,
    sqlConnectionUrl: process.env.DATABASE_URL,
  },
}).then(({ port }) => {
  console.log(`LHCI server listening on port ${port}`);
});
