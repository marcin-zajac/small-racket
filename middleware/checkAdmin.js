module.exports = (req, res, next) => {
  if (req.user.role !== 'Admin') {
    return res.status(401).json({ errors: [{ msg: 'Access forbinden' }] });
  }
  next();
};
