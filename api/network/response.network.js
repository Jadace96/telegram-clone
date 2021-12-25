exports.success = ({ req, res, statusCode = 200, message = '' }) => {
  res.status(statusCode).send({ error: '', body: message });
};

exports.error = ({ req, res, statusCode = 500, message = '' }) => {
  res.status(statusCode).send({ error: message, body: '' });
};
