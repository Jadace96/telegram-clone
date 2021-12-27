exports.success = ({ res, statusCode = 200, data = {} }) => {
  res.status(statusCode).send({ error: '', data });
};

exports.error = ({ res, statusCode = 500, message = '', details }) => {
  console.error('\x1b[31m', '[RESPONSE ERROR]:', details);
  res.status(statusCode).send({ error: message });
};
