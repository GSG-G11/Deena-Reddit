const router = require('express').Router();
const {
  signUp,
  getSignUp,
  getLogin,
  login,
  addPost,
  getPost,
  deletePost,
  clientError,
  serverError,
} = require('../controller');
const auth = require('../middleware/auth');

router.route('/signUp').get(getSignUp).post(signUp);
router.route('/login').get(auth, getLogin).post(login);
router.route('/reddit').get(auth, getPost).post(auth, addPost);
router.route('/reddit/:id').delete(auth, deletePost);
router.use(clientError);
router.use(serverError);

module.exports = router;
