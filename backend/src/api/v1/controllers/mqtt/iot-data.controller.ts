import { DeviceBrokerData } from "../../../../models/data-models";
import { saveInfluxIotData } from "../../services";


export const processMqttReceivedData = (data: DeviceBrokerData) => {
    saveInfluxIotData(data)
}