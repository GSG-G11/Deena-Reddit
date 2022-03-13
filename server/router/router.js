const router = require('express').Router();
const {
  signUp,
  getSignUp,
  clientError,
  serverError,
} = require('../controller');

router.route('/signUp').get(getSignUp).post(signUp);
router.use(clientError);
router.use(serverError);

module.exports = router;
