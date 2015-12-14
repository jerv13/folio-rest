module.exports = function(Contact) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Contact, ['find','create'])
};
