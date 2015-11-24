module.exports = function(Address) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Address, ['find','create'])
};
