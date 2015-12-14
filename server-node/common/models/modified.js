module.exports = function(Modified) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Modified, ['find','create'])
};
