module.exports = function (ProfileContent) {

    var fs = require('fs');
    var root = "./../../../data/";

    var backupFile = function (filename, cb) {
        var currentContent = require(root + filename);

        var dateStr = new Date().toISOString();

        // @todo this path does not work
        var backupFile = root + filename + '.' + dateStr + '.bak';
        // console.log("Write backup: " + backupFile);

        fs.writeFile(
            backupFile,
            currentContent,
            'utf8',
            cb
        );
    };

    var writeFile = function (filename, data, cb) {

        //fs.writeFile(
        //    filename,
        //    data,
        //    'utf8',
        //    cb
        //);

        cb(null, data);

        //{
        //    "accessType": "*",
        //    "principalType": "ROLE",
        //    "principalId": "$everyone",
        //    "permission": "DENY"
        //},

        //{
        //    "accessType": "READ",
        //    "principalType": "ROLE",
        //    "principalId": "$everyone",
        //    "permission": "ALLOW"
        //},
        //
        //{
        //    "accessType": "WRITE",
        //    "principalType": "ROLE",
        //    "principalId": "$everyone",
        //    "permission": "ALLOW"
        //}
    };

    var writeData = function (filename, data, cb) {
        backupFile(
            filename,
            function() {
                writeFile(
                    filename,
                    data,
                    function() {
                        cb(null, data)
                    }
                )
            }
        )
    };

    ProfileContent.personal = function (req, cb) {

        var content = require(root + "user.profile.personal.json");

        cb(null, content)
    };

    ProfileContent.contact = function (req, cb) {

        var content = require(root + "user.profile.contact.json");

        cb(null, content)
    };

    ProfileContent.overview = function (req, cb) {

        var all = require(root + "user.profile.professional.json");
        var content = {
            title: all.title,
            summary: all.summary,
            outline: all.outline,
            name: all.contact.name
        };

        cb(null, content)
    };

    ProfileContent.resources = function (req, cb) {

        var all = require(root + "user.profile.professional.json");
        var content = {
            links: all.links
        };

        cb(null, content)
    };

    ProfileContent.skills = function (req, cb) {
        var all = require(root + "user.profile.professional.json");
        var content = all.skills;

        cb(null, content)
    };

    ProfileContent.resume = function (req, cb) {
        var content = require(root + "user.profile.professional.json");
        var edu = require(root + "user.profile.education.json");
        content.education = edu.schools;

        cb(null, content)
    };

    //ProfileContent.updateResume = function (req, cb) {
    //
    //    writeData(
    //        "user.profile.professional.json",
    //        req,
    //        function () {
    //            var content = require(root + "user.profile.professional.json");
    //            var edu = require(root + "user.profile.education.json");
    //
    //            content.education = edu.schools;
    //
    //            cb(null, content)
    //        }
    //    );
    //};

    ProfileContent.remoteMethod(
        'personal',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Personal content.'
        }
    );

    ProfileContent.remoteMethod(
        'contact',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Contact content.'
        }
    );

    ProfileContent.remoteMethod(
        'overview',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Overview content.'
        }
    );

    ProfileContent.remoteMethod(
        'resources',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Resource links content.'
        }
    );

    ProfileContent.remoteMethod(
        'skills',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Skills content.'
        }
    );

    ProfileContent.remoteMethod(
        'resume',
        {
            accepts: {arg: 'req', type: 'object', http: {source: 'req'}},
            returns: {root: true},
            http: {verb: 'GET'},
            description: 'Resume content.'
        }
    );

    //ProfileContent.remoteMethod(
    //    'updateResume',
    //    {
    //        accepts: {arg: 'data', type: 'object'},
    //        returns: {root: true},
    //        http: {verb: 'POST'},
    //        description: 'Resume content.'
    //    }
    //);


};
