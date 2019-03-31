"use strict";

const bodyParser = require("body-parser");

exports.handleBodyRequestParsing = router => {
  router.use(bodyParser.json());
};
