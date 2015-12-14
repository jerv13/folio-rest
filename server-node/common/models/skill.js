module.exports = function(Skill) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Skill, ['find','create'])
};
