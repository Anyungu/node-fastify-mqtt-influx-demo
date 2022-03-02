/**
 * 
 * @param error 
 * @param request 
 * @param reply 
 * 
 * A global Error handler (Custom and Unkown Exceptions)
 * Might ease error logging code writing and give some Uniformity
 */
 export const errorHandler = (error: Error, request: any, reply: any) => {
    if (error.name == "NOT_FOUND") {
      reply.status(404).send({ code: 404, message: error.message });
    }
    reply.status(500).send({ code: 500, message: error.message });
  };
  
  
  /**
   * 
   * @param request 
   * @param reply 
   * 
   * A message for clients looking for non-exixtent routes
   */
  export const notFoundHandler = (request: any, reply: any) => {
    reply.status(404).send({ code: 404, message: "Sorry, Route Not Found"})
  }