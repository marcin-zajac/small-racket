const checkRole = (roleToCheck) => (req, res, next) => {
  if (req.user.role !== roleToCheck) {
    return res.status(401).json({ errors: [{ msg: 'Access forbinden' }] });
  }
  next();
};

module.exports = checkRole;
