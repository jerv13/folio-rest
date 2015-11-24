module.exports = function(Position) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Position, ['find','create'])
};
