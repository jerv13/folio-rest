module.exports = function(Link) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Link, ['find','create'])
};
