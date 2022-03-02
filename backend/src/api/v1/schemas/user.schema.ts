/* ----------------
user endpoint serializers and schemas
Applies for all similar files
------------------- */

export const getSingleUserOpts = {
  schema: {
    params: { type: "object", properties: { user: { type: "string" } } },
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "number" },
          userName: { type: "string" },
          companyName: { type: "string" },
          coldRoomName: {type: "string" },
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


export const createSingleUserOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
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
    body: {
      type: "object",
      properties: {
        userName: {
          type: "string",
          errorMessage: {
            type: "Bad name",
          },
        },
        companyName: {
          type: "string",
          errorMessage: {
            type: "Bad location",
          },
        },
        coldRoom: {
            type: "string",
          errorMessage: {
            type: "Bad location",
          },
        }
      },
      required: ["userName", "companyName", "coldRoom"],
      errorMessage: {
        required: {
          name: "no name?",
          location: "No location?",
        },
      },
    },
  },
};