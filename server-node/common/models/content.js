module.exports = function (Content) {
    var remotes = require("./../remotes/index.js");
    remotes.whiteList(Content, ['find','create'])

    Content.beforeRemote(
        'create',
        function(ctx, result, next) {
            // @todo
        }
    );
};
