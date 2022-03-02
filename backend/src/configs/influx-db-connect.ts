import { InfluxDB } from "@influxdata/influxdb-client";

/**
 *
 * @returns Set up influx instance
 */
export const influxContext = () => {
  const url = process.env.INFLUX_URL;
  const token = process.env.INFLUX_TOKEN;
  const org = process.env.INFLUX_ORG;
  const bucket = process.env.INFLUX_BUCKET;

  const influxDB = new InfluxDB({ url, token });

  const writeApi = influxDB.getWriteApi(org, bucket);

  const queryApi = influxDB.getQueryApi(org);
  return { queryApi, writeApi };
};
