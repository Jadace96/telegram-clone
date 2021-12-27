exports.success = ({ res, statusCode = 200, message = '' }) => {
  res.status(statusCode).send({ error: '', body: message });
};

exports.error = ({ res, statusCode = 500, message = '', details }) => {
  console.error('\x1b[31m', '[RESPONSE ERROR]:', details);
  res.status(statusCode).send({ error: message, body: '' });
};
