module.exports = function(Degree) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Degree, ['find','create'])
};
