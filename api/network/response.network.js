export const success = ({ res, statusCode = 200, data = {} }) => {
  res.status(statusCode).send({ error: '', data });
};

export const error = ({
  res,
  details = '',
  statusCode = 500,
  message = 'Unexpected Error',
}) => {
  console.error('\x1b[31m', '[RESPONSE ERROR]:', details);
  res.status(statusCode).send({ error: message });
};
