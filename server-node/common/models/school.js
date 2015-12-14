module.exports = function(School) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(School, ['find','create'])
};
