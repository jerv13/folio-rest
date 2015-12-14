module.exports = function(Company) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Company, ['find','create'])
};
