const sentencer = require("sentencer");
const os = require("os");
exports.generateSentence = () => {
  return sentencer.make(
    "The {{ adjective }} brown {{ noun }} jumped over the {{ adjective }} {{ noun }}"
  );
};

exports.uptime = os.uptime;
