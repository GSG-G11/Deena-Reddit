const { sign } = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { signUpSchema } = require('../../validation');
const { addUserQuery, checkEmailQuery } = require('../../database/queries');
const CustomizedError = require('../../CustomizedError/CustomizedError');

const signUp = (req, res, next) => {
  signUpSchema.validateAsync(req.body)
    .then((value) => {
      const { email, userName, password } = value;
      checkEmailQuery(email).then((data) => {
        if (data.rows.length !== 0) throw CustomizedError({ msg: 'email is used try another one ', status: 400 });
        else {
          return bcrypt.hash(password, 10).then((hashedPassword) => {
            addUserQuery(userName, email, hashedPassword).then(({ rows }) => {
              sign({ id: rows[0].id }, process.env.SECRET_KEY, (error, token) => {
                if (error) throw CustomizedError({ msg: 'Hash Function Error', status: 400 });
                return res.status(201).cookie('token', token).json({ message: 'Sign in successfully' });
              });
            });
          });
        }
      }).catch((error) => {
        if (error.status) return res.status(error.status).json(error.message);
        next();
      });
    })
    .catch((error) => {
      if (error.details) return res.status(error.status).json(error.message);
      next();
    });
};

module.exports = signUp;
