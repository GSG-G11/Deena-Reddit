const router = require('express').Router();
const {
  signUp,
  getSignUp,
  getLogin,
  login,
  clientError,
  serverError,
} = require('../controller');
const auth = require('../middleware/auth');

router.route('/signUp').get(getSignUp).post(signUp);
router.route('/login').get(auth, getLogin).post(login);
router.use(clientError);
router.use(serverError);

module.exports = router;
