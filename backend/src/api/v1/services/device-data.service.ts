import { Point } from "@influxdata/influxdb-client";
import { getUser } from ".";
import { influxInstance } from "../../../main";
import { DeviceBrokerData } from "../../../models/data-models";

export const saveInfluxIotData = (data: DeviceBrokerData) => {
  console.log(data);
  const newDataPoint = new Point("ccm")
    .tag("sessionId", data.sessionId)
    .floatField("roomTemperature", data.roomTemperature)
    .floatField("roomHumidity", data.roomHumidity)
    .floatField("fieldTemperature", data.fieldTemperature)
    .floatField("energyMeter", data.energyMeter)
    .stringField("timestamp", data.timeStamp);

  influxInstance.writeApi.writePoint(newDataPoint);
};

// - the latest humidity in % inside the cold room;
// - the latest temperature in °C inside the cold room;
// - the highest temperature in °C in the field for the past 15 minutes;
// - the average temperature in °C inside the cold room for the past 15 minutes;
// - the total energy consumption of the cold room in kWh for the past 15 minutes;

export const getUserCompanyInfluxData = async () => {
  const fluxQuery = `from(bucket:"${process.env.INFLUX_BUCKET}") 
        |> range(start: -15m) 
        |> group()
        |> filter(fn: (r) => r["_measurement"] == "ccm") 
        |> filter(fn: (r) => r["_field"] == "energyMeter" or r["_field"] == "fieldTemperature" or r["_field"] == "roomHumidity" or r["_field"] == "roomTemperature")
        |> pivot(rowKey: ["_time"], columnKey: ["_field"], valueColumn: "_value")
        |> reduce(
          fn: (r, accumulator) => ({

            latestRoomHumidity: r.roomHumidity,
            latestRoomTemperature: r.roomTemperature,

            highestFieldTemperature: if r.fieldTemperature > accumulator.highestFieldTemperature then
            r.fieldTemperature
            else 
            accumulator.highestFieldTemperature,

            totalRoomTemp: r.roomTemperature + accumulator.totalRoomTemp,

            count: 1 + accumulator.count,

            averageRoomTemperature: float(v: (accumulator.totalRoomTemp + r.roomTemperature)) / float(v: accumulator.count + 1),

            latestEnergy: r.energyMeter ,

            earliestEnergy: if accumulator.earliestEnergy == 0.0 then 
            r.energyMeter
            else 
            accumulator.earliestEnergy,
          
            energyConsumption: r.energyMeter - accumulator.earliestEnergy
          
              
          }),
          identity: {latestRoomHumidity: 0.0, latestRoomTemperature: 0.0, highestFieldTemperature: 0.0, totalRoomTemp: 0.0, count: 0, averageRoomTemperature: 0.0, latestEnergy: 0.0, earliestEnergy: 0.0, energyConsumption: 0.0},
)`;

  let deviceData: any[] = await influxInstance.queryApi.collectRows(fluxQuery);

  return {
    ...deviceData[0],
    ...(await getUser("anyungu")),
  };

  // influxInstance.queryApi.queryRows(fluxQuery, {
  //   next(row: string[], tableMeta: FluxTableMetaData) {
  //     const o = tableMeta.toObject(row);
  //     // console.log(JSON.stringify(o, null, 2))
  //     console.log(
  //       `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
  //     );
  //     return o;
  //   },
  //   error(error: Error) {
  //     console.error(error);
  //     console.log("\nFinished ERROR");
  //   },
  //   complete() {
  //     console.log("\nFinished SUCCESS");
  //   },
  // });
};
