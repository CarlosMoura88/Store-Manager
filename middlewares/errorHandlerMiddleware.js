const error = {
  ValidationError: 400,
  NotFoundError: 404,
};

const errorHandlerMiddleware = async ({ name, message }, _req, res, _next) => { 
  console.log(name);
  console.log(message);
  const status = error[name];
  if (!status) return res.sendStatus(500);
  if (message.includes('must be')) return res.status(422).json({ message });
  return res.status(status).json({ message });
};

module.exports = errorHandlerMiddleware;