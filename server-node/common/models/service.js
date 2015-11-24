module.exports = function (Service) {

    Service.config = function (req, cb) {
        var content = require("./../../../data/server.config.json");

        cb(null, "TEST")
    };

    Service.remoteMethod(
        'config',
        {
            accepts: {arg: 'msg', type: 'String'},
            returns: {type: 'String', root:true, http: { source: 'body' }},
            http: {verb: 'GET'},
            description: 'Config.'
        }
    );

    Service.afterRemote('config', function(context, remoteMethodOutput, next) {
        console.log(context);
        context.result = "testd"; //JSON.stringify(context.result);
        next();
    });
};
