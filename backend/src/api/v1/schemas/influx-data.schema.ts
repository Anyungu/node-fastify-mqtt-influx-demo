export const getSingleDataOpts = {
  schema: {
    // params: { type: "object", properties: { id: { type: "number" } } },
    response: {
      200: {
        types: "object",
        properties: {
          companyName: { type: "string" },
          coldRoomName: { type: "string" },
          latestRoomHumidity: { type: "number" },
          latestRoomTemperature: { type: "number" },
          highestFieldTemperature: { type: "number" },
          averageRoomTemperature: { type: "number" },
          energyConsumption: { type: "number" },
        },
      },

      404: {
        type: "object",
        properties: {
          code: { type: "number" },
          message: { type: "string" },
        },
      },
      500: {
        type: "object",
        properties: {
          code: { type: "number" },
          message: { type: "string" },
        },
      },
    },
  },
};

[
  {
    result: "_result",
    table: 0,
    _start: "2022-02-28T03:04:29.751318347Z",
    _stop: "2022-03-01T17:54:29.751318347Z",
    averageRoomTemperature: 5.346153846153846,
    count: 338,
    earliestEnergy: 81736,
    energyConsumption: -10896,
    highestFieldTemperature: 30,
    latestEnergy: 70840,
    latestRoomHumidity: 15.8,
    latestRoomTemperature: 1,
    totalRoomTemp: 1807,
  },
];
