const { join } = require('path');

const clientError = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'html', '404.html'));
};

const serverError = (err, req, res, next) => {
  if (err.status === 400) {
    res.json({ message: err.message, status: 400 });
  } else {
    res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
  }
};

module.exports = { clientError, serverError };
