import { connectDB } from "./configs/db-connect";
import { influxContext } from "./configs/influx-db-connect";
import { mqttConnect } from "./configs/mqtt-connect";

require("dotenv").config();

export const setUp = () => {
  mqttConnect();
  connectDB();
  let influxInstance = influxContext();
  return { influxInstance };
};
