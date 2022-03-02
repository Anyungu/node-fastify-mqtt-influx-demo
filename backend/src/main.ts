import { SetupAPI } from "@influxdata/influxdb-client-apis";
import { buildApp } from "./app";
import { setUp } from "./set-up";

const { influxInstance } = setUp();

export { influxInstance };

// START SERVER
let server = buildApp();
server.listen(process.env.APP_PORT || 9191, "0.0.0.0", function (err, address) {
  if (err) {
    server.log.error(err.message);
    process.exit(1);
  }
  server.log.info(`Server listening on port ${address}`);
});
