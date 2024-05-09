export const exceptionHandler = (error, req, res, next) => {
  const statusCode = error.statusCode;
  const message = error.message;
  const errormessage = error.error;
  const success = error.success;
  //
  console.log(error);
  // status code null handle
  //   console.log("the status code is", statusCode, error);
  //logger
  return res
    .status(statusCode)
    .send({ statusCode, message, success, error: errormessage });
};
