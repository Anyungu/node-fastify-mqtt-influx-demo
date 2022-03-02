import { connect } from "mqtt";
import { processMqttReceivedData } from "../api/v1/controllers/mqtt/iot-data.controller";
import { saveInfluxIotData } from "../api/v1/services/device-data.service";
import { DeviceBrokerData } from "../models/data-models";

/**
 * Set up the mqtt client and subscribe
 */
export const mqttConnect = () => {
  let client = connect(process.env.MQTT_BROKER_URL, {
    port: parseInt(process.env.MQTT_BROKER_PORT),
    protocol: process.env.MQTT_BROKER_PROTOCOL as any,
  });

  client.on("error", function (err) {
    // handle errors
    console.log(err);
  });

  client.on("connect", function () {
    client.subscribe(process.env.MQTT_BROKER_COLD_CHAIN, function (err) {
      client.on("message", function (topic: string, message: Buffer) {
        if (topic === process.env.MQTT_BROKER_COLD_CHAIN) {
          try {
            processMqttReceivedData(JSON.parse(message.toString()));
          } catch (err) {
            console.log(err);
          }
        }
      });
    });
  });
};

export default { mqttConnect };
