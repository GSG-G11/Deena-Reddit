const logout = (req, res) => {
  res.clearCookie('token');
  res.clearCookie('userName');
  res.redirect('/');
};

module.exports = logout;

  // res.status(200).clearCookie('token').redirect('/');  