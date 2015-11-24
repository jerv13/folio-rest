module.exports = function(Created) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Created, ['find','create'])
};
