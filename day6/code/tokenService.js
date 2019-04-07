const jwt = require("jsonwebtoken");

const { SECRET } = require("./constants");

exports.issueToken = user => {
  const { _id: id } = user;

  const payload = {
    user: {
      id
    }
  };

  return jwt.sign(payload, SECRET);
};

exports.verify = token => {
  return jwt.verify(token, SECRET);
};
